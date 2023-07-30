import { Layout } from "im-anatomy";
import HomeBackground from "../../src/assets/images/bubble-orb-background.png";
import { BackgroundImage, ContentContainer } from "../../src/styles/Home/style";

const Home = () => {
  return (
    <Layout data-cy="layout-home">
      <BackgroundImage
        data-cy="background-image-home"
        src={HomeBackground.src}
      />
      <ContentContainer data-cy="content-container-home" />
    </Layout>
  );
};

export default Home;
