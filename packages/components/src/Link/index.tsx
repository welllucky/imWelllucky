import Link from "next/link";
import { css, styled } from "styled-components";
import { theme } from "theme";

export type LinkProps = {
	color?: string,
	title: string,
	href: string,
	hoverColor?: string,
	isHighlight?: boolean,
	highlightColor?: string,
	size?: string,
};

export const CustomLink =
	styled(Link) <
	LinkProps >
	`
        color: ${({ color }) => color ?? theme.color.neutral["white"]};
        font-size: ${({ size }) => size ?? theme.typography.fontSize.sm["x1"]};
        font-weight: ${theme.typography.fontWeight["300"]};
        text-decoration: none;
        transition: color 0.2s ease-in-out;

		${({ isHighlight, highlightColor }) => {
			if (isHighlight) {
				return `
					font-size: ${theme.typography.fontSize.sm["x3"]};
					color: ${highlightColor ?? theme.color.primary["1"]};
					padding: 0 0 0 .2rem;
					font-weight: 600;
				`;
			}
		}}
`;
