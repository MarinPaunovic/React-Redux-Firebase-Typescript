import { useState } from "react";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { auth, signInWithGoogle } from "../../db/db";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } else alert("passwords dont match!");
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
        <FormInput
          placeholder="Confirm password.."
          type={"password"}
          required
          value={confirmPassword}
          handleChange={setConfirmPassword}
        />
        <CustomButton type="submit">Login</CustomButton>
        <CustomButton
          type="button"
          onClick={() =>
            signInWithGoogle().then(() => {
              localStorage.setItem("userAuth", "true");
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
