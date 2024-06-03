import "./deliveryform.css";
import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../baseURL";
import toast, { Toaster } from "react-hot-toast";

function DeliveryAddress({ isEdit }) {
  const [formData, setFormData] = useState({
    flatNo: "",
    roadNo: "",
    areaName: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Load data from localStorage or sessionStorage if available
  useEffect(() => {
    const storedData = localStorage.getItem("deliveryAddress");
    const sessionData = sessionStorage.getItem("deliveryAddress");

    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else if (sessionData) {
      setFormData(JSON.parse(sessionData));
    }
  }, []);

  const isFormFilled = () => {
    for (const field in formData) {
      if (!formData[field].trim()) {
        return false;
      }
    }
    return true;
  };

  async function handleSubmit(event) {
    isEdit();
    event.preventDefault();
    console.log(formData);
    // Store in localStorage
    localStorage.setItem("deliveryAddress", JSON.stringify(formData));

    // Store in sessionStorage
    sessionStorage.setItem("deliveryAddress", JSON.stringify(formData));
    // if (isFormFilled()) {
    //   await axios
    //     .post(baseURL + "/deliveryaddress", formData)
    //     .then((result) => {
    //       console.log(result.data.message);
    //       toast(result.data.message);
    //     })
    //     .catch((error) => {
    //       console.error("Error: ", error);
    //     });
    // } else {
    //   toast("Fill all the fields first");
    // }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);
  }

  function handleClear() {
    setFormData({
      flatNo: "",
      roadNo: "",
      areaName: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
    });

    // Clear localStorage and sessionStorage
    localStorage.removeItem("deliveryAddress");
    sessionStorage.removeItem("deliveryAddress");
  }

  return (
    <div className="deliveryform_outer">
      <div className="deliveryform_inner">
        <div className="deliveryform_heading">
          <strong>Delivery Address</strong>
        </div>
        <form className="deliveryform_form" onSubmit={handleSubmit}>
          <input
            className="deliveryform_input"
            type="text"
            placeholder="Flat No/House No"
            name="flatNo"
            value={formData.flatNo}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="text"
            placeholder="Road No/Name"
            name="roadNo"
            value={formData.roadNo}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="text"
            placeholder="Area Name"
            name="areaName"
            value={formData.areaName}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="text"
            placeholder="Landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            className="deliveryform_input"
            type="number"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          <div className="deliveryform_buttons">
            <button className="deliveryform_button" type="submit">
              <strong>Submit</strong>
            </button>
            <button
              className="deliveryform_button deliveryform_clear_button"
              type="button"
              onClick={handleClear}
            >
              <strong>Clear</strong>
            </button>
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
        </form>
      </div>
    </div>
  );
}

export default DeliveryAddress;
