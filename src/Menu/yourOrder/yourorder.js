import { useState, useEffect } from "react";
import "./yourorder.css";

function Orders({ selectedItems }) {
  const items = [
    { id: 1, content: "Item 1", price: 10 },
    { id: 2, content: "Item 2", price: 40 },
    { id: 3, content: "Item 3", price: 20 },
    { id: 4, content: "Item 4", price: 30 },
  ];
  //   const [sum, countSum] = useState(0);
  const sum = 100;
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
            {items.map((ele) => {
              //   countSum(sum + ele.price);
              return (
                <li key={ele.id}>
                  <div className="orderseparationStyle">
                    <div>{ele.name}</div>
                    <div className="orderseparationprice">₹ {ele.price}</div>
                  </div>
                </li>
              );
            })}
          </ul>
          <hr className="orderhrline"></hr>
          <div className="orderseparationStyle">
            <div className="orderseparationtotal">Total</div>
            <div className="orderseparationprice">
              <strong>₹ {sum}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
