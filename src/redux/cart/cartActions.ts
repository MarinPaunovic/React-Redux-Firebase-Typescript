import { CartTypes } from "./cartTypes";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = () => ({
  type: CartTypes.ADD_ITEM,
});

export const removeCartItem = () => ({
  type: CartTypes.REMOVE_ITEM,
});
