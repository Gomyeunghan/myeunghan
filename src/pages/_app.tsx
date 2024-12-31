import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayOut from "./globalLayout/globalLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayOut>
      <Component {...pageProps} />
    </GlobalLayOut>
  );
}
