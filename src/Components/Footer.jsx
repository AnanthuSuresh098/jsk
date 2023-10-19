import "./Footer.css"

export const Footer=()=>{
    return (
      <>
        <div id="footer-main-wrapper">
          <div id="footer-info-section-wrap">
            <div id="footer-info-section-address-wrap">
              <div className="footer-info-section-title">Address</div>
              <div className="footer-info-section-content">
                7-3-135, Old Kurnool Road, Gagan Pahad, Kattedan, R.R. Dist.,
                Hyderabad-501 323. T.S
              </div>
            </div>

            <div id="footer-info-section-contact-wrap">
              <div className="footer-info-section-title">Contact Details</div>
              <div className="footer-info-section-content">+91 9848052119 </div>
              <div className="footer-info-section-content">+91 9381650293 </div>
            </div>

            <div id="footer-info-section-email-wrap">
              <div className="footer-info-section-title">Email Id</div>
              <div className="footer-info-section-content">
                jskpkg@rediffmail.com
              </div>
            </div>
          </div>

          <div id="footer-quick-link-copyright-section-wrap">
            <div id="footer-quick-link-section-wrap">
              <div id="footer-quick-link-section-title">Quick Links</div>
              <a href="">
                <div className="footer-quick-link-section-links">
                  About Company
                </div>
              </a>

              <a href="">
                <div className="footer-quick-link-section-links">Products</div>
              </a>

              <a href="">
                <div className="footer-quick-link-section-links">Markets</div>
              </a>

              <a href="">
                <div className="footer-quick-link-section-links">FAQ’ s</div>
              </a>
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