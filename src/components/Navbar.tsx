import { useDispatch, useSelector } from "react-redux";
import Logout from "./logout/logout";

import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";
import { setTheme } from "../redux/theme/themeActions";
import { NavbarStyle } from "./styled-components/navbarStyle";
import PlayerStatisticComponent from "./playerStatistic/playerStatisticComponent";

const Navbar = () => {
  const user = useSelector((reducer: RootState) => reducer.user.currentUser);
  const theme = useSelector((reducer: RootState) => reducer.theme.theme);
  const dispatch = useDispatch();

  return (
    <NavbarStyle>
      <div className="NavbarTitle">BOXER</div>
      <PlayerStatisticComponent />
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/battle">
        <span>Battle</span>
      </Link>
      {user && <Logout />}
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
    </NavbarStyle>
  );
};

export default Navbar;
