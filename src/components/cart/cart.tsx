import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
const Cart = () => {
  const qunatity = useSelector((reducer: RootState) => reducer.cart.quantity);
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <span>{qunatity}</span>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
