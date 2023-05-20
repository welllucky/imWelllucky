import theme from "@/styles";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: ${theme.space[80]};
  background-color: ${theme.color.neutral.black};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: inherit;
  color: white;
`;

export { FooterContainer, FooterContent };
