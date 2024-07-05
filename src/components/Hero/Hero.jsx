import "./Hero.css";
import HomeImage from "./../assets/pic16.png";
import logo from "./../assets/rightLogo.gif";

const Hero = () => {
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
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
