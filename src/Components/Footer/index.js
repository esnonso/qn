import React, { useState, useRef, useEffect } from "react";
import Container from "../Containers/container";
import Twitter from "../../Images/twitter.png";
import LinkedIn from "../../Images/linked.png";
import Instagram from "../../Images/insta.png";

const Footer = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSubscribe(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        setSuccessMessage("Thank you for subscribing!");
        setErrorMessage("");
      } else {
        setErrorMessage("Error submitting subscription. Please try again");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      setErrorMessage("Error submitting subscription. Please try again.");
      setSuccessMessage("");
    }

    setEmail("");
    setShowSubscribe(false);
  };

  return (
    <Container flex="column" color="black" textColor="white" align="center" height="200px">
      {showSubscribe ? (
        <div ref={containerRef} style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Please Enter Your Email"
            style={{ padding: "8px", marginBottom: "10px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            style={{
              padding: "8px 20px",
              background: "#D1BB71",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      ) : (
        <>
          <h4
            style={{
              color: "#D1BB71",
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onClick={toggleSubscribe}
          >
            Subscribe to our newsletter
          </h4>
        </>
      )}

      {successMessage && (
        <small style={{ color: "green" }}>{successMessage}</small>
      )}
      {errorMessage && (
        <small style={{ color: "red" }}>{errorMessage}</small>
      )}

      <Container justify="center" padding="0 0 1rem 0">
        <img
          src={Twitter}
          alt="Twitter"
          width="20px"
          height="20px"
          className="social"
          style={{ margin: "0 5px" }}
        />
        <img
          src={LinkedIn}
          alt="LinkedIn"
          width="20px"
          height="20px"
          className="social"
          style={{ margin: "0 5px" }}
        />
        <img
          src={Instagram}
          alt="Instagram"
          width="20px"
          height="20px"
          className="social"
          style={{ margin: "0 5px" }}
        />
      </Container>

      <h4
        style={{
          textAlign: "center",
          color: "#D1BB71",
          fontSize: "12px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Contact Us: info@qnlegal.org
      </h4>

      <Container justify="space-around" fontSize="6px" style={{ marginTop: "40px", fontSize: "1px" }}>
        &copy; Copyright {new Date().getFullYear()} Qn Legal 
      </Container>
    </Container>
  );
};

export default Footer;
