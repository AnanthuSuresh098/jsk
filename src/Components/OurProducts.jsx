import "./OurProducts.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OurProducts=()=>{
  const [firstQn, setFirstQn] = useState(false);
  const [secondQn, setSecondQn] = useState(false);
  const [thirdQn, setThirdQn] = useState(false);
  const [fourthQn, setFourthQn] = useState(false);

  const navigate = useNavigate();

const handleFirstQn=()=>{
  if(firstQn===false){setFirstQn(true)}
  else{
    setFirstQn(false);
  }
}

const handleSecondQn = () => {
  if (secondQn === false) {
    setSecondQn(true);
  } else {
    setSecondQn(false);
  }
};

const handleThirdQn = () => {
  if (thirdQn === false) {
    setThirdQn(true);
  } else {
    setThirdQn(false);
  }
};

const handleFourthQn = () => {
  if (fourthQn === false) {
    setFourthQn(true);
  } else {
    setFourthQn(false);
  }
};

const product01 = () => {
  navigate("/product", {
    state: {
      id: 1,
      title: "Sealing Lid Rolls",
      images: [
        "./images/Products/lidrolls.png",
        "./images/Products/lidrolls02.jpg",
      ],
      description:
        "Our Easy Peel films are widely used on all sorts of plastic containers and cupsRoll Form Laminates for FFS Machines offered comprises printed and laminated films that are made available in roll form which can be used for FFS machines used for packing in Cosmetic, Pharmaceutical, Food, Agro and other industry sectors. These are made available in BOPP material and find extensive use in food packaging applications. The packaging is also suitable to pack different kind of foods like cookies, candy, dried fruit and other products.",
    },
  });
};

const product02 = () => {
  navigate("/product", {
    state: {
      id: 2,
      title: "Paper Pouches",
      images: [
        "./images/Products/paper-pouch.png",
        "./images/Products/paper02.jpg",
        "./images/Products/paper03.jpg"
      ],
      description:
        "We are able to supply a broad array of Paper Pouch. It crafted with a paper to ensure a great strength. It has a thick coating and gives a better result than other normal paper pouch. Therefore, provided pouch is used for packing various types of food items, sweets, stationery items and others. Paper Pouch is biodegradable and doesn’t produce any harmful toxic while using on regular basis. It can easily hold and carry in a light weight manner.",
    },
  });
};

const product03 = () => {
  navigate("/product", {
    state: {
      id: 3,
      title: "Spout Pouches",
      images: [
        "./images/Products/spout.png",
        "./images/Products/spout02.jpg",
        "./images/Products/spout03.jpg",
      ],
      description:
        "The spout allows for easy dispensing and pouring, reducing the risk of spills and messes. The pouch itself is also lightweight and easy to handle, making it an ideal option for detergents,lubricants,sauces,oils and various other liquids like juices purees,beverages,etc… Additionally, because the pouches are flexible and lightweight, they require less energy to transport and distribute, resulting in a lower carbon footprint.",
    },
  });
};

const product04 = () => {
  navigate("/product", {
    state: {
      id: 4,
      title: "Stretch Films",
      images: [
        "./images/Products/stretch.png",
        "./images/Products/stretch02.webp",
        "./images/Products/stretch03.webp",
      ],
      description:
        "Stretch film wraps products on pallets and secures them to each other and the pallet. Helping to reduce product loss, discourage load tampering, and reduce worker injury. In further detail, our blog post explains what stretch film is used for. There are a variety of widths, thicknesses, and types of stretch film.",
    },
  });
};

