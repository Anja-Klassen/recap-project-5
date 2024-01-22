import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  flex-direction: column;
`;

export const StyledUl = styled.ul`
  list-style: none;
`;
