import { useEffect, useState } from "react";
import Button from "../Button";
import Container from "../Containers/container";
import Cards from "../Cards";
import { useScreenSize } from "../Hooks/useScreenSize";
import { H1Tags, PTags, ImageTags } from "../Text";

const PrintTrendingVideos = ({ videos }) => {
  const [count, setCount] = useState(0);
  const [screenSize, setScreenSize] = useScreenSize();
  const [chunkedVideos, setChunkedVideos] = useState([]);

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 700px)");
    const tab = window.matchMedia(
      "(min-width: 701px) and ((max-width: 1016px)"
    );
    const desktop = window.matchMedia("(min-width: 1016px)");
    if (videos.length >= 3) {
      if (phone.matches && videos.length >= 3) {
        const joinedArr = [];
        for (var i = 0; i < 3; i++) {
          joinedArr.push([videos[i]]);
        }
        setChunkedVideos(joinedArr);
      }
      if (tab.matches && videos.length >= 6) {
        const joinedArr = [];
        for (i = 0; i < 6; i++) {
          const lastItem = joinedArr[joinedArr.length - 1];
          if (!lastItem || lastItem.length === 2) {
            joinedArr.push([videos[i]]);
          } else {
            lastItem.push(videos[i]);
          }
        }
        setChunkedVideos(joinedArr);
      }
      if (desktop.matches && videos.length >= 9) {
        const joinedArr = [];
        for (i = 0; i < 9; i++) {
          const lastItem = joinedArr[joinedArr.length - 1];
          if (!lastItem || lastItem.length === 3) {
            joinedArr.push([videos[i]]);
          } else {
            lastItem.push(videos[i]);
          }
        }
        setChunkedVideos(joinedArr);
      }
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
      <H1Tags textAlign="center" fontSize="30px" margin="4rem">
        Trending Videos
      </H1Tags>
      <Container marginTop="4rem">
        <Container align="center">
          <Button
            text="&#60;"
            font="40px"
            height={"fit-content"}
            click={decreaseCountHandler}
            back={"white"}
          />
        </Container>
        <Container
          alignItems="center"
          wrap="wrap"
          width="90%"
          margin="0 auto 0 auto"
        >
          {chunkedVideos.length > 0 &&
            chunkedVideos[count].map((item, ind) => (
              <Cards key={item._id} height="fit-content">
                <video controls autoPlay={false}>
                  <source src="mov_bbb.mp4" type="video/mp4" />
                  <source src="mov_bbb.ogg" type="video/ogg" />
                  Your browser does not support HTML video.
                </video>
                <PTags fontSize="18px" margin="0.7rem 0.4rem">
                  {item.title}
                </PTags>
                <Container
                  flex="row"
                  justify="space-between"
                  padding="0 0.4rem"
                >
                  <PTags margin="0.4rem 0" textAlign="center">
                    <ImageTags
                      source={require("../../Images/profile.png")}
                      height="15px"
                      width="15px"
                    />
                    Queen Nwosu
                  </PTags>
                  <PTags margin="0.4rem 0" fontSize="small" textAlign="center">
                    <ImageTags
                      source={require("../../Images/calender.png")}
                      height="15px"
                      width="15px"
                    />
                    {item.createdAt}
                  </PTags>
                </Container>
              </Cards>
            ))}
        </Container>
        <Container align="center">
          <Button
            text="&#62;"
            font="40px"
            height={"fit-content"}
            click={increaseCountHandler}
            back={"white"}
          />
        </Container>
      </Container>
    </>
  );
};

export default PrintTrendingVideos;
