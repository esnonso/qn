import Container from "../Components/Containers/container";
import Header from "../Components/Header";
import { H1Tags, PTags } from "../Components/Text";
import Image from "../Images/pica.png";
import Footer from "../Components/Footer";
import "./aboutpage.css"

const AboutPage = () => {
  return (
    <>
      <Header color={"black"} />

      <Container justify="center" flex="column" width="100%">
        <div className="pic">
          <img className="aboutimage"  src={Image} alt="" />
          <div className="about-text">
           <H1Tags fontFamily="Bradon" className="about-text" color="black" margin="5rem 0 0  0">
              About Us
            </H1Tags>

            <H1Tags color="black" margin="3rem 0 0 0">
              Our Founder
            </H1Tags> 
            <PTags margin="0 0 1rem 0" color="black">
            Queen Nwosu is a legal educator and consultant with several years experience in legal education and
            services. She is a seasoned professional who has leveraged on her extensive expertise to establish a
            consulting service focused on imparting legal knowledge and providing strategic counsel to our
            clients. She possesses a deep understanding of the law which has enabled her design a comprehensive
            educational program that offers specialised consulting services. Queen’s commitment to advancing
            legal understanding and providing valuable insights, positions the firm as a trusted resource in the
            legal education and consulting landscape.
            </PTags>
            <br/>
            <br/>
            <PTags margin="0 0 1rem 0" color="black">
            Queen has completed the Solicitors Legal Practice Course (LPC) from the BPP University,
            Manchester, United Kingdom. She holds a First Class LLB Law (Hons) from the University of
            Buckingham, United Kingdom; LLM International Law and Development from the University of
            Nottingham, United Kingdom; and a BSc (Hons) Political Science from the University of Nigeria
            Nsukka, Nigeria;
            </PTags>
            <br/>
            <br/>
            <PTags margin="0 0 1rem 0" color="black">
            I am passionate about business and immigration law. I am committed to educating
            people and corporate entities in these areas to circumvent common errors which
            lead to avoidable legal consequences. As a problem solver, I enjoy attentively
            listening to clients and proffering viable solutions to rectify mistakes or forestall
            imminent issues. I find satisfaction in teaching, particularly as it relates to the
            complexities in the law. It is my objective to provide adequate, accessible, and
            affordable legal education in business and immigration law.
            </PTags>
            <H1Tags color="black" margin="3rem 0 0 0">
              Who We Are
            </H1Tags>
            <PTags margin="0 0 1rem 0" color="black">
              We are a legal education and consultancy service, we provide legal consultation in the areas of, but
              not limited to contract law, company law, commercial law and immigration law.
            </PTags>

            <H1Tags color="black" margin="3rem 0 0 0">
              Our Mission
            </H1Tags>
           <PTags margin="0 0 1rem 0" color="black">
            Our Mission is to provide quality legal education to individuals and corporate legal entities in
            business and immigration Law.
          
            To be one of the top providers of legal education and consulting services.
            </PTags>

            <H1Tags color="black" margin="3rem 0 0 0">
              Our Vision
            </H1Tags>
            <PTags margin="0 0 1rem 0" color="black">
            Our vision is to make QN Legal a leading global provider of adequate, accessible, and affordable high
            quality legal education and legal services.
            </PTags>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
