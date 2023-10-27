import "./Contact.css";
import { RxCross2 } from "react-icons/rx";

export const Contact=()=>{
    return (
      <div id="contact-page-main-wrapper">
        <RxCross2 id="contact-page-close-icon" />
        <div id="contact-page-form-wrap">
          <form action="">
            <div>
              <label
                htmlFor="contact-page-form-name-input"
                id="contact-page-form-name-label"
              >
                Name <span>*</span>
              </label>
            </div>
            <input type="text" id="contact-page-form-name-input" />

            <div>
              <label
                htmlFor="contact-page-form-company-name-input"
                id="contact-page-form-company-name-label"
              >
                Company Name
              </label>
            </div>
            <input type="text" id="contact-page-form-company-name-input" />

            <div id="contact-page-form-phone-email-wrap">
              <div id="contact-page-form-phone-number-wrap">
                <div>
                  <label
                    htmlFor="contact-page-form-phone-number-input"
                    id="contact-page-form-phone-number-label"
                  >
                    Phone Number <span>*</span>
                  </label>
                </div>
                <input type="number" id="contact-page-form-phone-number-input" />
              </div>

              <div id="contact-page-form-email-wrap">
                <div>
                  <label
                    htmlFor="contact-page-form-email-input"
                    id="contact-page-form-email-label"
                  >
                    Email Id
                  </label>
                </div>
                <input type="number" id="contact-page-form-email-input" />
              </div>
            </div>

            <div>
              <label htmlFor="" id="contact-page-form-requirement-textarea-label">
                Tell us your requirements
              </label>
            </div>
            <textarea
              rows="7"
              placeholder="Please include details of quantity, type of products, type of establishment, etc."
              id="contact-page-form-requirement-textarea-input"
            />

            <div id="contact-page-form-buttons-wrap">
              <button id="contact-page-form-submit-button">Submit</button>
              <button id="contact-page-form-cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
}