import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../db/db";
import {
  getMessages,
  sendMessage,
  toggleChat,
} from "../../redux/chat/chatActions";
import { RootState } from "../../redux/rootReducer";
import { getUser } from "../../redux/user/userActions";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((reducer: RootState) => reducer.chat.message);
  const currUser = useSelector(
    (reducer: RootState) => reducer.user.currentUser
  );
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (currUser) {
      dispatch(getUser(currUser.id));
    }
  }, [auth.currentUser]);

  useEffect(() => {
    dispatch(getMessages());
  }, [messages.data]);

  return (
    <>
      <div>
        <CustomButton
          style={{ position: "absolute", marginLeft: "150px", zIndex: "1" }}
          onClick={() => dispatch(toggleChat())}
        >
          X
        </CustomButton>

        {messages &&
          messages.map((item: any) => (
            <div
              className={
                currUser.id === item.data().id
                  ? "isHisMessage"
                  : "isNotHisMessage"
              }
              key={item.id}
            >
              {" "}
              {item.data().username}
              <br />
              {item.data().message}
            </div>
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendMessage(message, currUser.username, currUser.id));
          setMessage("");
        }}
      >
        <div className="ChatInput">
          <FormInput
            value={message}
            type="text"
            placeholder="send message.."
            onChange={(e: any) => setMessage(e.target.value)}
          ></FormInput>
          <CustomButton type="submit">Send</CustomButton>
        </div>
      </form>
    </>
  );
};

export default Chat;
