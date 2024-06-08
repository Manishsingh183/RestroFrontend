import "./dishcard.css";

import image1 from "../../Image/gallery1.png";

function DishCard({ name, desc, price, category, quantity, onQuantityChange }) {
  function handleMinus(e) {
    if (quantity - 1 >= 0) {
      onQuantityChange(name, quantity - 1, price);
    } else {
      onQuantityChange(0);
    }
  }

  function handleAdd(e) {
    onQuantityChange(name, quantity + 1, price);
  }

  return (
    <div>
      <div className="dishcard_inner">
        {/* ------------------Image------------------------ */}
        <div className="imagecard">
          {/* <img className="dishcardimage" src={image1} alt="Testing prupose" /> */}
          <img
            className="dishcardimage"
            src="https://raw.githubusercontent.com/Manishsingh183/restroImages/main/uploads/gallery1.png"
            alt="Testing prupose"
          />
        </div>
        {/* ---------------------- dish details-------------------- */}
        <div className="dishnamecard">{name}</div>
        <div className="pricebarcard">
          <div className="pricecard">₹ {price}</div>
          <div className="menucardquantity">
            <button className="menucardminus" onClick={handleMinus}>
              -
            </button>
            <text className="mennucardquantitytext">{quantity}</text>
            <button className="menucardadd" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
