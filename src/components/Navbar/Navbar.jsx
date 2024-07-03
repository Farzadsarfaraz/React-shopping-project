import "./Navbar.css";
import logo from "../../components/assets/logo.png";
import shopIcon from "../../components/assets/shopIcon.gif";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const[menu, setMenu] = useState("shop")

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <nav className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu ==="shop"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='mens'>Men</Link>{menu ==="mens"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='womens'>Women</Link>{menu ==="womens"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='kids'>Kid</Link>{menu ==="kids"? <hr/> : <></>}</li>
      </nav>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={shopIcon} alt="" /></Link>
        <div className="nave-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
