import { useDispatch, useSelector } from "react-redux";
import Logout from "./logout/logout";
import CartIcon from "./cart/cartIcon";
import Cart from "./cart/cart";
import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";
import { setTheme } from "../redux/theme/themeActions";
import { NavbarStyle } from "./styled-components/navbarStyle";

const Navbar = () => {
  const user = useSelector((reducer: RootState) => reducer.user.currentUser);
  const hidden = useSelector((reducer: RootState) => reducer.cart.hidden);
  const theme = useSelector((reducer: RootState) => reducer.theme.theme);
  const dispatch = useDispatch();

  return (
    <NavbarStyle>
      <div className="NavbarTitle">BOXER</div>
      {theme && theme === "dark" ? (
        <button
          className="material-icons-outlined"
          onClick={() => dispatch(setTheme("light"))}
        >
          light_mode
        </button>
      ) : (
        <button
          className="material-icons-outlined"
          onClick={() => dispatch(setTheme("dark"))}
        >
          dark_mode
        </button>
      )}
      <Link to="/shop">SHOP</Link>
      <Link to="/">HOME</Link>
      {user && <Logout />}
      <CartIcon />

      {!hidden && <Cart />}
    </NavbarStyle>
  );
};

export default Navbar;
