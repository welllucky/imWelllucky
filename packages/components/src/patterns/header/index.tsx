"use client"

import { HeaderContainer, LogoContainer, NavBar, NavContainer } from "./styles";
import Image from "next/image";
import type { NavItemsProps } from "@/types";
import { theme } from "theme";
import { CustomLink } from "../../Link";

interface HeaderProps {
	logo: string;
	navItems: NavItemsProps[];
}

const Header = ({ logo, navItems }: HeaderProps) => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Image
					color="white"
					src={logo}
					alt="logo"
					width={64}
					height={64}
				/>
			</LogoContainer>
			<NavContainer>
				<NavBar>
					{navItems.map((item) => (
						<CustomLink
							key={item.title}
							href={item.url}
						>
							{item.title}
						</CustomLink>
					))}
				</NavBar>
			</NavContainer>
		</HeaderContainer>
	);
};

export { Header };
