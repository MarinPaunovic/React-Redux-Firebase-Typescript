import { useDispatch } from "react-redux";

import { auth } from "../../db/db";
import { logoutAction } from "../../redux/user/userActions";
import CustomButton from "../custom-button/customButton";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    dispatch(logoutAction());
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
