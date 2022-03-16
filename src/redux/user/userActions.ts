import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../db/db";
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
