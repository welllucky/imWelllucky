"use client";
import { styled } from "styled-components";
import { theme } from "theme";

export const FlexContainer = styled.div<
{ isDark?: boolean } >`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-grow: 1;
`;
