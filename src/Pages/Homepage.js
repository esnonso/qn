import React from "react";
import { useLoaderData } from "react-router-dom";
import ContainerBanner from "../Components/Containers/container-banner";
import Container from "../Components/Containers/container";
import Header from "../Components/Header";
import { H1Tags } from "../Components/Text";
import ContainerFlexColumn from "../Components/Containers/container-flex-column";
import PrintTrendingPosts from "../Components/Home/trendingPosts";
import PrintTrendingVideos from "../Components/Home/trendingVideos";
import PrintRecentPosts from "../Components/Home/recentPosts";
import PrintRecentVideos from "../Components/Home/recentVideos";
import Footer from "../Components/Footer";
import Loader from "./Loader";

const Homepage = () => {
  const data = useLoaderData();

   // Show loader while specific data is being fetched
   if (!data.posts || !data.videos) {
    return <Loader />;
  }

  return (
    <>
      <ContainerBanner>
      <Header color={"black"} />
        <Container
          height="70vh"
          textColor="white"
          justify="center"
          marginTop="5rem"
          flex="column"
        >
          <div className="banners-div">
            <H1Tags
              fontWeight="Bold"
              color="rgb(209, 187, 113)"
              padding="0 1rem"
              margin="0 1rem 0 1rem"
            >
              Unlocking contemporary legal services
            </H1Tags>
          </div>
        </Container>
      </ContainerBanner>

      {/* Render content without loading check */}
      <PrintTrendingPosts title="Posts" posts={data.posts} />
      <PrintTrendingVideos videos={data.videos} />

      <ContainerFlexColumn margin="5rem 0rem" width="100%" padding="0 1rem">
        <PrintRecentPosts posts={data.posts} />
        <PrintRecentVideos videos={data.videos} />
      </ContainerFlexColumn>

      <Footer />
    </>
  );
};

export default Homepage;
