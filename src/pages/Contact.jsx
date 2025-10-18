

import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!name || !email || !message) {
      setError("⚠️ Please fill out all fields.");
      setSuccess("");
      return;
    }

    // simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("❌ Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // if all good
    setError("");
    setSuccess("✅ Your message has been sent successfully!");

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Contact;
