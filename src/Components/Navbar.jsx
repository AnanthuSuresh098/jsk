import "./Navbar.css";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { NavList } from "./Navlist.jsx";
import { useState } from "react";

export const Navbar = () =>{

  const [list, setList] = useState(false);

  const listToggle = () => {
    setList(true);
  };

  const listClose = () => {
    setList(false);
  };

    return (
      <div id="navbar-main-wrapper">
        <div id="navbar-top-color-block"></div>
        <div id="navbar-elements-wrap">
          <div id="navbar-logo-wrap">
            <a href="/">
              {" "}
              <img src="./images/Nav-img/jsk.png" alt="logo" id="navbar-logo" />
            </a>
          </div>
          <div id="navbar-elements-main-wrap">
            <a href="/ourproducts">
              <div className="navbar-elements-text">Products</div>
            </a>
            <a href="/markets">
              <div className="navbar-elements-text">Markets</div>
            </a>
            <a href="/about">
              <div className="navbar-elements-text">About Us</div>
            </a>
            <a href="/samplekit">
              {" "}
              <div className="navbar-elements-text">Free Sample Kits</div>{" "}
            </a>
          </div>

          <div id="navbar-search-input-main-wrap">
            <input type="search" placeholder="Search..." />
            <div id="navbar-search-input-icon-wrap">
              <GoSearch id="navbar-search-input-icon" />
            </div>
          </div>
        </div>

        {/* mobile view navigation */}
        <>
          <div id="mobile-view-navigation-main-wrap">
            <RxHamburgerMenu
              id="mobile-view-navigation-ham-icon"
              onClick={listToggle}
            />
            <div id="mobile-view-navigation-logo-wrap">
              <a href="/">
                {" "}
                <img src="./images/Nav-img/jsk.png" alt="logo" />
              </a>
            </div>
            <FiSearch id="mobile-view-navigation-search-icon" />
          </div>
          {list && <NavList listClose={listClose} />}
        </>
      </div>
    );
}