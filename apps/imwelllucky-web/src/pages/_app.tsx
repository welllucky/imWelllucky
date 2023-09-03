import type { AppProps } from "next/app";
import { GlobalStyles } from "../utils";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles isDark={true} />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
