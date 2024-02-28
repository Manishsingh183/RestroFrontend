import "./homegallery.css";

import Gallery1 from "../../Image/gallery1.png";
import Gallery2 from "../../Image/gallery2.png";
import Gallery3 from "../../Image/gallery3.png";
import Gallery4 from "../../Image/gallery4.png";

function HomeGallery() {
  return (
    <div>
      <div className="gallery_inner">
        <h3>Gallery</h3>
        <div className="galleryImages">
          <div className="box">
            <img className="galleryPhoto" src={Gallery1} alt="hote1" />
          </div>
          <div className="box">
            <img className="galleryPhoto" src={Gallery2} alt="hote1" />
          </div>
          <div className="box">
            <img className="galleryPhoto" src={Gallery3} alt="hote1" />
          </div>
          <div className="box">
            <img className="galleryPhoto" src={Gallery4} alt="hote1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeGallery;
