import { Link } from "react-router-dom";
import "./delivery.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";

import DeliverySec1 from "./DeliverySec1/deliverysec1";
import DeliverySec2 from "./DeliverySec2/deliverysec2";
import DeliverySec3 from "./deliverySec3/deliverysec3";
import MapComponent from "./deliveryMap/deliveryMap";
import DeliveryAddress from "./deliveryForm/deliveryform";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { faPenToSquare } from "@fortawesome/free-brands-svg-icons";

function Delivery() {
  const [address, setAddress] = useState("");
  const [isAddressStored, setIsAddressStored] = useState(false);
  const [isEditClick, setIsEditClick] = useState(false);
  const [placeordervisible, seteplaceordervisible] = useState(true);
  const [toDeliverOrder, setToDeliverOrder] = useState(false);
  const [orderContent, setOrderContent] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const strAddress = localStorage.getItem("deliveryAddress");
    const storedAddress = JSON.parse(strAddress);
    if (storedAddress) {
      const addr =
        storedAddress.flatNo +
        " ," +
        storedAddress.roadNo +
        " ," +
        storedAddress.areaName +
        " ," +
        storedAddress.landmark +
        " ," +
        storedAddress.city +
        " ," +
        storedAddress.state +
        " ," +
        storedAddress.pincode;
      setAddress(addr);
      setIsAddressStored(true);

      const getOrderObject = sessionStorage.getItem("myOrder");
      if (getOrderObject) {
        const orderObj = JSON.parse(getOrderObject);
        console.log("Order list-->", orderObj);
        setToDeliverOrder(true);
        setOrderContent(orderObj);
        calculateTotal();
      }
    }
    const orderplacestatus = sessionStorage.getItem("orderPlaced");
    console.log(orderplacestatus);
    if (orderplacestatus === "false") {
      seteplaceordervisible(false);
    }
  }, [address, isEditClick]);

  function handleEditAddressButton() {
    setIsEditClick(!isEditClick);
  }

  function calculateTotal() {
    const total = Object.entries(orderContent).reduce(
      (acc, [dishName, { quantity, price }]) => {
        if (quantity > 0) {
          return acc + quantity * price;
        } else {
          return acc;
        }
      },
      0
    );
    setTotalAmount(total);
  }

  // Create a new Date object for the current date and time
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
  const year = currentDate.getFullYear();

  // Combine the day, month, and year to form the desired format
  const formattedDate = `${day}/${month}/${year}`;

  // const uuid = uuidv4();
  // const orderId = uuid;

  function handleOrderPlace() {
    seteplaceordervisible(false);
    sessionStorage.setItem("orderPlaced", "false");
    toast("Order placed Successfully!!");
  }

  function handleCancelPlace() {
    seteplaceordervisible(true);
    sessionStorage.setItem("orderPlaced", "true");
    toast("Order Cancelled!!");
  }

  return (
    <div>
      <DeliverySec1 />
      {!isEditClick && (
        <div className="order-info">
          <div className="info-header">
            <div>Name: Manish K.</div>
            <div>Order Date: {formattedDate}</div>
            <div>
              Address:{" "}
              <div>
                {address}{" "}
                {placeordervisible && (
                  <button onClick={handleEditAddressButton}>
                    Edit Address
                  </button>
                )}
              </div>
            </div>
            <div>Total Amount: ₹ {totalAmount}</div>
          </div>
          <div className="info-content">
            {toDeliverOrder ? (
              <ul>
                {Object.entries(orderContent).map(
                  ([dishName, { quantity, price }]) => {
                    //   countSum(sum + ele.price);
                    if (quantity > 0) {
                      return (
                        <li key={dishName}>
                          <div className="orderseparationStyle">
                            <div id="ordernameStyle">
                              {dishName} x {quantity}
                            </div>
                            <div className="orderseparationprice">
                              ₹ {price * quantity}
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  }
                )}
              </ul>
            ) : (
              <div id="noItemInCart">No Item in Cart</div>
            )}
          </div>
        </div>
      )}

      {placeordervisible && toDeliverOrder && !isEditClick && (
        <div id="placeOrderToDeliver">
          <button id="placeOrderButton" onClick={handleOrderPlace}>
            Place Order
          </button>
        </div>
      )}
      {!placeordervisible && (
        <div id="placeOrderToDeliver">
          <button id="OrderCancelButton" onClick={handleCancelPlace}>
            Cancel Order
          </button>
        </div>
      )}

      {(!isAddressStored || isEditClick) && (
        <div className="deliveryForm">
          <MapComponent />
          <DeliveryAddress isEdit={() => setIsEditClick(false)} />
        </div>
      )}

      <DeliverySec2 />
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
  );
}

export default Delivery;
