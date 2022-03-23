import { useDispatch } from "react-redux";

import { auth } from "../../db/db";
import { playerLogout } from "../../redux/player/playerAction";
import { logoutAction } from "../../redux/user/userActions";
import CustomButton from "../custom-button/customButton";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    dispatch(logoutAction());
    dispatch(playerLogout());
  };

  return (
    <div>
      <CustomButton onClick={() => handleLogout()} className="LogoutButton">
        Logout
      </CustomButton>
    </div>
  );
};

export default Logout;
