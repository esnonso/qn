import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./contactuspage.css";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdoqkzvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      setData(responseData);

      if (response.ok) {
        // Clear form inputs after successful submission
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      <Header color={"black"} />
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {data && data.error && (
          <small style={{ color: "red" }}>Error: {data.message}</small>
        )}
        {data && !data.error && (
          <small style={{ color: "green" }}>Message submitted successfully {data.message}</small>
        )}
      </div>
      <Footer />
    </section>
  );
}
