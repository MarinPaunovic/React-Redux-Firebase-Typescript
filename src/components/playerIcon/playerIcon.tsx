import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../db/db";
import { RootState } from "../../redux/rootReducer";
import { PlayerIconStlye } from "../styled-components/playerIconStyle";
import SkillTree from "./skillTree";

const PlayerIcon = () => {
  const [img, setImg] = useState("");
  const player = useSelector((reducer: RootState) => reducer.player.player);
  const { level, experience } = useSelector(
    (reducer: RootState) => reducer.player.player
  );

  const unsub = onAuthStateChanged(auth, (user: any) => {
    if (user) setImg(user.photoURL);
    else setImg("");
  });

  useEffect(() => {
    return () => {
      unsub();
      setImg("");
    };
  }, []);

  return (
    <PlayerIconStlye>
      <div className="UserContainer">
        <h1>{player.username}</h1>
        {auth.currentUser && (
          <div className="PlayerImage">
            <img src={img}></img>
          </div>
        )}{" "}
        <label>Level:{level}</label>
        <label>
          Experience:{experience}/{level * 10}
        </label>
        <SkillTree />
      </div>
    </PlayerIconStlye>
  );
};

export default PlayerIcon;
