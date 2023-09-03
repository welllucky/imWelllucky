import { IconProps } from "typing";
import Menu from "./svgs/icons8-menu.svg";

const MenuIcon = ({ size, alt, color }: IconProps) => {
  return (
    <Menu
      width={size}
      height={size}
      alt={alt}
      color={color}
    />
  );
};

export { MenuIcon };
