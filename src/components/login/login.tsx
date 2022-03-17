import { useState } from "react";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { auth, signInWithGoogle } from "../../db/db";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../redux/user/userActions";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email.."
          required
          value={email}
          handleChange={setEmail}
        />
        <FormInput
          placeholder="Password.."
          type={"password"}
          required
          value={password}
          handleChange={setPassword}
        />
        <label>
          Dont have account yet? Register <a href="/register">here</a>
        </label>
        <CustomButton type="submit">Login</CustomButton>
        <CustomButton
          type="button"
          onClick={() =>
            signInWithGoogle().then(({ user }) => {
              dispatch(
                setUser({ email: user.email, id: user.uid, username: "" })
              );
              navigate("/");
            })
          }
        >
          Login with google
        </CustomButton>
      </form>
    </div>
  );
};

export default LoginComponent;
