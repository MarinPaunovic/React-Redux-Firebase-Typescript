import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../db/db";
import { getMessagesAction, toggleChat } from "../../redux/chat/chatSlice";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/formInput";
import { ChatStyle } from "../styled-components/chatStyle";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((reducer: RootState) => reducer.chat.messages);
  const currUser = useSelector(
    (reducer: RootState) => reducer.user.currentUser
  );
  const [message, setMessage] = useState("");
  useEffect(() => {
    dispatch(getMessagesAction());
  }, []);

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addDoc(collection(db, "Messages"), {
      message: message,
      id: auth.currentUser.uid,
      username: currUser.username,
      createdAtLocal: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      createdAtServer: serverTimestamp(),
    });
    setMessage("");
  };
  const deleteMessage = (id: string) => {
    deleteDoc(doc(db, "Messages", id));
  };

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
                {auth.currentUser.uid === item.data().id && (
                  <CustomButton
                    onClick={() => deleteMessage(item.id)}
                    className="DeleteMessage"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      delete
                    </span>
                  </CustomButton>
                )}
                <div className="MessageUsername">{item.data().username}</div>
                <div className="MessageMessage">{item.data().message}</div>
                <div className="MessageCreatedAt" style={{ fontSize: "10px" }}>
                  {item.data().createdAtLocal}
                </div>
              </div>
            ))}
        </div>
        <form onKeyPress={handleKeyPress} onSubmit={handleSubmit}>
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
