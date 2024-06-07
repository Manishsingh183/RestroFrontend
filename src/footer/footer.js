import "./footer.css";

import HotelLogo from "../Image/HotelLogo.png";
import { useState } from "react";
import axios from "axios";
import baseURL from "../baseURL";
import toast, { Toaster } from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    console.log(email);
    e.preventDefault();
    await axios
      .post(baseURL + "/mailing", email)
      .then((result) => {
        // console.log(result.data.message);
        toast("You have been successfully registered.");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast("Error in connection!!");
      });
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="Footer_outer">
      <div className="Footer_inner">
        {/* ------------- 1st block-------------------------------- */}
        <div className="footerfirstbox box">
          <h2>Contact</h2>
          <h5>5 ,block4, Hamington Street, Mumbai </h5>
          <p className="p_forFooter">
            <span className="footerColoredSpan">Call -</span> +91 - 7654567654
          </p>
          <p className="footerColoredSpan">contactLammarestro@gmail.com</p>
        </div>
        {/* ------------- 2nd block-------------------------------- */}
        <div className="box">
          <div className="footersecondbox">
            <img
              className="footercompanyLogo"
              src={HotelLogo}
              alt="HotelLogo"
            />
            <p>
              Join our mailing list for more updates, get latest news, offers
              and events details.
            </p>
          </div>
          <div className="SubscribeForm">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your contact email"
                className="footerSubmitText"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <button type="submit" className="footerSubmitButton">
                Subscribe
              </button>
            </form>
          </div>
        </div>
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
        {/* ------------- 3rd block-------------------------------- */}
        <div className="footerthirdbox box">
          <h4>Working Hours</h4>
          <p className="p_forFooter">
            <span className="footerColoredSpan">Mon-Fri: </span>10:00 am to 9:00
            pm
          </p>
          <p className="p_forFooter">
            <span className="footerColoredSpan">Sat: </span>8:00 am to 11:00 pm
          </p>
          <p className="p_forFooter">
            <span className="footerColoredSpan">Sun: </span>8:00 am to 11:00 pm
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
