import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { setUsername as setUsern } from "../../redux/user/userActions";

const UsernameComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setUsern(username));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          placeholder="Username.."
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        ></FormInput>
        <CustomButton type="submit">Confirm</CustomButton>
      </form>
    </div>
  );
};

export default UsernameComponent;
