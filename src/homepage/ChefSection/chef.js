import "./chef.css";
import HomepageImage from "../homepageimage/homepageimage";

import chef1 from "../../Image/chef1.png";
import chef2 from "../../Image/chef2.png";
import chef3 from "../../Image/chef3.png";
import chef4 from "../../Image/chef4.png";

function ChefSection() {
  return (
    <div>
      <div className="chef_inner">
        <h2>Our Chefs</h2>
        <div className="cheflist">
          <div className="box">
            <HomepageImage src={chef1} name="chef 1" />
          </div>
          <div className="box">
            <HomepageImage src={chef2} name="chef 2" />
          </div>
          <div className="box">
            <HomepageImage src={chef3} name="chef 3" />
          </div>
          <div className="box">
            <HomepageImage src={chef4} name="chef 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefSection;
