"use client";
import { theme } from "theme";
import { styled } from "styled-components/";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 3px solid yellow;
	height: ${theme.space["x15"]};
	padding: ${`0px ${theme.space["x8"]}`};
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	border: 3px solid red;
	height: 100%;
	width: ${theme.space["x15"]};
`;

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	border: 3px solid blue;
	height: 100%;
	width: 100%;
`;

export const NavBar = styled.ul`
	display: flex;
	align-items: center;
`;
