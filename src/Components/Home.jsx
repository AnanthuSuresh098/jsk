import "./Home.css";
import { useSpring, animated } from "react-spring";

export const Home=()=>{
    return (
      <div id="homepage-main-wrapper">
        <div id="homepage-banner-section-wrap">
          <div
            className="homepage-banner-section-image-wrap"
          >
            <img
              src="./images/Home-img/banner.png"
              alt="banner"
              id="homepage-banner-section-image"
            />
          </div>

          <div id="homepage-banner-section-content-wrap">
            <div id="homepage-banner-section-content-title">
              High Quality, Flexible Packagings From JSK Packagings
            </div>
            <div id="homepage-banner-section-content-desc">
              We manufacture a wide range of products for various sectors
            </div>
            <div id="homepage-banner-section-button-wrap">
              <button id="homepage-banner-section-contact-button">
                Contact Us
              </button>
              <button id="homepage-banner-section-request-button">
                Request For Free Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}