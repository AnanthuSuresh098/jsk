import "./Contact.css";
import { RxCross2 } from "react-icons/rx";
import emailjs from "emailjs-com";
import { useState, React } from "react";
import swal from "sweetalert";

export const Contact = ({ Contactpopupclose }) => {

const [templateParams, setTemplateParams] = useState({
  from_name: "",
  company:"",
  phone:"",
  email:"",
  requirement:""
});

const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
const template_id = process.env.REACT_APP_CONTACT_TEMPLATE_ID;

   const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_id,
        template_id,
        e.target,
        user_id 
      )
      .then((result) => {
        e.target.reset();
        Contactpopupclose();
      })
      .catch((error) => {
        console.error(error.text);
      });
       swal({
         title: "Sent Successfully!",
         text: "Glad to hear from you! We will get back to you as soon possible",
         icon: "success",
       });
  };


  return (
    <div id="contact-page-main-wrap">
      <div id="contact-page-main-wrapper">
        <RxCross2 id="contact-page-close-icon" onClick={Contactpopupclose} />
        <div id="contact-page-form-wrap">
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label
                htmlFor="contact-page-form-name-input"
                id="contact-page-form-name-label"
              >
                Name <span>*</span>
              </label>
            </div>
            <input
              type="text"
              id="contact-page-form-name-input"
              name="from_name"
              onChange={(e) => onInputChange(e)}
              value={templateParams.from_name}
              required={true}
            />

            <div>
              <label
                htmlFor="contact-page-form-company-name-input"
                id="contact-page-form-company-name-label"
              >
                Company Name
              </label>
            </div>
            <input
              type="text"
              id="contact-page-form-company-name-input"
              name="company"
              onChange={(e) => onInputChange(e)}
              value={templateParams.company}
            />

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
                <input
                  type="number"
                  id="contact-page-form-phone-number-input"
                  name="phone"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.phone}
                  required={true}
                />
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
                <input
                  type="mail"
                  id="contact-page-form-email-input"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.email}
                  required={true}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                id="contact-page-form-requirement-textarea-label"
              >
                Tell us your requirements
              </label>
            </div>
            <textarea
              rows="7"
              placeholder="Please include details of quantity, type of products, type of establishment, etc."
              id="contact-page-form-requirement-textarea-input"
              name="requirement"
              onChange={(e) => onInputChange(e)}
              value={templateParams.requirement}
            />

            <div id="contact-page-form-buttons-wrap">
              <button id="contact-page-form-submit-button">Submit</button>
              <button id="contact-page-form-cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};