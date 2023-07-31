"use client";

import { ThemeProvider } from "@/utils";
import { theme } from "theme";

export default function RootPage({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider
				theme={theme}
				isDark={true}
			>
        
				{children}
			</ThemeProvider>
		</>
	);
}
