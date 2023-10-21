import Container from "../Containers/container";
import { H1Tags, PTags } from "../Text";

const PrintRecentVideos = ({ videos }) => {
  return (
    <div className="recent-cont-vids">
      <H1Tags textAlign="center">Recent videos</H1Tags>
      <Container width="100%" flex="column">
        {videos.length > 0 &&
          videos.slice(0, 6).map((i) => (
            <Container
              flex="column"
              width="100%"
              justifyContent="space-between"
              key={i._id}
              margin="0 0 1rem 0"
            >
              <video controls autoPlay={false}>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
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
    </div>
  );
};

export default PrintRecentVideos;
