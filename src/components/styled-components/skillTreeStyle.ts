import styled from "styled-components";

export const SkillTreeStyle = styled.div`
  .SkillGrid {
    font-size: 25px;
    margin-top: 65%;
    position: relative;
    left: -25px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-row-gap: 10px;
  }
  .SkillPart {
    display: flex;
    flex-direction: row;
    gap: 5px;
    border-bottom: solid pink;
    border-width: 0.5px;
  }
  .SkillButtons {
    display: flex;
    gap: 10px;
    width: 180px;
    border-bottom: solid pink;
    border-width: 0.5px;
    justify-content: flex-end;
  }
  button {
    padding: 0px 10px;
    font-size: 20px;
  }
  .SkillPoints {
    position: absolute;
    left: 25px;
    bottom: 250px;
    font-size: 25px;
  }
`;
