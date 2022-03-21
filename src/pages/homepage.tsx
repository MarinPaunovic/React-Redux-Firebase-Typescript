import Chat from "../components/chat/chat";
import ChatIcon from "../components/chat/chatIcon";
import Directory from "../components/directory/directoryComponent";
import { HomepageStyle } from "../components/styled-components/homepageStyle";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageStyle>
        <Directory />
        <ChatIcon />
      </HomepageStyle>
    </div>
  );
};

export default Homepage;
