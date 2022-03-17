import { useState } from "react";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { auth, signInWithGoogle } from "../../db/db";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userActions";
import { RegisterStyle } from "../styled-components/registerStyle";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <RegisterStyle>
      {" "}
      <form onSubmit={handleSubmit}>
        <label>Login</label>
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
            })
          }
        >
          Login with google
        </CustomButton>
      </form>
    </RegisterStyle>
  );
};

export default LoginComponent;
