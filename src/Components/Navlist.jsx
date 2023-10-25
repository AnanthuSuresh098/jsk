import "./Navlist.css";
import { RxCross2 } from "react-icons/rx";

export const NavList = ({ listClose }) => {
  return (
    <div id="mobile-view-navlist-main-wrap">
      <RxCross2 id="mobile-view-navlist-close-icon" onClick={listClose} />

      <div id="mobile-view-navlist-links-wrap">
        <a href="/ourproducts">
          <div className="mobile-view-navlist-links">Products</div>
        </a>
        <a href="/markets">
          <div className="mobile-view-navlist-links">Markets</div>
        </a>
        <a href="/about">
          <div className="mobile-view-navlist-links">About Us</div>
        </a>
        <a href="/">
          <div className="mobile-view-navlist-links">Free Sample Kits</div>
        </a>
      </div>

      <div id="mobile-view-navlist-divider"></div>

      <div id="mobile-view-navlist-contact-main-wrap">
        <div id="mobile-view-navlist-contact-address-wrap">
          <div className="mobile-view-navlist-contact-titles">Address : </div>
          <div className="mobile-view-navlist-contact-content">
            7-3-135, Old Kurnool Road, Gagan Pahad, Kattedan, R.R. Dist.,
            Hyderabad-501 323. T.S
          </div>
        </div>

        <div id="mobile-view-navlist-contact-phone-num-wrap">
          <div className="mobile-view-navlist-contact-titles">
            Contact Details
          </div>
          <div className="mobile-view-navlist-contact-content">
            +91 9848052119{" "}
          </div>
          <div className="mobile-view-navlist-contact-content">
            +91 9381650293
          </div>
        </div>

        <div id="mobile-view-navlist-contact-email-wrap">
          <div className="mobile-view-navlist-contact-titles">Email ID</div>
          <div className="mobile-view-navlist-contact-content">
            jskpkg@rediffmail.com
          </div>
        </div>
      </div>
    </div>
  );
};