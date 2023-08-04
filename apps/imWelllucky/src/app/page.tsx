"use client";

import { ThemeProvider } from "@/utils";
import { theme } from "theme";
import Home from "./home/page";

export default function RootPage() {
	return (
		<>
			<ThemeProvider
				theme={theme}
				isDark={true}
			>
				<Home />
			</ThemeProvider>
		</>
	);
}