const product05 = () => {
  navigate("/product", {
    state: {
      id: 5,
      title: "Standy Zip Lock pouches",
      images: [
        "./images/Products/zip.png",
        "./images/Products/zip02.jpg",
        "./images/Products/zip03.webp",
      ],
      description:
        "A standup pouch is a small, flexible packaging bag that can stand upright on its own, typically made from materials such as plastic, paper, or foil.The pouch is commonly used for packaging products such as snacks, pet food, and other small items. They provide a fresh and natural look that can enhance the product's visual appeal and communicate a sense of hygiene responsibility to consumers. The standup feature allows the pouch to be displayed upright on shelves or countertops, making it a popular choice for retailers and consumers alike. Some standup pouches may be made from eco-friendly materials or have other sustainable features, making them an attractive option for environmentally-conscious consumers.",
    },
  });
};

const product06 = () => {
  navigate("/product", {
    state: {
      id: 6,
      title: "Thick Laminated Pouches",
      images: [
        "./images/Products/thick-laminated.png",
        "./images/Products/laminated02.webp",
        "./images/Products/laminated03.jpeg",
      ],
      description:
        "We are an eminent entity engaged in offering an extensive range of Aluminum Foil Laminated Printed Pouches which can be availed in multi-colored printings. These printed pouches are manufactured by our workforce using high-grade material and advanced techniques in accordance with the quality standards. Also, our printed pouches undergo various tests by quality controllers to assure its flawlessness.",
    },
  });
};

const product07 = () => {
  navigate("/product", {
    state: {
      id: 7,
      title: "Metalised Pouches / Metalised Center Sealed Pouches",
      images: [
        "./images/Products/metalised.png",
        "./images/Products/metalised02.jpg",
        "./images/Products/metalised03.jpg",
      ],
      description:
        "These not only provides Excellent multi-layer protection but also convenience and versatility. These pouches are, whether you're packaging tea, herbs, cereals, coffee,powders, seasoning, cookies, groceries, nut fruits, pickles, or candies, our pouches are the perfect choice for you.",
    },
  });
};

const product08 = () => {
  navigate("/product", {
    state: {
      id: 8,
      title: "Three Side seal Pouches",
      images: [
        "./images/Products/seal.png",
        "./images/Products/seal02.jpg",
        "./images/Products/seal03.jpg",
      ],
      description:
        "These not only provides Excellent multi-layer protection but also convenience and versatility. These pouches are, whether you're packaging tea, herbs, cereals, coffee,powders, seasoning, cookies, groceries, nut fruits, pickles, or candies, our pouches are the perfect choice for you.",
    },
  });
};

const product09 = () => {
  navigate("/product", {
    state: {
      id: 9,
      title: "Laminated Films For FFS Machines",
      images: [
        "./images/Products/laminated.png",
        "./images/Products/ffs-laminated02.jpg",
      ],
      description:
        "We supply in roll form as per FFS machine requirements & specifications.Roll Form Laminates For FFS Machines Roll Form Laminates for FFS Machines offered comprises printed and laminated films that are made available in roll form which can be used for FFS machines used for packing in Cosmetic, Pharmaceutical, Food, Agro and other industry sectors. These are made available in BOPP material and find extensive use in food packaging applications. The packaging is also suitable to pack different kind of foods like cookies, candy, dried fruit and other products.",
    },
  });
};

const product10 = () => {
  navigate("/product", {
    state: {
      id: 10,
      title: "organic Food Packaging",
      images: [
        "./images/Products/organic.png",
        "./images/Products/organic02.jpg",
        "./images/Products/organic03.webp",
      ],
      description:
        "Organic packaging is made from natural, plant-based materials, often derived from organic waste and renewable resources. These materials used to make organic packaging are biodegradable or compostable and can degrade naturally into non-toxic compounds, often improving soil quality",
    },
  });
};


