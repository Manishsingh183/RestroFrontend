import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./yourorder.css";

function Orders({ selectedItems }) {
  useEffect(() => {
    console.log("Selected Items:");
    Object.entries(selectedItems).forEach(([dishName, { quantity, price }]) => {
      console.log(`${dishName}: Quantity - ${quantity}, Price - ₹${price}`);
    });
  }, [selectedItems]);

  return (
    <div>
      <div className="orders_inner">
        <h3>Your Order!</h3>
        <div className="ordersList">
          <ul>
            {Object.entries(selectedItems).map(
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
          <hr className="orderhrline"></hr>
          <div className="orderseparationStyle">
            <div className="orderseparationtotal">Total</div>
            <div className="orderseparationprice">
              <strong>
                {Object.entries(selectedItems).reduce(
                  (acc, [dishName, { quantity, price }]) => {
                    if (quantity > 0) {
                      return acc + quantity * price;
                    } else {
                      return acc;
                    }
                  },
                  0
                )}
              </strong>
            </div>
          </div>
        </div>

        {/* Order Now and Deliver now */}
        <div id="OrderdeliverStyle_outer">
          <button className="orderdeliveryButtons" id="yourOrderNowButton">
            Order Now
          </button>
          <Link to="/delivery">
            <button
              className="orderdeliveryButtons"
              id="yourOrderDeliverNowButton"
            >
              Deliver Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
