import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../db/db";
import { setCooldownAction } from "../../redux/battle/battleSlice";
import { pveBattleAction } from "../../redux/player/playerSlice";
import { RootState } from "../../redux/rootReducer";

const PvE = () => {
  const { level } = useSelector((reducer: RootState) => reducer.player.player);
  const { id } = useSelector((reducer: RootState) => reducer.user.currentUser);
  const { cooldown } = useSelector((reducer: RootState) => reducer.battle);
  const dispatch = useDispatch();
  const handleClick = (battleType: string) => {
    addDoc(collection(db, "Battles"), {
      battleAt: serverTimestamp(),
      battleType,
      userID: id,
    });
    dispatch(pveBattleAction(battleType));
    dispatch(setCooldownAction(id));
  };
  return (
    <div>
      <button onClick={() => handleClick("1")} disabled={cooldown}>
        Battle 1
      </button>
      <button disabled={level < 2} onClick={() => handleClick("2")}>
        Battle 2
      </button>
      <button disabled={level < 4} onClick={() => handleClick("3")}>
        Battle 3
      </button>
    </div>
  );
};

export default PvE;
