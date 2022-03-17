import styled from "styled-components";

export const ChatStyle = styled.div`
   {
    position: absolute;
    bottom: 20px;
    left: 15px;
    background: ${({
      theme: {
        chat: { backgroundColor },
      },
    }) => backgroundColor};
    padding: 20px 10px;
    border: solid;
    border-width: 0.5px;
    border-radius: 15px;
  }
  .CloseChatButton {
    position: absolute;
    left: 243px;
    top: 3px;
    border-radius: 15px;
    border: solid;
    border-width: 0.5px;
    padding: 2px;
  }
  .CloseChatButton:hover {
    cursor: pointer;
    background: lightgray;
  }
  .Messages {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .IsHisMessage {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: solid;
    max-width: 100px;
    color: skyblue;
    align-self: end;
    margin-bottom: 5px;
    border-width: 0.1px;
    text-align: right;
    align-items: flex-end;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .IsNotHisMessage {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: solid;
    max-width: 100px;
    border-color: #111111;
    color: skyblue;
    align-self: start;
    margin-bottom: 5px;
    border-width: 0.1px;
    text-align: right;
    align-items: flex-start;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .MessageUsername {
    color: ${({
      theme: {
        chat: { color },
      },
    }) => color};
    padding: 0px 5px 0px 5px;
    border-bottom: solid;
    width: fit-content;
  }
  .MessageMessage {
  }
  .MessageInput {
    padding: 5px;
    border-radius: 5px 0px 0px 5px;
    border-width: 0.5px;
    border-right: none;
    border-color: black;
    outline: none;
  }
  .ChatInput {
    display: flex;
    flex-direction: row;
  }
  .SendMessageButton {
    border-left: none;
    border-width: 0.5px;
    border-color: black;
    padding-right: 5px;
    border-radius: 0px 5px 5px 0px;
    background-color: white;
  }
  .SendMessageButton:hover {
    cursor: pointer;
  }
`;
