"use client";

import { Theme } from "@/typing";
import { GlobalStyle } from "@/utils";
import { ThemeProvider } from "styled-components";

export const AppProvider = ({
  isDark,
  theme,
  children,
}: {
  isDark?: boolean,
  theme: Theme,
  children: React.ReactNode,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDark={isDark ?? true} />
      {children}
    </ThemeProvider>
  );
};
