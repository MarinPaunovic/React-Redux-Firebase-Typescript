import styled from "styled-components";

export const UsernameStyle = styled.div`
   {
    position: absolute;
    left: 50%;
    margin-left: -245.5px;
    top: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: solid ${({ theme: { borderColor } }) => borderColor};
    padding: 15px;
    border-radius: 5px;
  }
  label {
    margin-bottom: 25px;
    color: ${({ theme: { fontColor } }) => fontColor};
    font-size: 50px;
  }
  input {
    padding: 4px 8px;
    outline: none;
    font-size: 40px;
    margin-bottom: 20px;
  }
  button {
    font-size: 20px;
    font-weight: 650;
    padding: 10px 20px 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${({
      theme: {
        chat: { backgroundColor },
      },
    }) => backgroundColor};
    color: white;
  }
`;
