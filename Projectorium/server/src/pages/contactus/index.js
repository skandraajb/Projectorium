import React, { useState } from "react";
import './CustomerCare.css'; // 🔥 Import the new CSS file

const CustomerCare = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted: " + message);
    setMessage(""); 
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    section: {
      background: "#f1f1f1",
      padding: "20px",
      margin: "15px 0",
      borderRadius: "8px",
      textAlign: "left",
    },
    heading: {
      color: "#067062",
      fontSize: "20px",
      borderBottom: "2px solid #067062",
      paddingBottom: "5px",
      marginBottom: "10px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#444",
    },
    textArea: {
      width: "97%",
      height: "100px",
      padding: "10px",
      marginTop: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      resize: "none",
    },
    button: {
      background: "#067062",
      color: "white",
      border: "none",
      padding: "12px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      background: "#05524e",
    },
  };

  return (
    <div style={styles.container} className="customer-container">
      <h1 style={{ color: "#067062", fontSize: "28px" }}>Customer Care</h1>
      <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
        We are here to assist you. Contact us for support, inquiries, or feedback.
      </p>

      <div style={styles.section} className="customer-section">
        <h2 style={styles.heading}>Contact Information</h2>
        <p style={styles.text}><strong>Email:</strong> support@projectorium.com</p>
        <p style={styles.text}><strong>Phone:</strong> +1-800-123-4567</p>
        <p style={styles.text}><strong>Address:</strong> 123 Innovation Street, Tech City, TX</p>
      </div>

      <div style={styles.section} className="customer-section">
        <h2 style={styles.heading}>Frequently Asked Questions</h2>
        <p style={styles.text}><strong>How do I add a project?</strong><br />
          Click the <em>"Add Project"</em> button, enter the details, and save.</p>
        <p style={styles.text}><strong>Can I edit my project later?</strong><br />
          Yes. Go to your project list, select a project, and click <em>"Edit"</em>.</p>
        <p style={styles.text}><strong>Is my data secure?</strong><br />
          Yes. We implement encryption and secure storage measures to protect your information.</p>
      </div>

      <div style={styles.section} className="customer-section">
        <h2 style={styles.heading}>Support</h2>
        <p style={styles.text}>If you need further assistance, fill out the form below.</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="customer-textarea"
            style={styles.textArea}
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="customer-button"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.target.style.background = styles.button.background)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerCare;
