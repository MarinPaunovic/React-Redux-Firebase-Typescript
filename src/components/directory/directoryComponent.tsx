import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCartItem,
  removeCartItem,
  toggleCartHidden,
} from "../../redux/cart/cartActions";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";

const Directory = () => {
  const dispatch = useDispatch();

  const { quantity } = useSelector((reducer: RootState) => ({
    quantity: reducer.cart.quantity,
  }));
  useEffect(() => {
    return () => {
      dispatch(toggleCartHidden());
    };
  }, []);
  return (
    <div className="directory-menu">
      <CustomButton
        style={{ color: "red" }}
        onClick={() => dispatch(removeCartItem())}
        disabled={!quantity}
      >
        <span className="material-icons-outlined">chevron_left</span>
      </CustomButton>
      <CustomButton
        style={{ color: "red" }}
        onClick={() => dispatch(addCartItem())}
      >
        <span className="material-icons-outlined">chevron_right</span>
      </CustomButton>
    </div>
  );
};

export default Directory;
