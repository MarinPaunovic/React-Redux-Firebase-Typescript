import Chat from "../components/chat/chat";
import ChatIcon from "../components/chat/chatIcon";
import Directory from "../components/directory/directoryComponent";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
      <ChatIcon />
    </div>
  );
};

export default Homepage;
