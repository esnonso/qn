import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './freeresources.css';

const FreeResourcesPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/');
  };

  return (

    <>
    <Header color="black" />
    <div className="page-wrapper">
        <div className="main-containers">
        <section className="hero-sections">
          <h1>Click on the button to access our Free Resources</h1>
          <button className='servicesButton' onClick={handleGetStartedClick}>Get Started</button>
        </section>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default FreeResourcesPage;
