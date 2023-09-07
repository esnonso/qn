import Container from "../Containers/container";
import { H1Tags, PTags } from "../Text";
import ContainerFlexColumn from "../Containers/container-flex-column";

const PrintRecentPosts = ({ arr }) => {
  return (
    <div className="recent-cont-posts">
      <H1Tags textAlign="center">Recent posts</H1Tags>
      <Container width="100%" flex="column">
        {arr.map((i) => (
          <ContainerFlexColumn
            width="100%"
            height="10rem"
            justifyContent="space-between"
            key={i.id}
            margin="0 0 1rem 0"
          >
            <img
              className="recent-img"
              src={require("../../Images/def.jpg")}
              alt=""
            />

            <Container flex="column" margin="0 0 0 0.5rem">
              <PTags>
                <b>{i.title}</b>
              </PTags>
              <p>
                {i.desc.slice(0, 160)}...{" "}
                <button className="btn">Read more</button>
              </p>
            </Container>
          </ContainerFlexColumn>
        ))}
      </Container>
    </div>
  );
};

export default PrintRecentPosts;
