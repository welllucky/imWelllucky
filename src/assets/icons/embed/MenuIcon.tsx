import { IconProps } from "../../../typing";

const MenuIcon = ({ size, color, alt }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size ?? "24px"}
      height={size ?? "24px"}
      viewBox="0 0 24 24"
      aria-label={alt ?? "Ícone de menu"}
      color={color ?? "#000000"}
      fill={color ?? "#000000"}
    >
      <path
        aria-label={alt ?? "Ícone de menu"}
        d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
      />
    </svg>
  );
};

export default MenuIcon;
