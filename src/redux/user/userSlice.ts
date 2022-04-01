import { createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { isEmpty } from "react-redux-firebase";
import { auth, db } from "../../db/db";

const initialState = {
  currentUser: { username: "", id: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state: any) => {
      state.currentUser = null;
    },
    setUsername: (state, action) => {
      state.currentUser.username = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { logout, setUsername, setUser } = userSlice.actions;
export default userSlice.reducer;

export const setUserAction = (user: any) => {
  return async (dispatch: any) => {
    let checkUser = await getDocs(
      query(collection(db, "Users"), where("id", "==", user.id))
    );
    if (isEmpty(checkUser.docs)) {
      addDoc(collection(db, "Users"), {
        email: user.email,
        id: user.id,
        username: user.username,
        createdAt: new Date().toLocaleDateString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      });
      dispatch(setUser(user));
    } else {
      let data = checkUser.docs.map((item) => ({ ...item.data() }));
      let userExsist = Object.assign({}, ...data);
      dispatch(setUser(userExsist));
    }
  };
};

export const setUsernameAction = (username: string) => {
  return async (dispatch: any) => {
    getDocs(
      query(collection(db, "Users"), where("id", "==", auth.currentUser.uid))
    ).then((item) => {
      item.docs.map((item) => {
        updateDoc(doc(db, "Users", item.id), {
          username,
        });
      });
    });

    dispatch(setUsername(username));
  };
};
