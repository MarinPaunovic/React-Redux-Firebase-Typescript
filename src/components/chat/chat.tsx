import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessages,
  sendMessage,
  toggleChat,
} from "../../redux/chat/chatActions";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { ChatStyle } from "../styled-components/chatStyle";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((reducer: RootState) => reducer.chat.message);
  const currUser = useSelector(
    (reducer: RootState) => reducer.user.currentUser
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <>
      <ChatStyle>
        <CustomButton
          className="CloseChatButton"
          onClick={() => dispatch(toggleChat())}
        >
          X
        </CustomButton>
        <div className="Messages">
          {messages &&
            messages.map((item: any) => (
              <div
                className={
                  currUser.id === item.data().id
                    ? "IsHisMessage"
                    : "IsNotHisMessage"
                }
                key={item.id}
              >
                <div className="MessageUsername">{item.data().username}</div>
                <div className="MessageMessage">{item.data().message}</div>
                <div className="MessageCreatedAt" style={{ fontSize: "10px" }}>
                  {item.data().createdAtLocal}
                </div>
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
              className="MessageInput"
              placeholder="send message.."
              onChange={(e: any) => setMessage(e.target.value)}
            ></FormInput>
            <CustomButton type="submit" className="SendMessageButton">
              Send
            </CustomButton>
          </div>
        </form>
      </ChatStyle>
    </>
  );
};

export default Chat;
