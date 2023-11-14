import "./Footer.css";
import { useNavigate } from "react-router-dom";

export const Footer=()=>{
   const navigate = useNavigate();
 
 const Scrollfunction=()=>{
window.scrollTo({ top: 2100, left: 0, behavior: "smooth" });
 }


   const handleNavigate = () => {
    // Navigate to the desired page
    navigate('/ourproducts');
    Scrollfunction();
  };

    return (
      <>
        <div id="footer-main-wrapper">
          <div id="footer-info-section-wrap">
            <div id="footer-info-section-address-wrap">
              <div className="footer-info-section-title">Address</div>
              <div className="footer-info-section-content">
                7-3-135, Old Kurnool Road, Gagan Pahad, Kattedan, R.R. Dist.,
                Hyderabad-500077. Telangana , India
              </div>
            </div>

            <div id="footer-info-section-contact-wrap">
              <div className="footer-info-section-title">Contact Details</div>
              <a href="tel:+919848052119">
                {" "}
                <div className="footer-info-section-content">
                  +91 9848052119{" "}
                </div>
              </a>
              <a href="tel:+919381650293">
                <div className="footer-info-section-content">
                  +91 9381650293{" "}
                </div>
              </a>
            </div>

            <div id="footer-info-section-email-wrap">
              <div className="footer-info-section-title">Email Id</div>
              <a href="mailto:info@jskpkg.com">
                {" "}
                <div className="footer-info-section-content">
                  info@jskpkg.com
                </div>{" "}
              </a>
            </div>
          </div>

          <div id="footer-quick-link-copyright-section-wrap">
            <div id="footer-quick-link-section-wrap">
              <div id="footer-quick-link-section-title">Quick Links</div>
              <a href="/about">
                <div className="footer-quick-link-section-links">
                  About Company
                </div>
              </a>

              <a href="/ourproducts">
                <div className="footer-quick-link-section-links">Products</div>
              </a>

              <a href="/markets">
                <div className="footer-quick-link-section-links">Markets</div>
              </a>

              {/* <a href=""> */}
              <div
                className="footer-quick-link-section-links"
                onClick={handleNavigate}
              >
                FAQ’ s
              </div>
              {/* </a> */}
            </div>

            <div id="footer-copyright-section">
              © JSK_2023 - Website by Rayformula
            </div>
          </div>
        </div>
        <div id="footer-copyright-section-mobile-view">
          © JSK_2023 - Website by Rayformula
        </div>
      </>
    );
}