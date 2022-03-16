import { CartTypes } from "./cartTypes";

const INITIAL_STATE = {
  hidden: true,
  quantity: 0,
};
const cartReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEM:
      return { ...state, quantity: state.quantity + 1 };
    case CartTypes.REMOVE_ITEM:
      if (state.quantity === 0) {
        return state;
      }
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export default cartReducer;
