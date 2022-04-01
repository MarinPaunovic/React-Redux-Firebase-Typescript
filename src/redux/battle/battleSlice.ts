import { AnyAction, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { ThunkDispatch } from "redux-thunk";
import { db } from "../../db/db";
import { RootState } from "../rootReducer";

const initialState = {
  cooldown: false,
};

export const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setCooldown: (state, action) => {
      state.cooldown = action.payload;
    },
  },
});

export const setCooldownAction = (id: string) => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
    let battle = await getDocs(
      query(
        collection(db, "Battles"),
        where("userID", "==", id),
        orderBy("battleAt")
      )
    );
    console.log(battle);
  };
};
export const { setCooldown } = battleSlice.actions;

export default battleSlice.reducer;
