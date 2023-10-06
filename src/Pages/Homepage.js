import ContainerBanner from "../Components/Containers/container-banner";
import Container from "../Components/Containers/container";
import Header from "../Components/Header";
import { H1Tags, PTags } from "../Components/Text";
import ContainerFlexColumn from "../Components/Containers/container-flex-column";
import PrintTrending from "../Components/Home/trending";
import PrintTrendingVideos from "../Components/Home/trendingVideos";
import PrintRecentPosts from "../Components/Home/recentPosts";
import PrintRecentVideos from "../Components/Home/recentVideos";
import { DEFAULT } from "../App";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <>
      <ContainerBanner color="rgb(25, 25, 25)">
        <Header list={["Home", "About"]} textColor="#C6AA64" />

        <Container
          height="70vh"
          textColor="white"
          justify="center"
          marginTop="5rem"
          flex="column"
        >
          <div className="banners-div">
          <H1Tags fontWeight="800" color="#C6AA64" padding="0 1rem" margin="0 1rem 0 1rem">
  Connecting Communities, Clients, and People.
</H1Tags>
<PTags color="white" padding="0 1rem" margin="0 1rem 0 1rem" fontSize= "14"> 
  Abuja Washinton D.c London Annfield United Kingdom
</PTags>




          </div>
        </Container>
      </ContainerBanner>

      <PrintTrending arr={DEFAULT} title="Posts" />

      <PrintTrendingVideos arr={DEFAULT} />

      <ContainerFlexColumn margin="5rem 0rem" width="100%" padding="0 1rem">
        <PrintRecentPosts arr={DEFAULT} />

        <PrintRecentVideos arr={DEFAULT} />
      </ContainerFlexColumn>
      <Footer />
    </>
  );
};

export default Homepage;
