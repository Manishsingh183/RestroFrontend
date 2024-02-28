import "./resrvgallery.css";

import Gal1 from "../../Image/ResrvGal1.png";
import Gal2 from "../../Image/ResrvGal2.png";
import Gal3 from "../../Image/ResrvGal3.png";
import Gal4 from "../../Image/ResrvGal4.png";

function ResrvGallery() {
  return (
    <div className="resrvGallery_outer">
      <div id="resrvgalleryheading_outer">
        <div id="Resvgalleryheading">Gallery</div>
      </div>
      <hr></hr>
      <div id="resrvGalgrid_outer">
        <div className="resrvGalgrid">
          <div>
            <img id="resvGal" src={Gal1} alt="Gal1" />
          </div>
          <div>
            <img id="resvGal2" src={Gal2} alt="Gal2" />
          </div>
          <div>
            <img id="resvGal3" src={Gal3} alt="Gal3" />
          </div>
          <div>
            <img id="resvGal4" src={Gal4} alt="Gal4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResrvGallery;
