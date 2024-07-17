import "./Footer.css";
import footer_logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";
import whatsapp_icon from "../assets/whatsapp.png";

const Footer = () => {
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
    </div>
    <div className="footer2">
      <h1>USEFUL LINKS</h1>
      <p>Men Collection</p>
      <p>Women Collection</p>
      <p>Popular Collection</p>
      <p>Refund and Returns Policy</p>
      <p>FAQs</p>
    </div>
    <div className="footer2">
      <h1>Our partner</h1>
      <p>Amazone</p>
      <hr/>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" width="30px" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" width="30px" />
        </div>
      </div>

    </div>
    </div>
  );
};

export default Footer;
