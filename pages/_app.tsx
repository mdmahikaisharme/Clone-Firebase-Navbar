import type { AppProps } from "next/app";
import { AppContextProvider } from "@context/App";
import "@style/main.css";
import "@style/app.css";

export default function _app({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <Component {...pageProps} />
        </AppContextProvider>
    );
}
