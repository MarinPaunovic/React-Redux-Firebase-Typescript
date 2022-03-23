import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkill } from "../../redux/player/playerAction";
import { RootState } from "../../redux/rootReducer";
import { SkillTreeStyle } from "../styled-components/skillTreeStyle";

const SkillTree = () => {
  const { skill, skillPoints, id } = useSelector(
    (reducer: RootState) => reducer.player.player
  );
  const dispatch = useDispatch();
  const handleClick = (skillToChange: string, operation: string) => {
    dispatch(setSkill(skillToChange, operation, id));
  };
  return (
    <SkillTreeStyle>
      {skill && (
        <>
          {" "}
          <div className="SkillPoints">
            <label>Skill points:</label>
            <span>{skillPoints}</span>
          </div>
          <div className="SkillGrid">
            <div className="SkillPart">
              <label>Luck :</label>
              <div>{skill.luck}</div>
            </div>
            <div className="SkillButtons">
              <button
                onClick={() => handleClick("LUCK", "-")}
                disabled={skill.luck == 0}
              >
                -
              </button>
              <button
                onClick={() => handleClick("LUCK", "+")}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>

            <div className="SkillPart">
              <label>Intellect :</label>
              <div>{skill.intellect}</div>
            </div>
            <div className="SkillButtons">
              <button
                onClick={() => handleClick("INTELLECT", "-")}
                disabled={skill.intellect == 0}
              >
                -
              </button>
              <button
                onClick={() => handleClick("INTELLECT", "+")}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>
            <div className="SkillPart">
              <label>Strength :</label>
              <div>{skill.strength}</div>
            </div>
            <div className="SkillButtons">
              <button
                onClick={() => handleClick("STRENGTH", "-")}
                disabled={skill.strength == 0}
              >
                -
              </button>
              <button
                onClick={() => handleClick("STRENGTH", "+")}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>
            <div className="SkillPart">
              {" "}
              <label>Anti-luck :</label>
              <div>{skill.antiLuck}</div>
            </div>
            <div className="SkillButtons">
              <button
                onClick={() => handleClick("ANTI-LUCK", "-")}
                disabled={skill.antiLuck == 0}
              >
                -
              </button>
              <button
                onClick={() => handleClick("ANTI-LUCK", "+")}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>
            <div className="SkillPart">
              {" "}
              <label>Training :</label>
              <div>{skill.training}</div>
            </div>
            <div className="SkillButtons">
              <button
                onClick={() => handleClick("TRAINING", "-")}
                disabled={skill.training == 0}
              >
                -
              </button>
              <button
                onClick={() => handleClick("TRAINING", "+")}
                disabled={skillPoints <= 0}
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
    </SkillTreeStyle>
  );
};

export default SkillTree;
