import Container from "../Components/Containers/container";
import Header from "../Components/Header";
import { H1Tags, PTags } from "../Components/Text";
import Image from "../Images/pica.png";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header textColor="black" />

      <Container justify="center" flex="column" width="100%">
        <div className="pic">
          <img src={Image} alt="" />
          <div className="about-text">
            <H1Tags color="#D1BB71" margin="5rem 0 0 0">
              About Us
            </H1Tags>
            <PTags>
              Our Mission is to provide quality legal education to individuals
              and businesses in the areas of Business Law and Immigration Law.
              We provide legal consultation in the areas of, but not limited to
              commercial contracts, lease agreements and general document
              reviews. Our vision is to make QN Legal a leading provider of
              adequate, accessible, and affordable high quality legal education
              and legal services.
            </PTags>

            <H1Tags margin="7rem 0 0 0">About The founder</H1Tags>
            <PTags>
              Queen Nwosu is a Legal Educator. Her work ranges from individual
              to corporate legal education and consultation.
            </PTags>
            <PTags>
              I am passionate about business and immigration law and committed
              to educating people and businesses in these areas to avoid common
              errors that often lead to grave and avoidable consequences. As a
              problem solver, I enjoy listening to clients and proffering
              possible solutions to issues where mistakes have been made or
              imminent.
            </PTags>
            <PTags>
              Queen holds a BSc (Hons) in Political Science from the University
              of Nigeria, Nigeria; First Class LLB Law (Hons) from the
              University of Buckingham, United Kingdom; LLM International Law
              and Development from the University of Nottingham, United Kingdom;
              and an LPC (the Solicitors Legal Practice Course) from the BPP
              University, Manchester, United Kingdom.
            </PTags>

            <H1Tags margin="7rem 0 0 0" color="#D1BB71">
              Contact
            </H1Tags>
            <PTags margin="0 0 7rem 0">Email: queen.nwosu@qnlegal.org.</PTags>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
