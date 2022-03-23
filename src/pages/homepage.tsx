import ChatIcon from "../components/chat/chatIcon";
import PlayerIcon from "../components/playerIcon/playerIcon";

import { HomepageStyle } from "../components/styled-components/homepageStyle";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageStyle>
        <PlayerIcon />
        <ChatIcon />
      </HomepageStyle>
    </div>
  );
};

export default Homepage;
