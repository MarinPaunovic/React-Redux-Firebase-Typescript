import styled from "styled-components";

export const HomepageStyle = styled.div`
   {
    height: 100vh;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    transition: 0.5s;
  }
`;
