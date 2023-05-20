import { StaticImageData } from "next/image";
import styled from "styled-components";

type ImageProps = {
  img?: StaticImageData,
  width?: string,
  height?: string,
  alt?: string,
};

const Image =
  styled.image <
  ImageProps >
  `
    position: absolute;
    background-image: url(${({ img }) => img?.src});
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    alt: ${({ alt }) => alt};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export default Image;
