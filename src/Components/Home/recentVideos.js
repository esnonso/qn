import { useEffect, useState } from "react";
import Container from "../Containers/container";
import { H1Tags, PTags } from "../Text";
import Button from "../Button";
import { paginate } from "../Functions";

const PrintRecentVideos = ({ videos }) => {
  const [page, setPage] = useState(0);
  const [batch, setBatch] = useState([]);

  const putVideosInBatches = async () => {
    setBatch(paginate(videos));
  };

  useEffect(() => {
    if (videos) {
      putVideosInBatches();
    }
  }, [videos]);

  const decreasePageHandler = () => {
    if (page === 0) return;
    setPage((prevState) => prevState - 1);
  };

  const increasePageHandler = () => {
    if (page === batch.length - 1) return;
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className="recent-cont-vids">
      <H1Tags textAlign="center">Recent videos</H1Tags>
      <Container width="100%" flex="column">
        {batch.length > 0 &&
          batch[page].map((i) => (
            <Container
              flex="column"
              width="100%"
              justifyContent="space-between"
              key={i._id}
              margin="0 0 1rem 0"
            >
              <video controls autoPlay={false}>
                <source src={i.videoUrl} type="video/mp4" />
                <source src={i.videoUrl} type="video/ogg" />
                {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                Your browser does not support HTML video.
              </video>

              <Container flex="column" margin="0 0 0 0.5rem">
                <PTags>
                  <b>{i.title}</b>
                </PTags>
              </Container>
            </Container>
          ))}
      </Container>
      {videos.length >= 10 && ( // Conditionally render pagination buttons
        <Container width="100%" justify="center">
          <Button
            text="Previous"
            back="black"
            color="#D1BB71"
            font="large"
            borderRadius="5px"
            margin="0 0.2rem 0 0"
            width="6rem"
            click={decreasePageHandler}
          />
          {batch.map((b, i) => (
            <Button
              text={i + 1}
              key={i}
              back="black"
              color="#D1BB71"
              font="large"
              borderRadius="5px"
              margin="0 0.2rem 0 0"
            />
          ))}
          <Button
            text="Next"
            back="black"
            color="#D1BB71"
            font="large"
            borderRadius="5px"
            margin="0 0.2rem 0 0"
            width="6rem"
            click={increasePageHandler}
          />
        </Container>
      )}
    </div>
  );
};

export default PrintRecentVideos;
