import "./About.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const About = () => {
  return (
    <div id="about-us-page-main-wrapper">
      <div id="about-us-our-story-wrap">
        <div id="about-us-our-story-content-wrap">
          <div id="about-us-page-headline">
            Established <span>since 1999</span>
          </div>
          <div id="about-us-page-sub-headline">
            Our <span>Story</span>
          </div>
          <div id="about-us-page-description-para-01">
            Our pursuit of greatness depends on our ability to evolve and grow
            constantly. We've invested in state-of-the-art machinery to boost
            manufacturing capacity and guarantee first-rate output.By investing
            in long-term partnerships with our clientele, we have risen to the
            top of our industry.{" "}
          </div>
          <div id="about-us-page-description-para-02">
            Since its founding in 1999, JSK PKG has been a forerunner in
            flexible packaging. Our modern manufacturing facility is in the
            heart of Hyderabad, near Shamshabad Airport. Our specialties include
            high-quality laminated pouches and multilayer laminates; we produce
            them for various markets.
          </div>
        </div>

        <div id="about-us-our-story-image-main-wrap">
          <div id="about-us-our-story-image01-wrap">
            <img src="./images/About-img/story01.png" alt="" />
          </div>

          <div id="about-us-our-story-image02-wrap">
            <img src="./images/About-img/story02.png" alt="" />
          </div>
        </div>
      </div>

      <div id="about-us-page-products-flyer-wrap">
        <img src="./images/About-img/flyer.png" alt="" />
      </div>

      <div id="about-us-page-bottom-section-wrap">
        <div id="about-us-page-bottom-section-image-wrap">
          <img src="./images/About-img/aboutUs.png" alt="" />
        </div>

        <div id="about-us-page-bottom-section-content-wrap">
          <span id="about-us-page-bottom-section-quote-left">
            <FaQuoteLeft />
          </span>{" "}
          <div>
            {" "}
            When you need packaging solutions, look no further than JSK PKG,
            where quality, creativity, and happy customers meet. Stand with us
            for packaging that protects, promotes, and propels your products to
            success.{" "}
          </div>
          <span id="about-us-page-bottom-section-quote-right">
            <FaQuoteRight />
          </span>
        </div>
      </div>
    </div>
  );
};
