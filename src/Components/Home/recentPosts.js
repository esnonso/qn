import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Containers/container";
import { H1Tags, PTags } from "../Text";
import ContainerFlexColumn from "../Containers/container-flex-column";
import Button from "../Button";
import { paginate } from "../Functions";

const PrintRecentPosts = ({ posts }) => {
  const [page, setPage] = useState(0);
  const [batch, setBatch] = useState([]);

  const putPostsInBatches = async () => {
    setBatch(paginate(posts));
  };

  useEffect(() => {
    if (posts) {
      putPostsInBatches();
    }
  }, []);

  const decreasePageHandler = () => {
    if (page === 0) return;
    setPage((prevState) => prevState - 1);
  };
  const increasePageHandler = () => {
    if (page === batch.length - 1) return;
    setPage((prevState) => prevState + 1);
  };
  return (
    <div className="recent-cont-posts">
      <H1Tags textAlign="center">Recent posts</H1Tags>
      <Container width="100%" flex="column">
        {batch.length > 0 &&
          batch[page].map((i) => (
            <ContainerFlexColumn
              width="100%"
              height="10rem"
              justifyContent="space-between"
              key={i._id}
              margin="0 0 1rem 0"
            >
              <img className="recent-img" src={i.imageUrl} alt="" />

              <Container flex="column" margin="0 0 0 0.5rem" width="100%">
                <PTags>
                  <b>{i.title}</b>
                </PTags>
                <p>
                  {i.body.slice(0, 160)}...{" "}
                  <Link to={`/post/${i._id}`} className="btn">
                    Read more
                  </Link>
                </p>
              </Container>
            </ContainerFlexColumn>
          ))}
      </Container>
      <Container width="100%" justify="center">
        <Button
          text="Previous"
          back="black"
          color="#D1BB71"
          font="large"
          borderRadius={"5px"}
          margin={"0 0.2rem 0 0"}
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
            borderRadius={"5px"}
            margin={"0 0.2rem 0 0"}
          />
        ))}
        <Button
          text="Next"
          back="black"
          color="#D1BB71"
          font="large"
          borderRadius={"5px"}
          margin={"0 0.2rem 0 0"}
          width="6rem"
          click={increasePageHandler}
        />
      </Container>
    </div>
  );
};

export default PrintRecentPosts;
