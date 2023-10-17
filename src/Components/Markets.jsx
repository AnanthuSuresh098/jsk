import "./Markets.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const Markets=()=>{

     const marketSliderRef = useRef(null);

  var marketSlider_settings = {
    className: "markets-page-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: true,
    nextArrow: <MarketSliderNextArrow />,
    prevArrow: <MarketSliderPrevArrow />,
  };

    const marketSlider_NextClick = () => {
      marketSliderRef.current.slickNext();
    };

    function MarketSliderNextArrow() {
      return (
        <IoIosArrowDroprightCircle
          className="markets-page-slider-nextarrow"
          onClick={marketSlider_NextClick}
        />
      );
    }

    const marketSlider_PrevClick = () => {
      marketSliderRef.current.slickPrev();
    };

    function MarketSliderPrevArrow() {
      return (
        <IoIosArrowDropleftCircle
          className="markets-page-slider-prevarrow"
          onClick={marketSlider_PrevClick}
        />
      );
    }



    return (
      <div id="markets-page-main-wrapper">
        <div id="markets-page-headline">
          Our <span>Markets</span>
        </div>
        <div className="markets-page-description">
          JSK Packagings is pleased to serve various customers in various
          business sectors. From industrial products that need rigorous
          protection during transit to fast-moving consumer goods that need
          convenient shelf-stable packaging, we've got you covered.
        </div>
        <div className="markets-page-description">
          Our flexible packaging is used in the food industry to maintain
          freshness and quality in anything from pet food to home cleaners to
          coffee.
        </div>
        <div className="markets-page-description">
          JSK Packagings flexible and high-quality packaging solutions are the
          go-to option in several industries because they guarantee quality and
          innovation with every shipment
        </div>

        <div id="markets-page-slider-main-wrap">
          <Slider ref={marketSliderRef} {...marketSlider_settings}>
            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets01.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Dry Fruit Retailers
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets02.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Frozen Foods
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets03.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Bakery Products
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets04.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Sweet Shop Chains
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets05.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Premix Packaging
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets06.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Sea Food Packaging
              </div>
            </div>

            <div className="markets-page-slider-slides">
              <div className="markets-page-slider-image-wrap">
                <img src="./images/Markets-img/markets07.png" alt="" />
              </div>
              <div className="markets-page-slider-slides-title">
                Grocery Packaging
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
}