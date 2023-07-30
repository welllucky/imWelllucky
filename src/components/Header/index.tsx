import MenuIcon from "../../assets/icons/embed/MenuIcon";
import { HeaderContainer } from "./style";
import { theme } from "../../theme";

const Header = () => {
  return (
    <HeaderContainer data-cy="header-container">
      <MenuIcon
        alt="ícone de menu"
        size="3.2rem"
        color={theme.color.neutral.white}
      />
    </HeaderContainer>
  );
};

export { Header };
