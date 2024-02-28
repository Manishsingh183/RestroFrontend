import { Link } from "react-router-dom";
import "./homesection1.css";

function HomeSection1() {
  function handleOrderNow() {}

  return (
    <div className="homesection1_outer">
      <div>
        <h2>Taste the traditional cuisine of North India</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis consectetur neque imperdiet tempus. Pellentesque sagittis
          interdum mattis. Nullam ac aliquet ipsum. Sed porttitor ut mi sit amet
          pulvinar. Nullam posuere quam ac augue efficitur, ac dignissim eros
          sagittis. Sed lacinia ipsum dui, vel tincidunt ex euismod blandit.
          Mauris sem massa, tempor sit amet eros sed, venenatis varius metus.
          Cras rhoncus nulla vel facilisis viverra.
        </p>
      </div>
      <Link to="/menu">
        <button id="homeOrderNowbutton" onClick={handleOrderNow}>
          <strong>Order Now</strong>
        </button>
      </Link>
    </div>
  );
}

export default HomeSection1;
