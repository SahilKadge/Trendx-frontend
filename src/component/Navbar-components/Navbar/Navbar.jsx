import "./Navbar.css";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { OnlineOnly } from "../onlineonly/OnlineOnly";
import { MensNavbar } from "../mensNavbar/MensNavbar";
import { WomensNavbar } from "../womensNavbar/WomensNavbar";
import { KidsNavar } from "../kidsNavbar/KidsNavbar";
import { BeautyNavbar } from "../beautyNavbar/BeautyNavbar";
import { HomeNavbar } from "../homeNavbar/HomeNavbar";
import { BrandNavbar } from "../brands/BrandNavbar";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { MainFooter } from "../../main-footer/MainFooter";
export const Navbar = () => {
  return (
    <Fragment>
        <div className="Navbar-div">
      <header >
        <div className="logo">
          <a href="/">Trendx</a>
        </div>
        <div className="navbar-container">
          <form className="search-bar">
            <input type="text" placeholder="Search..." required />
            <button type="submit">Search</button>
          </form>
          
        </div>
        <div className="other-div">
            <div className="other-content">
            <a href="#" className="icon-link-1">
                    <CiHeart className="icon" />
            </a>
            </div>
            <div className="other-content">
                <a href="#" className="icon-link-2">
                    <IoCartOutline className="icon" />
                </a>
            </div>
            <div className="other-content">
                <a href="#" className="sign-in-link">
                <div className="sign-in-navbar-div">Sign in</div>
                </a>
            </div>
        </div>
      </header>
      <header className="nav-list" >
        <nav >
                <ul className="nav-ul">
                <li>
                    <a href="#">Online Only</a>
                    <div className="submenu">
                    <OnlineOnly/>
                    </div>
                </li>
                <li>
                    <a to="#">Mens</a>
                    <div className="submenu">
                        <MensNavbar/>
                    </div>
                </li>
                <li>
                    <a href="#">Womens</a>
                    <div className="submenu">
                        <WomensNavbar/>
                    </div>
                </li>
                <li>
                    <a href="#">Kids</a>
                    <div className="submenu">
                        <KidsNavar/>
                    </div>
                </li>
                <li>
                    <a href="#">Beauty</a>
                    <div className="submenu">
                        <BeautyNavbar/>
                    </div>
                </li>
                <li>
                    <a href="#">Home</a>
                    <div className="submenu">
                    <HomeNavbar/>
                    </div>
                </li>
                <li>
                    <a href="#">Brand</a>
                    <div className="submenu">
                        <BrandNavbar/>
                    </div>
                </li>
                <li>
                    <a href="#">Wstype</a>
                </li>
                <li>
                    <a href="#">View More</a>
                </li>
                </ul>
            </nav>
      </header>
      
    </div>
    <Outlet/>
    <MainFooter/>
    </Fragment>
    
  );
};
