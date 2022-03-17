import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  serverTimestamp,
  limitToLast,
  orderBy,
  query,
} from "firebase/firestore";

import { auth, db } from "../../db/db";
import { ChatTypes } from "./chatTypes";

export const getMessages = () => {
  return async (dispatch: any) => {
    onSnapshot(
      query(
        collection(db, "Messages"),
        limitToLast(5),
        orderBy("createdAtServer")
      ),
      (doc: any) => {
        let messages = doc.docs.map((item: any) => item);

        dispatch({ type: ChatTypes.GET, payload: messages });
      }
    );
  };
};
export const sendMessage = (message: any, username: any) => {
  return () => {
    if (!message) {
      return;
    }

    addDoc(collection(db, "Messages"), {
      message: message,
      id: auth.currentUser.uid,
      username,
      createdAtLocal: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      createdAtServer: serverTimestamp(),
    });
  };
};

export const deleteMessage = (id: string) => ({
  type: ChatTypes.DELETE,
  payload: id,
});

export const likeMessage = (id: string) => ({
  type: ChatTypes.LIKE,
  payload: id,
});

export const toggleChat = () => ({
  type: ChatTypes.TOGGLE,
});
