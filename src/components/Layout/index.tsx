import { ReactNode } from "react";
import { Header } from "../Header";
import { FlexContainer, ContentContainer } from "./style";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <FlexContainer data-cy="flex-container-layout">
      <Header />
      <ContentContainer data-cy="content-container-layout">
        {children}
      </ContentContainer>
      {/* <Footer /> */}
    </FlexContainer>
  );
};

export { Layout };
