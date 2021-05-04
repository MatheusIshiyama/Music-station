import "@/src/styles/global.scss";

import { PlayerContextProvider } from "@/src/context";

export default function MyApp({ Component, pageProps }) {
    return (
        <PlayerContextProvider>
            <Component {...pageProps} />
        </PlayerContextProvider>
    );
}
