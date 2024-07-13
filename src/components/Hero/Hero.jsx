import "./Hero.css";
import HomeImage from "./../assets/prof.webp";
import logo from "./../assets/rightLogo.gif";
import ImageSlider from "../Bootstrap/Bootstrap";
import photo1 from "../assets/kid1.png";
import photo5 from "../assets/Cloth-123.01.webp";
import photo6 from "../assets/png (1).png";
import photo8 from "../assets/png (3).png";
import photo9 from "../assets/png (4).png";
import photo10 from "../assets/png (5).png";
import photo11 from "../assets/Cloth-128.1.webp";

const Hero = () => {
  const images = [photo1, photo5, photo6, photo8, photo9, photo10, photo11];

  return (
      <div className="hero">
      <div className="hero-left">
        <h2>
          Gandi <span>AfGHaNi...</span>
        </h2>
        <div className="hero-hand-icon">
          <p>
            Explore verity of our Kuchi & Vintage Dresses collection purely made
            with hands, filter with color, style & pricing. More than 90% off
            our design are custom made so if you want to customize the dress you
            have 100% freedom to change size, color & embroidery.
          </p>
        </div>
        <br />
          <ul>
            <li>Vintage Dresses</li>
            <li>Nikah & Wedding Dresses</li>
            <li>Mehndi Dresses</li>
            <li>Party Dresses</li>
          </ul>
        <div className="hero-latest-btn">
          <div>You want to see?</div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="hero-right">
      <div className="image-slider">
        <ImageSlider images={images} />
      </div>
      </div>
    </div>
  );
};

export default Hero;
