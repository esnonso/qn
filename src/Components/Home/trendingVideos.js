import { useEffect, useState } from "react";
import Button from "../Button";
import Container from "../Containers/container";
import Cards from "../Cards";
import { H1Tags, PTags, ImageTags } from "../Text";

const PrintTrendingVideos = ({
  videos,
  count,
  increaseCountHandler,
  decreaseCountHandler,
}) => {
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
          {videos.length > 0 &&
            videos[count].map((item, ind) => (
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
