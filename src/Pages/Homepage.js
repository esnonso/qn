import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { useScreenSize } from "../Components/Hooks/useScreenSize";

const Homepage = () => {
  const data = useLoaderData();
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(0);
  const [screenSize, setScreenSize] = useScreenSize();

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 700px)");
    const tab = window.matchMedia(
      "(min-width: 701px) and ((max-width: 1016px)"
    );
    const desktop = window.matchMedia("(min-width: 1016px)");
    if (phone.matches && data.length >= 3) {
      const joinedArr = [];
      for (var i = 0; i < 3; i++) {
        joinedArr.push([data[i]]);
      }
      setPosts(joinedArr);
      setVideos(joinedArr);
    }
    if (tab.matches && data.length >= 6) {
      const joinedArr = [];
      for (i = 0; i < 6; i++) {
        const lastItem = joinedArr[joinedArr.length - 1];
        if (!lastItem || lastItem.length === 2) {
          joinedArr.push([data[i]]);
        } else {
          lastItem.push(data[i]);
        }
      }
      setPosts(joinedArr);
      setVideos(joinedArr);
    }
    if (desktop.matches && data.length >= 9) {
      const joinedArr = [];
      for (i = 0; i < 9; i++) {
        const lastItem = joinedArr[joinedArr.length - 1];
        if (!lastItem || lastItem.length === 3) {
          joinedArr.push([data[i]]);
        } else {
          lastItem.push(data[i]);
        }
      }
      setPosts(joinedArr);
      setVideos(joinedArr);
    }
  }, [screenSize]);
  const increaseCountHandler = () => {
    if (count < 2) {
      setCount((prevState) => prevState + 1);
    }
  };

  const decreaseCountHandler = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <ContainerBanner color="rgb(25, 25, 25)">
        <Header textColor="#C6AA64" />
        <Container
          height="70vh"
          textColor="white"
          justify="center"
          marginTop="5rem"
          flex="column"
        >
          <div className="banners-div">
            <H1Tags
              fontWeight="800"
              color="#C6AA64"
              padding="0 1rem"
              margin="0 1rem 0 1rem"
            >
              Connecting Communities, Clients, and People.
            </H1Tags>
            <PTags
              color="white"
              padding="0 1rem"
              margin="0 1rem 0 1rem"
              fontSize="14"
            >
              Abuja Washinton D.c London Annfield United Kingdom
            </PTags>
          </div>
        </Container>
      </ContainerBanner>

      <PrintTrendingPosts
        title="Posts"
        posts={posts}
        count={count}
        increaseCountHandler={increaseCountHandler}
        decreaseCountHandler={decreaseCountHandler}
      />

      <PrintTrendingVideos
        videos={videos}
        count={count}
        increaseCountHandler={increaseCountHandler}
        decreaseCountHandler={decreaseCountHandler}
      />

      <ContainerFlexColumn margin="5rem 0rem" width="100%" padding="0 1rem">
        <PrintRecentPosts posts={data} />

        <PrintRecentVideos videos={data} />
      </ContainerFlexColumn>
      <Footer />
    </>
  );
};

export default Homepage;
