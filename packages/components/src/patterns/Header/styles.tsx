import { theme } from "theme";
import { styled } from "styled-components/";

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border: 3px solid yellow;
	height: ${theme.space["x15"]};
	padding: ${`0px ${theme.space["x8"]}`};
	flex-grow: 1;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: auto;
`;
