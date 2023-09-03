import { HeaderContainer, LogoContainer } from "./styles";
import Image from "next/image";
import type { NavItemsProps } from "typing";
import { NavBar } from "./components/NavBar";

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
					width={32}
					height={32}
				/>
			</LogoContainer>
				<NavBar options={navItems} />
		</HeaderContainer>
	);
};

export { Header };
