import { createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../db/db";

const initialState = {
  messages: [],
  id: "",
  hidden: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getMessages: (state, action) => {
      state.messages = action.payload;
    },
    likeMessage: (state, action) => {},
    toggleChat: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const getMessagesAction = () => {
  return async (dispatch: any) => {
    onSnapshot(
      query(
        collection(db, "Messages"),
        limitToLast(5),
        orderBy("createdAtServer")
      ),
      (doc: any) => {
        console.log("onSnapshot triggers");
        let messages = doc.docs.map((item: any) => item);
        dispatch(getMessages(messages));
      }
    );
  };
};
export const { getMessages, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
