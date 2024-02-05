// OurServicePage.js
import React from 'react';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { H1Tags, PTags } from "../Components/Text";
import Header from '../Components/Header';
import './ourservicespage.css';

const OurServicePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contactus');
  };

  return (
    <>
      <Header color={"black"} />

      <div className="page-wrapper">
        <div className="main-container">
          <section className="hero-section">
            <H1Tags>What We Do</H1Tags>
          </section>

          <section className="services-section">
            <div className="service-description">
              <h2>Legal Education</h2>
              <p>
                We provide educational services for individuals, businesses, and corporate institutions in various areas of law, including contract law, commercial law, company law, corporate social responsibility, employment law, and immigration law. Our services encompass individual and group seminars, specialized courses, and books.
              </p>
            </div>
          </section>
          
          <div>
            <button onClick={handleGetStartedClick} className='getStarted'>Get Started</button> 
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurServicePage;
