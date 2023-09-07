import ContainerFlexColumn from "../Containers/container-flex-column";
import Container from "../Containers/container";
import Cards from "../Cards";
import { H1Tags, PTags, ImageTags } from "../Text";

const PrintTrending = ({ arr, title }) => {
  return (
    <>
      <H1Tags textAlign="center" fontSize="30px" margin="4rem">
        Trending {title}
      </H1Tags>
      <ContainerFlexColumn marginTop="4rem">
        <ContainerFlexColumn alignItems="center" wrap="wrap">
          <PTags fontSize="60px">&#60;</PTags>
          {arr.slice(3).map((item, ind) => (
            <Cards key={item.id} height="25rem">
              <ImageTags
                source={require("../../Images/def.jpg")}
                height="65%"
                width="100%"
                alt=""
              />
              <PTags fontSize="18px" margin="0.7rem 0.4rem">
                {item.title}
              </PTags>
              <Container flex="row" justify="space-between" padding="0 0.4rem">
                <PTags margin="0.4rem 0" textAlign="center">
                  <ImageTags
                    source={require("../../Images/profile.png")}
                    height="15px"
                    width="15px"
                  />
                  {item.author}
                </PTags>
                <PTags margin="0.4rem 0" fontSize="small" textAlign="center">
                  <ImageTags
                    source={require("../../Images/calender.png")}
                    height="15px"
                    width="15px"
                  />
                  {item.date}
                </PTags>
              </Container>
            </Cards>
          ))}
          <PTags fontSize="60px">&#62;</PTags>{" "}
        </ContainerFlexColumn>
      </ContainerFlexColumn>
    </>
  );
};

export default PrintTrending;
