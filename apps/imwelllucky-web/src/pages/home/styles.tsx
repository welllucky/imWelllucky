"use client"
import { styled } from "styled-components";

export const HomeContainer = styled.main<{backgroundColor?: string}>`
background-color: ${({backgroundColor}) => backgroundColor ?? "transparent"};
border: 2px solid red;
`;