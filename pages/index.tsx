import Layout from "@/components/patterns/layout";
import Image from "@/components/patterns/ImageComponent";
import HomeBackground from "../src/assets/imgs/HomeBackground.png";
import WellingtonBraga from "../src/assets/imgs/WellingtonBraga.png";
import Octogonals from "../src/assets/imgs/Octogonals.png";
import ExpandArrow from "../src/assets/icons/img/ExpandArrow.png";
import {
  BackgroundImage,
  BottomContent,
  ContentContainer,
  GradientWrapper,
  TextContainer,
  TextureDecorator,
  LabelIconText,
} from "../pages/Home/style";

const Home = () => {
  return (
    <Layout data-cy="layout-home">
      <BackgroundImage
        data-cy="background-image-home"
        src={HomeBackground.src}
      />
      <ContentContainer data-cy="content-container-home">
        <Image
          img={WellingtonBraga}
          width="100vw"
          height="100vh"
          alt="Foto de Wellington Braga"
        />
        <GradientWrapper />
        <TextContainer>
          <h1>
            Olá, eu sou o <strong>WellluckY!</strong>
          </h1>
          <h2>
            UX, UI, Design Gráfico <br />e Full Stack developer
            <br /> em desenvolvimento
          </h2>
        </TextContainer>
      </ContentContainer>
      <BottomContent img={Octogonals}>
        <LabelIconText>Role para baixo</LabelIconText>
        <Image
          img={ExpandArrow}
          width="10vw"
          height="2vh"
          alt="Seta para baixo"
          position="relative"
        />
        {/* <TextureDecorator img={Octogonals} /> */}
      </BottomContent>
    </Layout>
  );
};

export default Home;
