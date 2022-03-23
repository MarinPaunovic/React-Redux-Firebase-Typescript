import styled from "styled-components";

export const NavbarStyle = styled.div`
   {
    position: sticky;
    top: 0px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid ${({ theme }) => theme.fontColor} 0.5px;
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: background-color var(--transition), color var(--transition),
      border-bottom var(--transition);
    min-height: 80px;
    font-size: var(--font-size);
    color: ${({ theme }) => theme.fontColor};
  }

  button {
    border: none;
    color: ${({ theme }) => theme.fontColor};
    transition: color var(--transition), background-color var(--transition);
    font-size: var(--font-size);
    background: none;
  }
  button:hover {
    cursor: pointer;
    color: lightblue;
    transition: 0s;
  }
  span {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
  }

  span:hover {
    cursor: pointer;
    color: lightblue;
  }

  a {
    color: ${({ theme }) => theme.fontColor};
    transition: color var(--transition);
  }
  .material-icons-outlined {
    margin-right: 10px;
  }
`;
