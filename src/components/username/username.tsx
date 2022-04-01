import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { setUsernameAction as setUsern } from "../../redux/user/userSlice";
import { UsernameStyle } from "../styled-components/usernameStyle";

const UsernameComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setUsern(username));
  };
  return (
    <UsernameStyle>
      <label>Set your username first</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          placeholder="Username.."
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        ></FormInput>
        <CustomButton type="submit">Confirm</CustomButton>
      </form>
    </UsernameStyle>
  );
};

export default UsernameComponent;
