import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SubmittedOrder.css";

function SubmittedOrder(finalItems) {
  // console.log("Submitted Order list --->", finalItems.finalItems);
  if (!finalItems) {
    return <div>No items submitted</div>;
  }

  return (
    <div>
      <div className="orders_inner">
        <h3>Your Order!</h3>
        <div className="ordersList">
          <ul>
            {Object.entries(finalItems.finalItems).map(
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
                {Object.entries(finalItems.finalItems).reduce(
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
      </div>
    </div>
  );
}

export default SubmittedOrder;
