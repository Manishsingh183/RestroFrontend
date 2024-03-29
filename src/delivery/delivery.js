import { Link } from "react-router-dom";
import "./delivery.css";

import DeliverySec1 from "./DeliverySec1/deliverysec1";
import DeliverySec2 from "./DeliverySec2/deliverysec2";
import DeliverySec3 from "./deliverySec3/deliverysec3";
import MapComponent from "./deliveryMap/deliveryMap";

function Delivery() {
  return (
    <div>
      <DeliverySec1 />
      <div className="deliveryNotAvailable">
        {/* <Link to="/">
          <div>
            <button id="notavailable">Not Available Now!!</button>
          </div>
        </Link> */}
        {/* <DeliverySec3 /> */}
        <MapComponent />
      </div>
      <DeliverySec2 />
    </div>
  );
}

export default Delivery;