const product12 = () => {
  navigate("/product", {
    state: {
      id: 12,
      title: "Catering Table Roll",
      images: [
        "./images/Products/catering.png",
        "./images/Products/catering02.jpg",
      ],
      description:
        "Table rolls mainly used for Catering & Hotel ware to cover the buffet dinner table.The rolls are manufactured from fine grade raw material using modern techniques in adherence to predefined industry norms. Highly demanded in the market, these table rolls are available in various colors and sizes as per the detailed requirements of our valuable clients.",
    },
  });
};
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
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product01();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/lidrolls.png" alt="" />{" "}
            </div>
            <div>Sealing Lid Rolls</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product02();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/paper-pouch.png" alt="" />{" "}
            </div>
            <div>Paper Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product03();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/spout.png" alt="" />{" "}
            </div>
            <div>Spout Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product04();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/stretch.png" alt="" />{" "}
            </div>
            <div>Stretch Films</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product05();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/zip.png" alt="" />{" "}
            </div>
            <div>Standy Zip Lock Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product06();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/thick-laminated.png" alt="" />{" "}
            </div>
            <div>Thick Laminated Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product07();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/metalised.png" alt="" />{" "}
            </div>
            <div>Metalized Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product08();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/seal.png" alt="" />{" "}
            </div>
            <div>Three Side Seal Pouches</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product09();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/laminated.png" alt="" />{" "}
            </div>
            <div>Laminated Films for FFS Machines</div>
          </div>
          <div
            className="our-products-page-product-grids"
            onClick={() => {
              product10();
            }}
          >
            <div className="our-products-page-product-grids-image-wrap">
              {" "}
              <img src="./images/Products/organic.png" alt="" />{" "}
            </div>
            <div>Organic Food Packaging</div>
          </div>
          <div className="our-products-page-product-grids" onClick={() => {
              product12();
            }}>
            <div className="our-products-page-product-grids-image-wrap">
              <img src="./images/Products/catering.png" alt="" />{" "}
            </div>
            <div>Catering Table Rolls</div>
          </div>
        </div>

        <div id="our-products-page-free-sample-section-wrap">
          <div id="our-products-page-free-sample-section-image-wrap">
            <img src="./images/Home-img/object.png" alt="" />
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
              <div
                className="our-products-page-faq-section-content-question"
                onClick={handleFirstQn}
              >
                Are you a manufactory or a trade company?
                <span>
                  {!firstQn && (
                    <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                  {firstQn && (
                    <BsArrowUpCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                </span>
              </div>
              {firstQn && (
                <div className="our-products-page-faq-section-content-answer">
                  We are a manufacturer with 24 years of experience in plastic
                  laminated packaging. We can provide you with customised
                  service and an affordable factory price.
                </div>
              )}
            </div>
            <div className="our-products-page-faq-section-content">
              <div
                className="our-products-page-faq-section-content-question"
                onClick={handleSecondQn}
              >
                Could I receive a complimentary sample, please?
                <span>
                  {!secondQn && (
                    <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                  {secondQn && (
                    <BsArrowUpCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                </span>
              </div>
              {secondQn && (
                <div className="our-products-page-faq-section-content-answer">
                  Yes, of course . we can offer you the free sample set.
                </div>
              )}
            </div>
            <div className="our-products-page-faq-section-content">
              <div
                className="our-products-page-faq-section-content-question"
                onClick={handleThirdQn}
              >
                What is the expected duration for the delivery?
                <span>
                  {!thirdQn && (
                    <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                  {thirdQn && (
                    <BsArrowUpCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                </span>
              </div>
              {thirdQn && (
                <div className="our-products-page-faq-section-content-answer">
                  It depends on the specific quantity. Generally speaking, the
                  lead time is within 15-20 days.
                </div>
              )}
            </div>
            <div className="our-products-page-faq-section-content">
              <div
                className="our-products-page-faq-section-content-question"
                onClick={handleFourthQn}
              >
                Do you offer custom designs that meet my needs?
                <span>
                  {!fourthQn && (
                    <BsArrowDownCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                  {fourthQn && (
                    <BsArrowUpCircle className="our-products-page-faq-section-content-arrow-up-icon" />
                  )}
                </span>
              </div>
              {fourthQn && (
                <div className="our-products-page-faq-section-content-answer">
                  Yes, we can. Please provide the artwork about the bags.then we
                  can source and design your bags
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}