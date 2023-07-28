import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import dotenv from "dotenv";

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
import { GlobalStyle } from "../src/styles/global";
