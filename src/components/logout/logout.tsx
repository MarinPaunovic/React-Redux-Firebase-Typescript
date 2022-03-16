import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../db/db";
import { LogoutAction } from "../../redux/user/userActions";
import CustomButton from "../custom-button/customButton";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    dispatch(LogoutAction());
    navigate("/login");
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
