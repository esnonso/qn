import React from "react"; // Import React if not already imported
import Container from "../Containers/container";
import Twitter from "../../Images/twitter.png";
import LinkedIn from "../../Images/linked.png"; // Renamed In to LinkedIn for clarity
import Instagram from "../../Images/insta.png"; // Renamed Insta to Instagram for clarity

const Footer = () => {
  return (
    <Container flex="column" color="black" textColor="white" align="center" height="200px" >
      <Container flex="column" justify="space-between" height="100%">
        <h4 style={{ color: "#D1BB71", marginBottom: "-35px", marginTop: "40px" }}>Subscribe to our newsletter</h4>
        <Container justify="center" padding="0 0 1rem 0">
          <img
            src={Twitter}
            alt="Twitter"
            width="20px"
            height="20px"
            className="social"
          />
          <img src={LinkedIn} alt="LinkedIn" width="20px" height="20px" className="social" />
          <img src={Instagram} alt="Instagram" width="20px" height="20px" className="social" />
        </Container>

        <Container justify="space-around" fontSize= "70px" style={{ marginTop: "70px", fontSize: "1px" }}>
          &copy; Copyright {new Date().getFullYear()} Qn Legal
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
