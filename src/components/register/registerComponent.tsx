import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../db/db";
import { setUserAction } from "../../redux/user/userSlice";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { RegisterStyle } from "../styled-components/registerStyle";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        dispatch(setUserAction({ email, username, id: user.uid }));
      });
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else alert("passwords must match!");
  };
  return (
    <RegisterStyle>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Register</label>
        <FormInput
          placeholder="Email.."
          type="email"
          value={email}
          className="RegisterEmailInput"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <FormInput
          placeholder="Username.."
          type="text"
          value={username}
          className="RegisterUsernameInput"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <FormInput
          placeholder="Password.."
          type="password"
          value={password}
          className="RegisterPasswordInput"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <FormInput
          placeholder="Confirm password.."
          type="password"
          value={confirmPassword}
          className="RegisterConfirmPasswordInput"
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />
        <label>
          Already have account? Login <a href="/login">here</a>
        </label>
        <CustomButton>Register</CustomButton>
      </form>
    </RegisterStyle>
  );
};

export default RegisterComponent;
