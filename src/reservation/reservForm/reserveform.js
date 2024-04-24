import "./reserveform.css";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../baseURL";
import toast, { Toaster } from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faChampagneGlasses,
  faBurger,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";

function ReserveNow() {
  const [formData, setFormData] = useState({
    fullName: "",
    guestNo: "",
    bookingtype: "",
    selectedDate: "",
    timeslot: "",
  });

  const isFormFilled = () => {
    for (const field in formData) {
      if (!formData[field].trim()) {
        return false;
      }
    }
    return true;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if (isFormFilled()) {
      await axios
        .post(baseURL + "/reservation", formData)
        .then((result) => {
          console.log(result.data.message);
          toast(result.data.message);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    } else {
      alert("Fill all the fields first");
      toast("Fill all the fields first");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  // Function to get today's date in the format 'YYYY-MM-DD'
  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="resrvform_outer">
      <div className="resrvform_inner">
        <div id="resrvHeading">
          <strong>Reserve Now</strong>
        </div>
        <div id="resrvinnerForm">
          <div id="resrvIconsOuter">
            <div>
              <FontAwesomeIcon
                icon={faUtensils}
                style={{ fontSize: "1.5em" }}
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faBurger} style={{ fontSize: "1.5em" }} />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ fontSize: "1.5em" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChampagneGlasses}
                style={{ fontSize: "1.5em" }}
              />
            </div>
          </div>
          <div className="resvinputform_outer">
            <form onSubmit={handleSubmit}>
              <div id="resvinputform_inner">
                <div id="resvinputformdiv1">
                  <div>
                    <input
                      className="resrvinputformat resvpushBottom"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="resrvinputformat"
                      type="number"
                      placeholder="No of Guest"
                      min="1"
                      name="guestNo"
                      value={formData.guestNo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div id="resvformbookingtype">
                    <select
                      className="resvbookingtype"
                      name="bookingtype"
                      value={formData.bookingtype}
                      onChange={handleChange}
                    >
                      <option value="Booking Type">Booking Type</option>
                      <option value="Dining">Dining</option>
                      <option value="Buffet">Buffet</option>
                      <option value="Private Dining">Private Dining</option>
                      <option value="Outdoor Seating">Outdoor Seating</option>
                      <option value="Event or Party">Event or Party</option>
                      <option value="Happy Hour">Happy Hour</option>
                      <option value="Chef's Table">Chef's Table</option>
                    </select>
                  </div>
                  <div id="resrvformButtonalignment">
                    <button id="resrvformButtonStyle" type="submit">
                      <strong>Reserve!</strong>
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
                <div>
                  <div>
                    <input
                      className="resrvinputformat resvpushBottom"
                      type="date"
                      name="selectedDate"
                      value={new Date(formData.selectedDate)}
                      placeholder="Date"
                      onChange={handleChange}
                      min={getToday()}
                    />
                  </div>
                  <div>
                    <select
                      className="resrvinputformat"
                      id="time"
                      name="timeslot"
                      value={formData.timeslot}
                      onChange={handleChange}
                    >
                      <option value="Book Slot">Book Slot</option>
                      <option value="8am-9am">8:00 am - 9:00 am</option>
                      <option value="9am-10am">9:00 am - 10:00 am</option>
                      <option value="10am-11am">10:00 am - 11:00 am</option>
                      <option value="11am-12pm">11:00 am - 12:00 pm</option>
                      <option value="12pm-13pm">12:00 pm - 1:00 pm </option>
                      <option value="13pm-14pm">1:00 pm - 2:00 pm</option>
                      <option value="14pm-15pm">2:00 pm - 3:00 pm</option>
                      <option value="15pm-16pm">3:00 pm - 4:00 pm</option>
                      <option value="16pm-17pm">4:00 pm - 5:00 pm</option>
                      <option value="17pm-18pm">5:00 pm - 6:00 pm</option>
                      <option value="18pm-19pm">6:00 pm - 7:00 pm</option>
                      <option value="19pm-20pm">7:00 pm - 8:00 pm</option>
                      <option value="20pm-21pm">8:00 pm - 9:00 pm</option>
                      <option value="21pm-22pm">9:00 pm - 10:00 pm</option>
                      <option value="22pm-23pm">10:00 pm - 11:00 pm</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="resrvform_thankyou">
          <em>
            <strong>Thank you for choosing us!</strong>
          </em>
        </div>
      </div>
    </div>
  );
}

export default ReserveNow;
