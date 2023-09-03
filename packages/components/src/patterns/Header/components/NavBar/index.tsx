import { CustomLink } from "../../../../Link";
import { NavBarContent, NavContainer } from "./styles";
import { NavItemsProps } from "typing";

type NavbarProps = {
	options: NavItemsProps[],
};

export const NavBar = ({ options }: NavbarProps) => {
	return (
		<NavContainer>
			<NavBarContent>
				{options.map((item) => (
					<CustomLink
						key={item.title}
						title={item.title}
						href={item.href}
						isHighlight={item.isHighlight}
					>
						{item.title}
					</CustomLink>
				))}
			</NavBarContent>
		</NavContainer>
	);
};
