import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/little-lemon-logo.svg"
export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
    <nav>
        <div className="container mx-auto">
            <div className="d-flex">
                <div className="site-logo">
                    <img src={logo} alt="little-lemon logo" />
                </div>
                <div className="menu">
                    <ul className={navbarOpen ? "navOpen" : "navClose"}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/reservations">Reservations</NavLink></li>
                        <li><NavLink to="/order">Order Online</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                    <div className="mobmenu">
                        <button className="toggle" onClick={()=>setNavbarOpen(!navbarOpen)}>{navbarOpen ? (<i className="btnClose"></i>) : (<i className="btnOpen"></i>)}</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
   )
}