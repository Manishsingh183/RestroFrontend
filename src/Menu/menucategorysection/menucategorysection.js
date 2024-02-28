import "./menucategorysection.css";

import DishCard from "../Dishcard/dishcard";
import { useEffect, useState } from "react";

function MenuCategorySection({ cuisine, selectedItems, onQunantityChange }) {
  const [cuisineItem, setCusineItem] = useState([]);

  useEffect(() => {
    if (cuisine) {
      setCusineItem(cuisine);
    }
  }, [cuisine]);

  return (
    <div>
      <div className="categorysection_inner">
        <hr className="categoryhrRow"></hr>
        {/* --------------------for category dishes---------------------- */}
        <div className="categoryimagesalign">
          {cuisineItem.map((ele, idx) => {
            const selectedItem = selectedItems[ele.dishName] || {
              quantity: 0,
              price: ele.price,
            };
            return (
              <DishCard
                key={idx}
                name={ele.dishName}
                desc={ele.dishDescription}
                price={ele.price}
                category={ele.category}
                quantity={selectedItem.quantity}
                onQuantityChange={onQunantityChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuCategorySection;
