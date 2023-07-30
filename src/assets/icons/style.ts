import styled from "styled-components";
import { IconProps } from "@/typing";

const IconWrapper =
  styled.div <
  IconProps >
  `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width ?? "2.4rem"};
  height: ${({ height }) => height ?? "2.4rem"};
  & > svg {
    color: ${({ color }) => color ?? "#0b0b0a"};
    height: ${({ height }) => height ?? "2.4rem"};
    width: ${({ width }) => width ?? "2.4rem"};
    alt: ${({ alt }) => alt ?? "Icon"};
    }
`;

export default IconWrapper;
