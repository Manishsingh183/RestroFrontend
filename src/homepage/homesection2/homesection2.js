import "./homesection2.css";

import HomepageImage from "../homepageimage/homepageimage";

import speciality1 from "../../Image/speciality1.png";
import speciality2 from "../../Image/speciality2.png";
import speciality3 from "../../Image/speciality3.png";
import speciality4 from "../../Image/speciality4.png";

function HomeSection2() {
  return (
    <div className="homesection2">
      <h3>Our Speciality</h3>
      <div className="Speciality_box">
        <HomepageImage src={speciality1} name="Speciality1" />
        <HomepageImage src={speciality2} name="Speciality2" />
        <HomepageImage src={speciality3} name="Speciality3" />
        <HomepageImage src={speciality4} name="Speciality4" />
      </div>
    </div>
  );
}

export default HomeSection2;
