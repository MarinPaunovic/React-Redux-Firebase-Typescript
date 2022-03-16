import { ChatTypes } from "./chatTypes";

const INITIAL_STATE = {
  message: "",
  id: "",
  hidden: false,
};
const chatReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ChatTypes.GET:
      return {
        ...state,
        message: action.payload,
      };
    case ChatTypes.SEND:
      return {
        ...state,
        message: action.payload,
      };
    case ChatTypes.DELETE:
      return {
        ...state,
      };
    case ChatTypes.TOGGLE:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default chatReducer;
