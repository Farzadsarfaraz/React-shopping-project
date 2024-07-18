import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";
import whatsapp_icon from "../assets/whatsapp.png";

const Footer = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cbafd03-c31f-431b-8ec7-cf0383fb56f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Wrapper">
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" width={300}/>
      </div>
      <ul className="footer-links">
        <li>What is Afghan fashion</li>
        <li>Products</li>
        <li>Our location</li>
        <li>About</li>
        <li>Help & Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" width="30px" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" width="30px" />
        </div>
      </div>
    </div>
    <div className="footer2">
      <h1>USEFUL LINKS</h1>
      <p>Men Collection</p>
      <p>Women Collection</p>
      <p>Popular Collection</p>
      <p>Refund and Returns Policy</p>
      <p>FAQs</p>
    </div>
      <div className="contact">
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Your Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required/>
            <label>Write your message</label>
            <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn dark-btn"> Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Footer;
