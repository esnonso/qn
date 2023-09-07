import Container from "../Containers/container";
import Twitter from "../../Images/twitter.png";
import In from "../../Images/linked.png";
import Insta from "../../Images/insta.png";

const Footer = () => {
  return (
    <Container flex="column" color="black" textColor="white" align="center">
      <h4>Subscribe to our newsletter</h4>
      <Container justify="space-around" padding="0 0 1rem 0">
        <img
          src={Twitter}
          alt=""
          width="20px"
          height="20px"
          className="social"
        />
        <img src={In} alt="" width="20px" height="20px" className="social" />
        <img src={Insta} alt="" width="20px" height="20px" className="social" />
      </Container>
    </Container>
  );
};

export default Footer;
