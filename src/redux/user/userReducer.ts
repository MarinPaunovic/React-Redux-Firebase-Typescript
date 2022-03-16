import { UserActionTypes } from "./userTypes";
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    case UserActionTypes.GET:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
