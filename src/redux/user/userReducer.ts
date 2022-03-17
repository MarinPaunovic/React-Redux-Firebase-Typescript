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
    case UserActionTypes.GET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SET_USERNAME:
      return {
        ...state,
        currentUser: { ...state.currentUser, username: action.payload },
      };
    case UserActionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
