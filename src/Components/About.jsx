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
            Established since 1999, Jai shri krishna packaging industries is a
            leading manufacturer of quality laminated pouches & multilayer
            laminates in wide range & structures. Being one of the leading
            converters for flexible packaging materials we believe in the
            continuous introduction of new technologies and facilities. Coupled
            with veteran personnel equipped with professional skills and
            customer oriented services, be assured quality satisfaction in your
            flexible packaging material needs.
          </div>
          <div id="about-us-page-description-para-02">
            We have built strong competencies in the manufacture of flexible
            packaging products and are constantly improving and upgrading our
            production capabilities. We strongly believe in going the extra mile
            for our customers. Our close rapport with our customers have allowed
            us to become one of the market leaders with strong distribution
            networks across many parts of India.
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
