import styled from "styled-components";

export const NavbarStyle = styled.div`
  * {
    height: fit-content;
    align-self: center;
    color: ${({ theme }) => theme.fontColor};
    font-size: 35px;
  }

   {
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    transition: all 0.5s ease;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  button:hover {
    cursor: pointer;
    color: lightblue;
  }
  a:hover {
    cursor: pointer;
    color: lightblue;
  }
  .CartQuantity {
    font-size: 23px;
    position: relative;
    top: -45px;
    left: 25px;
  }
`;
