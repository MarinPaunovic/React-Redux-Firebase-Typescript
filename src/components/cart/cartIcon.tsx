import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((reducer: RootState) => reducer.cart.quantity);
  return (
    <>
      <div>
        <CustomButton
          type="button"
          className="material-icons-outlined"
          style={{
            fontSize: "60px",
          }}
          onClick={() => dispatch(toggleCartHidden())}
        >
          shopping_bag
        </CustomButton>
        <p className="CartQuantity">{quantity}</p>
      </div>
    </>
  );
};

export default CartIcon;
