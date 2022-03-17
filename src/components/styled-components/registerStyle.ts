import styled from "styled-components";

export const RegisterStyle = styled.div`
   {
    position: absolute;
    top: 22%;
    left: 50%;
    margin-left: -207px;
    padding: 40px 50px;
    border: solid;
    border-width: 0.5px;
    border-radius: 5px;
    border-color: ${({ theme: { borderColor } }) => borderColor};
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin-top: 10px;
    margin-bottom: 5px;
    width: 300px;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
    border-width: 0.5px;
    font-size: 18px;
  }
  button {
    margin-top: 5px;
    padding: 2px 5px 2px 5px;
    border-radius: 5px;
    border-width: 0.5px;
    width: fit-content;
  }
  button:hover {
    cursor: pointer;
    background-color: lightgray;
  }
  label {
    margin-bottom: 15px;
    color: ${({ theme: { fontColor } }) => fontColor};
  }
  label:nth-child(1) {
    font-size: 35px;
  }

  a {
    color: skyblue;
  }

  a:hover {
    color: #0000ff;
    transition: 0.15s;
  }
`;
