import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

if (typeof navigator.serviceWorker !== "undefined") {
  navigator.serviceWorker.register("../public/sw.js");
}

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
