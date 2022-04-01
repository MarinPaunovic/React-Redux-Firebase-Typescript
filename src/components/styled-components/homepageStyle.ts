import styled from "styled-components";

export const HomepageStyle = styled.div`
   {
    height: 90.86vh;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    transition: 0.5s;
  }
`;
