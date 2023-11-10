import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Product = () => {
  const location = useLocation();
  const [data, setData] = useState("");

  const productSliderRef = useRef(null);

  useEffect(() => {
    setData(location.state);
    console.log(location.state);
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var productSlider_settings = {
    className: "main-product-page-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //  variableWidth: true,
    arrows: true,
    nextArrow: <ProductSliderNextArrow />,
    prevArrow: <ProductSliderPrevArrow />,
  };

  const productSlider_NextClick = () => {
    productSliderRef.current.slickNext();
  };

  function ProductSliderNextArrow() {
    return (
      <IoIosArrowDroprightCircle
        className="product-page-slider-nextarrow"
        onClick={productSlider_NextClick}
      />
    );
  }

  const productSlider_PrevClick = () => {
    productSliderRef.current.slickPrev();
  };

  function ProductSliderPrevArrow() {
    return (
      <IoIosArrowDropleftCircle
        className="product-page-slider-prevarrow"
        onClick={productSlider_PrevClick}
      />
    );
  }

  return (
    <div id="product-main-page-container">
      <div id="product-main-page-product-image-slider-wrap">
        <Slider ref={productSliderRef} {...productSlider_settings}>
          {data.images &&
            data.images.map((e) => (
              <div className="product-main-page-slider-product-image-wrap">
                <img src={e} alt="" />
              </div>
            ))}
        </Slider>
      </div>

      <div id="product-main-page-product-content-wrap">
        <div id="product-main-page-product-content-title">{data.title}</div>
        <div id="product-main-page-product-content-description">
          {data.description}
        </div>
        <div id="product-main-page-product-content-customisation-text">
          {" "}
          <span>
            <MdVerified />
          </span>
          Customisation available
        </div>
        <a href="/samplekit" id="product-main-page-product-content-kit-button-link">
          {" "}
          <div id="product-main-page-product-content-kit-button">
            Request for free sample kit
          </div>
        </a>
        <div id="product-main-page-product-content-quote-button">
          Request a quote
        </div>
      </div>
    </div>
  );
};
