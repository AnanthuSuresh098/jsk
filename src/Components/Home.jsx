import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsArrowRightCircle } from "react-icons/bs";
import { Contact } from "./Contact.jsx";

export const Home = () => {

  const [contact, setContact] = useState(false);
  
  const slider01Ref = useRef(null);

  var slider01_settings = {
    className: "homepage-products-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: <Slider01NextArrow />,
    prevArrow: <Slider01PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };

    const handleSlider_01_NextClick = () => {
      slider01Ref.current.slickNext();
    };

    function Slider01NextArrow() {
      return (
        <IoIosArrowDroprightCircle
          className="home-slider01-nextarrow"
          onClick={handleSlider_01_NextClick}
        />
      );
    }

    const handleSlider_01_PrevClick = () => {
      slider01Ref.current.slickPrev();
    };

    function Slider01PrevArrow() {
      return (
        <IoIosArrowDropleftCircle
          className="home-slider01-prevarrow"
          onClick={handleSlider_01_PrevClick}
        />
      );
    }


const contactPopup=()=>{
setContact(true);
}

const Contactpopupclose = () => {
  setContact(false);
};


  return (
    <div id="homepage-main-wrapper">
      {contact === true && <Contact Contactpopupclose={Contactpopupclose}/>}
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
            Quality packaging materials by skilled professionals and
            customer-focused service.
          </div>
          <div id="homepage-banner-section-content-desc">
            We cater to various industry sectors for their packaging material
            and requirements a wide range of products for various sectors
          </div>
          <div id="homepage-banner-section-button-wrap">
            <button
              id="homepage-banner-section-contact-button"
              onClick={contactPopup}
            >
              Contact Us
            </button>
            <a href="/samplekit">
              <button id="homepage-banner-section-request-button">
                Request For Free Sample
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="homepage-products-section-main-wrap">
        <div id="homepage-products-section-headline">
          Our <span>Products</span>
        </div>
        <div id="homepage-products-slider-main-wrap">
          <Slider ref={slider01Ref} {...slider01_settings}>
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
                <img src="./images/Home-img/metalized.png" alt="" />
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
                <img src="./images/Home-img/guzzet.png" alt="" />
              </div>
              <div className="homepage-products-slider-slides-title">
                Guzzet Fold Pouches
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div id="our-markets-section-main-wrap">
        <div id="our-markets-section-images-wrap">
          <div>
            <img src="./images/Home-img/markets.png" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/spout.png" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/markets.png" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/stretch.png" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/markets.png" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/markets01.jpeg" alt="" />
          </div>
        </div>

        <div id="our-markets-section-content-wrap">
          <div id="our-markets-section-content-headline">
            Our <span>Markets</span>
          </div>
          <div>
            For food manufacturers around the world, we provide a wide selection
            of specialised lidding films and flexible packaging solutions.{" "}
          </div>
          <div>
            We cater to all marketplaces, including those for prepared foods,
            fresh produce, confections, and snacks.
          </div>
          <a href="/markets" id="our-markets-section-button-link">
            <div id="our-markets-section-button">
              Know More
              <BsArrowRightCircle id="our-markets-section-button-icon" />
            </div>
          </a>
        </div>
      </div>

      <div id="homepage-about-section-main-wrap">
        <div id="homepage-about-section-content-wrap">
          <div id="homepage-about-section-content-headline">
            About <span>Us</span>
          </div>
          <div>
            We strongly believe in going the extra mile for our customers. Our
            close rapport with our customers have allowed us to become one of
            the market leaders with strong distribution networks across many
            parts of India.
          </div>
          <div>
            We have built strong competencies in the manufacture of flexible
            packaging products and are constantly improving and upgrading our
            production capabilities.
          </div>
          <a href="/about" id="homepage-about-section-button-link">
            <div id="homepage-about-section-button">
              Know More
              <BsArrowRightCircle id="homepage-about-section-button-icon" />
            </div>
          </a>
        </div>

        <div id="homepage-about-section-image-wrap">
          <div>
            <img src="./images/Home-img/home-about.jpeg" alt="" />
          </div>
          <div>
            <img src="./images/Home-img/home-about01.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div id="homepage-free-sample-section-wrap">
        <div id="homepage-free-sample-section-image-wrap">
          <img src="./images/Home-img/object.png" alt="" />
        </div>
        <div id="homepage-free-sample-section-content-wrap">
          <div id="homepage-free-sample-section-content-title">
            Get your free sample
          </div>
          <div id="homepage-free-sample-section-content-description">
            Share your specific needs, and our dedicated team will reach out to
            you promptly!
          </div>
          <a href="/samplekit" id="homepage-free-sample-section-button-link">
            <div id="homepage-free-sample-section-button">
              Know More
              <BsArrowRightCircle id="homepage-free-sample-section-button-icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
