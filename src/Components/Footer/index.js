import React, { useState } from "react";
import Container from "../Containers/container";
import Twitter from "../../Images/twitter.png";
import LinkedIn from "../../Images/linked.png";
import Instagram from "../../Images/insta.png";

const Footer = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  const toggleSubscribe = () => {
    setShowSubscribe(!showSubscribe);
  };

  const handleSubscribe = () => {
    // Add logic here to handle the subscription, e.g., send email to server
    console.log(`Subscribed with email: ${email}`);

    // You can also add more advanced logic, e.g., validate the email, show success/error messages, etc.

    // Clear the email input and hide the subscription input
    setEmail("");
    setShowSubscribe(false);
  };

  return (
    <Container flex="column" color="black" textColor="white" align="center" height="200px">
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

        <Container justify="space-around" fontSize="14px" style={{ marginTop: "40px", fontSize: "1px" }}>
          &copy; Copyright {new Date().getFullYear()} Qn Legal
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
