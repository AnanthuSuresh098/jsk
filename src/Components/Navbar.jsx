import "./Navbar.css";
import { GoSearch } from "react-icons/go";

export const Navbar = () =>{
    return (
      <div id="navbar-main-wrapper">
        <div id="navbar-top-color-block"></div>
        <div id="navbar-elements-wrap">
          <div id="navbar-logo-wrap">
            <img src="./images/Nav-img/jsk.png" alt="logo" id="navbar-logo" />
          </div>

          <div id="navbar-elements-main-wrap">
            <div className="navbar-elements-text">Products</div>
            <div className="navbar-elements-text">Markets</div>
            <div className="navbar-elements-text">About Us</div>
            <div className="navbar-elements-text">Free Sample Kits</div>
          </div>

          <div id="navbar-search-input-main-wrap">
            <input type="search" placeholder="Search..." />
            <div id="navbar-search-input-icon-wrap">
              <GoSearch id="navbar-search-input-icon" />
            </div>
          </div>
        </div>
      </div>
    );
}