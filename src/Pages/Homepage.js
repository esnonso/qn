import React, { useState, useEffect } from "react";
import { useLoaderData, useRouteError } from "react-router-dom";
import ContainerBanner from "../Components/Containers/container-banner";
import Container from "../Components/Containers/container";
import Header from "../Components/Header";
import { H1Tags, PTags } from "../Components/Text";
import ContainerFlexColumn from "../Components/Containers/container-flex-column";
import PrintTrendingPosts from "../Components/Home/trendingPosts";
import PrintTrendingVideos from "../Components/Home/trendingVideos";
import PrintRecentPosts from "../Components/Home/recentPosts";
import PrintRecentVideos from "../Components/Home/recentVideos";
import Footer from "../Components/Footer";
// import { useScreenSize } from "../Components/Hooks/useScreenSize";

const Homepage = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay (you can replace this with your actual data loading logic)
    const fetchData = async () => {
      // Your data fetching logic here

      // Assuming data loading is completed after a delay of 2000 milliseconds
      setTimeout(() => {
        setLoading(false); // Set loading to false when data is loaded
      }, 2000);
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <ContainerBanner>
        <Header  color={"black"} />
        {loading && (
          <div className="loader-container">
            <span className="loader"></span>
            <p style={{ width: "fit-content", fontSize: "larger" }}>
              Loading page content...
            </p>
          </div>
        )}
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
              color= "rgb(209, 187, 113)"
              padding="0 1rem"
              margin="0 1rem 0 1rem"
            >
              Unlocking contemporary legal services
            </H1Tags>
            
          </div>
        </Container>
      </ContainerBanner>

      {!loading && (
        <>
          <PrintTrendingPosts title="Posts" posts={data.posts} />
          <PrintTrendingVideos videos={data.videos} />

          <ContainerFlexColumn margin="5rem 0rem" width="100%" padding="0 1rem">
            <PrintRecentPosts posts={data.posts} />
            <PrintRecentVideos videos={data.videos} />
          </ContainerFlexColumn>
          <Footer />
        </>
      )}
    </>
  );
};

export default Homepage;
