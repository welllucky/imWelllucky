"use client";

import { AppProvider } from "@/utils";
import { HomeContainer } from "./style";
import { theme } from "theme";

export default function Home() {
  return (
    <>
      <AppProvider theme={theme}>
        <HomeContainer>
          <h1>Hello WellluckY</h1>
          <h2>Hello World!</h2>
        </HomeContainer>
      </AppProvider>
    </>
  );
}
