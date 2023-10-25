import "./SampleKit.css"

export const SampleKit= () => {
  return (
    <div id="sample-kit-page-main-wrapper">
      <div id="sample-kit-banner-section-wrap">
        <div className="sample-kit-banner-section-image-wrap">
          <img
            src="./images/SampleKit/recycle.png"
            alt="banner"
            id="sample-kit-banner-section-image"
          />
        </div>

        <div id="sample-kit-banner-section-content-wrap">
          <div id="sample-kit-banner-section-content-title">
            Established since 1999
          </div>
          <div id="sample-kit-banner-section-content-desc">
            We manufacture a wide range of products for various sectors
          </div>
          <div id="sample-kit-banner-section-button-wrap">
            <button id="sample-kit-banner-section-contact-button">
              Contact Us
            </button>
            <button id="sample-kit-banner-section-request-button">
              Request For Free Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};