import "./Navbar.css";
import logo from "../../components/assets/logo.png";
import shopIcon from "../../components/assets/shopIcon.gif";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import arrow_down from '../../components/assets/arrow-down.png'

const Navbar = () => {
    const[menu, setMenu] = useState("shop")
    const[navbar, setNavbar] = useState(false)
    const{getTotalCartItems} = useContext(ShopContext);
    const Menuref = useRef();

    const dropdown_toggle = (e) =>{
      Menuref.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');

    }

    useEffect(() =>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setNavbar(true) : setNavbar(false);
      })
    })

  return (
    <div className={`navbar ${navbar? "sticky" : ""}`}>
      <div className="nav-logo">
        <Link to='/'><img onClick={window.scrollY} src={logo} alt="" width={200}/></Link>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={arrow_down} alt="" width="30px" height="30px"/>
      <nav ref={Menuref} className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: "red"}} to='/'>Shop</Link>{menu ==="shop"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='mens'>Men</Link>{menu ==="mens"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='womens'>Women</Link>{menu ==="womens"? <hr/> : <></>}</li>
        <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='kids'>Kid</Link>{menu ==="kids"? <hr/> : <></>}</li>
      </nav>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={shopIcon} alt="" className="shopIcon" /></Link>
        <div className="nave-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
