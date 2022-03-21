import { PlayerStatisticStyle } from "../styled-components/playerStatisticStyle";

const PlayerStatisticComponent = () => {
  return (
    <PlayerStatisticStyle>
      <div className="OnePartStatistic">
        <label>forte</label>
      </div>
      <div className="OnePartStatistic">
        <span>power rank:10/159</span>
      </div>
      <div className="OnePartStatistic">
        <span>rank:10/159</span>
      </div>
    </PlayerStatisticStyle>
  );
};

export default PlayerStatisticComponent;
