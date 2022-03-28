import { useDispatch, useSelector } from "react-redux";
import { pveBattleAction } from "../../redux/player/playerSlice";
import { RootState } from "../../redux/rootReducer";

const PvE = () => {
  const { level } = useSelector((reducer: RootState) => reducer.player.player);
  const dispatch = useDispatch();
  const handleClick = (battleType: string) => {
    dispatch(pveBattleAction(battleType));
  };
  return (
    <div>
      <button onClick={() => handleClick("1")}>Battle 1</button>
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
