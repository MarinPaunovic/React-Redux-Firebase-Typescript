import styled from "styled-components";

export const HomepageStyle = styled.div`
   {
    height: 91.6vh;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    transition: 0.5s;
  }
`;
