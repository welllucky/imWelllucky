import theme from "@/styles";
import { StaticImageData } from "next/image";
import styled from "styled-components";

type ImageProps = {
  img?: StaticImageData,
  width?: string,
  height?: string,
  alt?: string,
};

const GradientWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -99;
  filter: grayscale() blur(2.4px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.95;
  background-attachment: scroll;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

const TextContainer = styled.div`
  position: absolute;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  top: 16%;
  left: 0%;
  padding: 0 5rem 0 5rem;
  gap: 1.6rem;
  & > h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 5.2rem;
    color: ${theme.color.neutral.white};
  }

  & > h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: ${theme.color.neutral.white};
  }

  & > h1 > strong {
    font-weight: 800;
    color: ${theme.color.primary["1"]};
  }
`;

const TextureDecorator =
  styled.div <
  ImageProps >
  `
  position: absolute;
  width: 100vw;
  height: 10vh;
  top: 90%;
  left: 0;
  background-image: url(${({ img }) => img?.src});
`;

const BottomContent =
  styled.div <
  ImageProps >
  `
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px red solid;
  z-index: 50;
  background-image: url(${({ img }) => img?.src});
`;

const LabelIconText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export {
  GradientWrapper,
  BackgroundImage,
  ContentContainer,
  TextureDecorator,
  TextContainer,
  BottomContent,
  LabelIconText,
};
