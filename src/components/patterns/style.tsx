import { StaticImageData } from "next/image";
import styled from "styled-components";

const FlexContainer = styled.div`
  top: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
export { FlexContainer, ContentContainer };
