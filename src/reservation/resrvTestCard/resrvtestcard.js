import "./resrvtestcard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ResrvTestimonialCard() {
  return (
    <div className="testcard_outer">
      <div className="testcard_inner">
        <div className="testcardstaricon">
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5em" }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5em" }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5em" }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5em" }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "1.5em" }} />
          </div>
        </div>
        <div className="resvcard_content">
          <h3>"Super delicious food ever tasted!"</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam odio aliquet leo
            integer venenatis vel.
          </p>
        </div>
        <div>
          <p>
            <span id="testcardspan">- Ron Hanree</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResrvTestimonialCard;
