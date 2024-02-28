import "./reservtop.css";

import ResrvSec1 from "../../Image/ResrvSec1.png";
import ResrvSec2 from "../../Image/ResrvSec2.png";
import ResrvSec3 from "../../Image/ResrvSec3.png";

function ReservTop() {
  return (
    <div id="resvTop_outer">
      <div id="resvTop_inner">
        <div id="resTop_heading">
          <p>Best of Local cuisine experience</p>
        </div>
        <div className="resTop_imagesGrid">
          <div>
            <img className="resrvTopimg1" src={ResrvSec1} alt="img 1" />
          </div>
          <div id="resvTop_img2style">
            <img className="resrvTopimg2" src={ResrvSec2} alt="img 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservTop;
