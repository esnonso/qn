import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { H1Tags, PTags } from "../Components/Text";

const Faq = () => {
  return (
    <>
    <Header color={"black"}/>

    <div className="page-wrapper">
      <div className="main-container">
        <section className="hero-section">
          <H1Tags>FAQ</H1Tags>
        </section>

        <section className="services-section">
          <div className="service-description">
         <p>
         I have a legal dispute in court, can QN Legal represent me?
         </p>
         <p>
         No,QN legal does not make courtroom representations. However, we are happy to recommend Barristers and Solicitors from our robust network.
         </p>
         <p>
         Is QN Legal a Law Firm/Practice? 
         </p>
         <p>
         No, QN Legal is not a Law firm. We are a Legal consulting and education consultancy service.. We
        provide legal services that are not exclusively reserved for licenced legal professionals.
         </p>
          </div>
        </section>
        
      </div>
    </div>

    <Footer/>
  </>
  )
}

export default Faq