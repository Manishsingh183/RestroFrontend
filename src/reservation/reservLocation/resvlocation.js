import "./resvlocation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

function ResvLocation() {
  return (
    <div className="resvlocation_outer">
      <div className="resvlocation_inner">
        <div className="resvlocation_heading">
          <div>
            <h3>Location</h3>
          </div>
        </div>
        <hr></hr>
        <div className="resvlocationElementGrid">
          <div className="resvlocationElement_outer">
            <div id="resvlocationele">
              <FontAwesomeIcon icon={faHotel} style={{ fontSize: "2em" }} />
            </div>
            <div id="reslocationText">933 Jamel Village, Arvada 76883</div>
          </div>
          <div className="resvlocationElement_outer">
            <div id="resvlocationele">
              <FontAwesomeIcon icon={faHotel} style={{ fontSize: "2em" }} />
            </div>
            <div id="reslocationText">933 Jamel Village, Arvada 76883</div>
          </div>
          <div className="resvlocationElement_outer">
            <div id="resvlocationele">
              <FontAwesomeIcon icon={faHotel} style={{ fontSize: "2em" }} />
            </div>
            <div id="reslocationText">933 Jamel Village, Arvada 76883</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResvLocation;
