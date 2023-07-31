import { theme } from "theme";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle =
  createGlobalStyle <
  { isDark?: boolean } >
  `
  body {
    color: ${({ isDark }) =>
      isDark ? theme.color.neutral.white : theme.color.neutral.black};
    background-color: ${({ isDark }) =>
      isDark ? theme.color.neutral.black : theme.color.neutral.white};
  }
`;