import { Theme } from "../../typing";
import { GlobalStyles } from "../../utils";
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
			<GlobalStyles isDark={isDark ?? true} />
			{children}
		</Style.ThemeProvider>
	);
};

export default ThemeProvider;
