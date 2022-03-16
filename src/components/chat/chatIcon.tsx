import { useDispatch, useSelector } from "react-redux";
import { toggleChat } from "../../redux/chat/chatActions";
import { RootState } from "../../redux/rootReducer";
import CustomButton from "../custom-button/customButton";
import Chat from "./chat";

const ChatIcon = () => {
  const dispatch = useDispatch();
  const { hidden } = useSelector((reducer: RootState) => reducer.chat);
  return (
    <div>
      {!hidden ? (
        <CustomButton
          onClick={() => dispatch(toggleChat())}
          style={{ position: "absolute", bottom: "15px", left: "5px" }}
        >
          Chat
        </CustomButton>
      ) : (
        <div className="Chat">
          <Chat />
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
