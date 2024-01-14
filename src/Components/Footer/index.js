import React, { useState } from "react";
import Container from "../Containers/container";
import Twitter from "../../Images/twitter.png";
import LinkedIn from "../../Images/linked.png";
import Instagram from "../../Images/insta.png";


const Footer = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSubscribe = () => {
    setShowSubscribe(!showSubscribe);
  };

  const handleSubscribe = async () => {
   
  if (!email) {
    setErrorMessage("Email is required.");
    setSuccessMessage("");
    return;
  }


    try {
      const response = await fetch("https://formspree.io/f/mdoqkzvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

    

      if (response.ok) {
        // Show success message
        setSuccessMessage("Thank you for subscribing!");
        setErrorMessage(""); // Clear any previous error message
      } else {
        // Show error message
        setErrorMessage("Error submitting subscription. Please try again");
        setSuccessMessage(""); // Clear any previous success message
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      setErrorMessage("Error submitting subscription. Please try again.");
      setSuccessMessage("");
    }

    // Clear the email input and hide the subscription input
    setEmail("");
    setShowSubscribe(false);
  };

  // Rest of the component...

  return (
    <Container flex="column" color="black" textColor="white" align="center" height="200px">
      {/* ... (rest of the component) */}

      <Container flex="column" justify="space-between" height="100%">
        {/* Toggled input for subscription */}
        {showSubscribe ? (
          <Container align="baseline" flexDirection="column">
          <input
              type="email"
              placeholder="Please Enter Your Email"
            style={{ padding: "8px", marginBottom: "10px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              style={{ padding: "8px 20px", background: "#D1BB71", color: "black", border: "none", cursor: "pointer" }}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </Container>
        ) : (
          <>
            <h4 style={{ color: "#D1BB71", cursor: "pointer", textDecoration: "none" }} onClick={toggleSubscribe}>
              Subscribe to our newsletter
            </h4>
            <Container justify="center" padding="0 0 1rem 0">
            <img src={Twitter} alt="Twitter" width="20px" height="20px" className="social" style={{ margin: "0 5px" }} />
              <img src={LinkedIn} alt="LinkedIn" width="20px" height="20px" className="social" style={{ margin: "0 5px" }} />
              <img src={Instagram} alt="Instagram" width="20px" height="20px" className="social" style={{ margin: "0 5px" }} />

            </Container>
          </>
        )}

        {/* Display success or error messages */}
        {successMessage && <small style={{ color: "green" }}>{successMessage}</small>}
        {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}

       
<Container justify="space-around" fontSize="14px" style={{ marginTop: "40px", fontSize: "1px" }}>
          &copy; Copyright {new Date().getFullYear()} Qn Legal
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
