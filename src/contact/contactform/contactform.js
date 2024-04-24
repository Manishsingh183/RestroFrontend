import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./contactform.css";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import baseURL from "../../baseURL";

function ContactForm() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const clearForm = () => {
    setContactData({
      name: "",
      email: "",
      comment: "",
    });
  };

  function handleSubmit(event) {
    // console.log(contactData);
    event.preventDefault();
    axios
      .post(baseURL + "/contactUs", contactData)
      .then((result) => {
        console.log(result.data.message);
        toast("Your details has been sent");
        clearForm();
        // alert("Your details has been sent!");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast("Error encountered");
      });
    // event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setContactData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  return (
    <div className="contactform_outer">
      <h2>Contact Us</h2>
      <div className="contact_form_outer">
        <form onSubmit={handleSubmit}>
          <div className="contactform_first">
            <div>
              <input
                className="contactform_1textstyle"
                type="text"
                placeholder="Name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="contactform_1textstyle"
                type="email"
                placeholder="User Email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div id="submit_align">
              <textarea
                name="comment"
                className="contactform_1textareastyle"
                type="text"
                placeholder="Let us know your thoughts"
                rows="6"
                value={contactData.comment}
                onChange={handleChange}
                required
              />
              <button id="contact_submitButton" type="submit">
                Submit
              </button>
              <Toaster
                toastOptions={{
                  success: {
                    style: {
                      background: "green",
                    },
                    position: "top-right",
                  },
                  error: {
                    style: {
                      background: "red",
                    },
                    position: "top-right",
                  },
                }}
              />
            </div>
          </div>
        </form>
        <div className="contactform_second">
          <div className="contact_icon">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.5em" }} />
          </div>
          <div className="contact_icon">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5em" }} />
          </div>
          <div className="contact_icon">
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.5em" }} />
          </div>
          <div className="contact_icon">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ fontSize: "1.5em" }}
            />
          </div>
          <div className="contact_icon">
            <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "1.5em" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
