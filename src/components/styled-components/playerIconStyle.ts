import styled from "styled-components";

export const PlayerIconStlye = styled.div`
   {
    background-image: url("playerIconBG2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -203px;
    color: red;
    border: solid ${({ theme }) => theme.borderColor};
    padding: 25px 50px;
    display: flex;
    justify-content: center;
  }

  .UserContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    border-bottom: solid;
    width: fit-content;
  }
  .PlayerImage {
    margin-top: 15px;
  }
`;
