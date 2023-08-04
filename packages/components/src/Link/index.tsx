import Link from "next/link";
import { styled } from "styled-components";
import { theme } from "theme";

type LinkProps = {
	color?: string,
	title: string,
	url: string,
	hoverColor?: string,
	isHighlight?: boolean,
	isHovered?: boolean,
    size?: string,
    weight?: string
};

export const CustomLink =
	styled(Link) <
	{
		color?: string,
		hoverColor?: string,
		isHighlight?: string,
        isHovered?: boolean,
        size?: string,
        weight?: string
	} >
	`
        color: ${({ color }) => color ?? theme.color.neutral["white"]};
        font-size: ${({ size }) => size ?? theme.typography.fontSize.sm["x9"]};
        font-weight: ${({ weight }) => weight ?? theme.typography.fontWeight["300"]};
        text-decoration: none;
        transition: color 0.2s ease-in-out;

`;
