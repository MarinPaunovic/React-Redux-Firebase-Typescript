import { useDispatch, useSelector } from "react-redux";
import { toggleChat } from "../../redux/chat/chatSlice";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
import { ChatIconStyle } from "../styled-components/chatIconStyle";
import Chat from "./chat";

const ChatIcon = () => {
  const dispatch = useDispatch();
  const { hidden } = useSelector((reducer: RootState) => reducer.chat);
  return (
    <ChatIconStyle>
      {!hidden ? (
        <CustomButton
          onClick={() => dispatch(toggleChat())}
          className="ChatIconToggle"
        >
          Chat
        </CustomButton>
      ) : (
        <div className="Chat">
          <Chat />
        </div>
      )}
    </ChatIconStyle>
  );
};

export default ChatIcon;
