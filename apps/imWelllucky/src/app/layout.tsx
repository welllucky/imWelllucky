import type { Metadata } from "next";
import { theme } from "theme";
import { Inter } from "next/font/google";
import { Header } from "components";
import { FlexContainer } from "./style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: { default: "I'm WellluckY", template: "%s | I'm WellluckY" },
	description: "Generated by create next app",
	category: "Personal Website",
	authors: [{ name: "Wellington Braga" }],
	manifest: "/manifest.json",
	robots: "/robots.txt",
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: theme.color.neutral.black },
		{
			media: "(prefers-color-scheme: light)",
			color: theme.color.neutral.white,
		},
	],
	applicationName: "I'm Welllucky",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html
			lang="pt-br"
			className={inter.className}
		>
			<body>
				<Header />
				<FlexContainer>{children}</FlexContainer>
			</body>
		</html>
	);
}
