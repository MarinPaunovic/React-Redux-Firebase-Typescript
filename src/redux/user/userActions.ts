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
import { auth, db } from "../../db/db";
import { UserActionTypes } from "./userTypes";
export const LoginAction = (user: any) => ({
  type: UserActionTypes.LOGIN,
  payload: user,
});

export const LogoutAction = () => ({
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
      type: UserActionTypes.GET,
      payload: user,
    });
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
