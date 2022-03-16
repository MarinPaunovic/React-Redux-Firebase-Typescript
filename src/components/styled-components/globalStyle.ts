import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    text-decoration:none;
}
body{
     background-color: ${({ theme }: any) => theme.backgroundColor}; 
}

a{
    color:${({ theme: { fontColor } }) => fontColor};
}

`;