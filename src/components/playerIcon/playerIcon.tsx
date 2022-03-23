import { useSelector } from "react-redux";
import { auth } from "../../db/db";
import { RootState } from "../../redux/rootReducer";
import { PlayerIconStlye } from "../styled-components/playerIconStyle";
import SkillTree from "./skillTree";

const PlayerIcon = () => {
  const player = useSelector((reducer: RootState) => reducer.player.player);
  const level = useSelector(
    (reducer: RootState) => reducer.player.player.level
  );
  return (
    <PlayerIconStlye>
      <div className="UserContainer">
        <h1>{player.username}</h1>
        {auth.currentUser && (
          <div className="PlayerImage">
            <img src={auth.currentUser.photoURL}></img>
          </div>
        )}{" "}
        <label>Level:{level}</label>
        <SkillTree />
      </div>
    </PlayerIconStlye>
  );
};

export default PlayerIcon;
