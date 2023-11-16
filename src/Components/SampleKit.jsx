import "./SampleKit.css";
import { useState } from "react";
import { Contact } from "./Contact.jsx";
import emailjs from "emailjs-com";
import swal from "sweetalert";

export const SampleKit= () => {

 const [contact, setContact] = useState(false);

 const [templateParams, setTemplateParams] = useState({
   from_name: "",
   company: "",
   phone: "",
   email: "",
   requirement: "",
   address:"",
   city:"",
   state:"",
   postcode:"",
   country:""
 });


 const service_id =process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const user_id =process.env.REACT_APP_EMAILJS_USER_ID;
   const template_id =process.env.REACT_APP_SAMPLE_KIT_TEMPLATE_ID;


 const onInputChange = (e) => {
   setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
 };

 const onSubmit = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(service_id,template_id,e.target,user_id)
     .then((result) => {
       e.target.reset();
     })
     .catch((error) => {
       console.error(error.text);
     });

     swal({
       title: "Sent Successfully!",
       text: "Glad to hear from you! We will get back to you as soon possible",
       icon: "success",
     });
     setTemplateParams({
       from_name: "",
       company: "",
       phone: "",
       email: "",
       requirement: "",
       address: "",
       city: "",
       state: "",
       postcode: "",
       country: "",
     });
   
 };



  const contactPopup=()=>{
setContact(true);
}

const Contactpopupclose = () => {
  setContact(false);
};

const Scrollfunction = () => {
  window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
};

const handleNavigate = () => {
  Scrollfunction();
};

  return (
    <div id="sample-kit-page-main-wrapper">
      {contact === true && <Contact Contactpopupclose={Contactpopupclose} />}
      <div id="sample-kit-banner-section-wrap">
        <div className="sample-kit-banner-section-image-wrap">
          <img
            src="./images/SampleKit/samplekit.png"
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
            <button
              id="sample-kit-banner-section-contact-button"
              onClick={contactPopup}
            >
              Contact Us
            </button>
            <button
              id="sample-kit-banner-section-request-button"
              onClick={handleNavigate}
            >
              Request For Free Sample
            </button>
          </div>
        </div>
      </div>

      <div id="sample-kit-form-section-wrap">
        <div id="sample-kit-form-section-title">Free Sample Kit</div>
        <div id="sample-kit-form-section-description">
          Share your specific needs, and our dedicated team will reach out to
          you promptly! Please fill up below to receive samples
        </div>
        <div id="sample-kit-form-wrap">
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label
                htmlFor="sample-kit-form-name-input"
                id="sample-kit-form-name-label"
              >
                Name <span>*</span>
              </label>
            </div>
            <input
              type="text"
              id="sample-kit-form-name-input"
              name="from_name"
              onChange={(e) => onInputChange(e)}
              value={templateParams.from_name}
              required={true}
            />

            <div>
              <label
                htmlFor="sample-kit-form-company-name-input"
                id="sample-kit-form-company-name-label"
              >
                Company Name
              </label>
            </div>
            <input
              type="text"
              id="sample-kit-form-company-name-input"
              name="company"
              onChange={(e) => onInputChange(e)}
              value={templateParams.company}
            />

            <div id="sample-kit-form-phone-email-wrap">
              <div id="sample-kit-form-phone-number-wrap">
                <div>
                  <label
                    htmlFor="sample-kit-form-phone-number-input"
                    id="sample-kit-form-phone-number-label"
                  >
                    Phone Number <span>*</span>
                  </label>
                </div>
                <input
                  type="number"
                  id="sample-kit-form-phone-number-input"
                  name="phone"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.phone}
                  required={true}
                />
              </div>

              <div id="sample-kit-form-email-wrap">
                <div>
                  <label
                    htmlFor="sample-kit-form-email-input"
                    id="sample-kit-form-email-label"
                  >
                    Email Id
                  </label>
                </div>
                <input
                  type="mail"
                  id="sample-kit-form-email-input"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.email}
                />
              </div>
            </div>

            <div>
              <label htmlFor="" id="sample-kit-form-requirement-textarea-label">
                Tell us your requirements
              </label>
            </div>
            <textarea
              rows="7"
              placeholder="Please include details of quantity, type of products, type of establishment, etc."
              id="sample-kit-form-requirement-textarea-input"
              name="requirement"
              onChange={(e) => onInputChange(e)}
              value={templateParams.requirement}
            />

            <div>
              <label htmlFor="" id="sample-kit-form-address-label">
                Address to send samples <span>*</span>
              </label>
            </div>
            <input
              type="text"
              id="sample-kit-form-address-input"
              name="address"
              onChange={(e) => onInputChange(e)}
              value={templateParams.address}
              required={true}
            />

            <div id="sample-kit-form-city-state-wrap">
              <div id="sample-kit-form-city-wrap">
                <div>
                  <label htmlFor="" id="sample-kit-form-city-label">
                    City <span>*</span>
                  </label>
                </div>
                <input
                  type="text"
                  id="sample-kit-form-city-input"
                  name="city"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.city}
                  required={true}
                />
              </div>

              <div id="sample-kit-form-state-wrap">
                <div>
                  <label
                    htmlFor="sample-kit-form-state-input"
                    id="sample-kit-form-state-label"
                  >
                    State <span>*</span>
                  </label>
                </div>
                <input
                  type="text"
                  id="sample-kit-form-state-input"
                  name="state"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.state}
                  required={true}
                />
              </div>
            </div>

            <div id="sample-kit-form-postcode-country-wrap">
              <div id="sample-kit-form-postcode-wrap">
                <div>
                  <label htmlFor="" id="sample-kit-form-postcode-label">
                    Postcode <span>*</span>
                  </label>
                </div>
                <input
                  type="text"
                  id="sample-kit-form-postcode-input"
                  name="postcode"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.postcode}
                  required={true}
                />
              </div>

              <div id="sample-kit-form-country-wrap">
                <div>
                  <label
                    htmlFor="sample-kit-form-country-input"
                    id="sample-kit-form-country-label"
                  >
                    Country <span>*</span>
                  </label>
                </div>
                <input
                  type="text"
                  id="sample-kit-form-country-input"
                  name="country"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.country}
                  required={true}
                />
              </div>
            </div>

            <div id="sample-kit-form-buttons-wrap">
              <button id="sample-kit-form-submit-button">Submit</button>
              <button id="sample-kit-form-cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};