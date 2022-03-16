import styled from "styled-components";

export const ChatIconStyle = styled.div`
   {
    z-index: 1;
  }
  .ChatIconToggle {
    position: absolute;
    bottom: 15px;
    left: 10px;
    font-size: 25px;
    padding: 20px 10px;
    border: solid;
    border-width: 0.5px;
    border-radius: 50px;
  }
  .ChatIconToggle:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
