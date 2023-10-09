import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
  var slider01_settings = {
    className: "homepage-products-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  return (
    <div id="homepage-main-wrapper">
      <div id="homepage-banner-section-wrap">
        <div className="homepage-banner-section-image-wrap">
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

      <div id="homepage-products-section-main-wrap">
        <div id="homepage-products-section-headline">
          Our <span>Products</span>
        </div>
        <div id="homepage-products-slider-main-wrap">
          <Slider {...slider01_settings}>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/lidrolls.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Sealing Lid Rolls
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/paper-pouch.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Paper Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/spout.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Spout Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/stretch.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Stretch Films
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/zip.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Standy Zip Lock Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/thick-laminated.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Thick Laminated Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/seal.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Three Side Seal Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/organic.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Organic Food Packaging
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/metalised.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Metalized Pouches
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/laminated.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Laminated Films for FFS Machines
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/catering.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Catering Table Rolls
              </div>
            </div>
            <div className="homepage-products-slider-slides">
              <div className="homepage-products-slider-image-wrap">
                <img src="./images/Home-img/agarbhathi.jpeg" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Agarbatti Pouches
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
