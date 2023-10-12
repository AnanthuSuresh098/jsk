import "./OurProducts.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

export const OurProducts=()=>{
    return (
      <div id="our-products-page-main-wrapper">
        <div id="our-products-page-headline">
          Our <span>Products</span>
        </div>
        <div id="our-products-page-description">
          Our JSK range offers packaging products which are broadly appreciated
          by our esteemed clients for their light weight, recyclable nature,
          fine finish, high stiffness and moist proof nature. These packing
          products are also available in several customizations to meet the
          specific demands of our clients.
        </div>
        <div id="our-products-page-grid-main-wrap">
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/lidrolls.png" alt="" />{" "}
            </div>
            <div>Sealing Lid Rolls</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/paper-pouch.png" alt="" />{" "}
            </div>
            <div>Paper Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/spout.png" alt="" />{" "}
            </div>
            <div>Spout Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/stretch.png" alt="" />{" "}
            </div>
            <div>Stretch Films</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/zip.png" alt="" />{" "}
            </div>
            <div>Standy Zip Lock Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/thick-laminated.png" alt="" />{" "}
            </div>
            <div>Thick Laminated Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/metalised.png" alt="" />{" "}
            </div>
            <div>Metalized Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/seal.png" alt="" />{" "}
            </div>
            <div>Three Side Seal Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/laminated.png" alt="" />{" "}
            </div>
            <div>Laminated Films for FFS Machines</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/organic.png" alt="" />{" "}
            </div>
            <div>Organic Food Packaging</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/agarbhathi.jpeg" alt="" />{" "}
            </div>
            <div>Agarbatti Pouches</div>
          </div>
          <div className="our-products-page-product-grids">
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/catering.png" alt="" />{" "}
            </div>
            <div>Catering Table Rolls</div>
          </div>
        </div>

        <div id="our-products-page-free-sample-section-wrap">
          <div id="our-products-page-free-sample-section-image-wrap">
            <img src="./images/Home-img/objects.png" alt="" />
          </div>
          <div id="our-products-page-free-sample-section-content-wrap">
            <div id="our-products-page-free-sample-section-content-title">
              Get your free sample
            </div>
            <div id="our-products-page-free-sample-section-content-description">
              Share your specific needs, and our dedicated team will reach out
              to you promptly!
            </div>
            <div id="our-products-page-free-sample-section-button">
              Know More
              <BsArrowRightCircle id="homepage-free-sample-section-button-icon" />
            </div>
          </div>
        </div>

        <div id="our-products-page-faq-section-wrap">
          <div id="our-products-page-faq-section-headline">
            Frequently Asked Questions <span>(FAQ)</span>
          </div>
          <div id="our-products-page-faq-section-content-main-wrap">
            <div className="our-products-page-faq-section-content">
              <div className="our-products-page-faq-section-content-question">
                Are you a manufactory or a trade company?
              </div>
              <span>
                <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
              </span>
            </div>
            <div className="our-products-page-faq-section-content">
              <div className="our-products-page-faq-section-content-question">
                Could I receive a complimentary sample, please?
              </div>
              <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
            </div>
            <div className="our-products-page-faq-section-content">
              <div className="our-products-page-faq-section-content-question">
                What is the expected duration for the delivery?
              </div>
              <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
            </div>
            <div className="our-products-page-faq-section-content">
              <div className="our-products-page-faq-section-content-question">
                Do you offer custom designs that meet my needs?
              </div>
              <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
            </div>
          </div>
        </div>
      </div>
    );
}