"use client";

import { Theme } from "@/typing";
import { GlobalStyle } from "@/utils";
import { createContext } from "react";
import * as Style from "styled-components";

const ThemeProvider = ({
	isDark,
	theme,
	children,
}: {
	isDark?: boolean,
	theme: Theme,
	children: React.ReactNode,
}) => {
	return (
		<Style.ThemeProvider theme={theme}>
			<GlobalStyle isDark={isDark ?? true} />
			{children}
		</Style.ThemeProvider>
	);
};

export { ThemeProvider };
