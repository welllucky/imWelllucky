import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FlexContainer, ContentContainer } from "./style";
import { StaticImageData } from "next/image";

const Layout = ({
  children,
  img,
}: {
  children: ReactNode,
  img?: StaticImageData,
}) => {
  return (
    <FlexContainer
      data-cy="flex-container-layout"
    >
      <Header />
      <ContentContainer data-cy="content-container-layout">{children}</ContentContainer>
      {/* <Footer /> */}
    </FlexContainer>
  );
};

export default Layout;
