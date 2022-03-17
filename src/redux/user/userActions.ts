import {
  addDoc,
  doc,
  collection,
  getDocs,
  query,
  setDoc,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { isEmpty } from "react-redux-firebase";
import { auth, db } from "../../db/db";
import { UserActionTypes } from "./userTypes";

export const loginAction = (user: any) => ({
  type: UserActionTypes.LOGIN,
  payload: user,
});

export const logoutAction = () => ({
  type: UserActionTypes.LOGOUT,
});

export const getUser = (id: string) => {
  return async (dispatch: any) => {
    const getUser = await getDocs(
      query(collection(db, "Users"), where("id", "==", id))
    );
    const data = getUser.docs.map((item) => ({
      username: item.data().username,
      id: id,
      name: item.data().name,
      email: item.data().email,
    }));
    let user = Object.assign({}, ...data);

    dispatch({
      type: UserActionTypes.GET_USER,
      payload: user,
    });
  };
};

export const setUser = (user: any) => {
  return async (dispatch: any) => {
    let checkUser = await getDocs(
      query(collection(db, "Users"), where("id", "==", user.id))
    );
    if (isEmpty(checkUser)) {
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
      dispatch({ type: UserActionTypes.SET_USER, payload: user });
    } else {
      let data = checkUser.docs.map((item) => ({ ...item.data() }));
      let userExsist = Object.assign({}, ...data);
      dispatch({ type: UserActionTypes.SET_USER, payload: userExsist });
    }
  };
};

export const setUsername = (username: string) => {
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

    dispatch({ type: UserActionTypes.SET_USERNAME, payload: username });
  };
};
