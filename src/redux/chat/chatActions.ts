import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../../db/db";
import { ChatTypes } from "./chatTypes";

export const getMessages = () => {
  return async (dispatch: any) => {
    onSnapshot(collection(db, "Messages"), (doc: any) => {
      let messages = doc.docs.map((item: any) => item);
      dispatch({ type: ChatTypes.GET, payload: messages });
    });
  };
};
export const sendMessage = (message: any, username: any, id: any) => {
  return (dispatch: any) => {
    if (!message) {
      return;
    }
    addDoc(collection(db, "Messages"), {
      message: message,
      id: id,
      username,
      createdAt: serverTimestamp(),
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
