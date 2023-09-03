import styled from "styled-components";
import { IconProps } from "typing";

const IconWrapper =
  styled.div <
  IconProps >
  `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ?? "2.4rem"};
  height: ${({ size }) => size ?? "2.4rem"};
  & > svg {
    color: ${({ color }) => color ?? "#0b0b0a"};
    height: ${({ size }) => size ?? "2.4rem"};
    width: ${({ size }) => size ?? "2.4rem"};
    alt: ${({ alt }) => alt ?? "Icon"};
    }
`;

export default IconWrapper;
