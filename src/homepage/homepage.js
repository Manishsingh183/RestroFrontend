import "./homepage.css";
import HomeSection1 from "./homesection1/homesection1";
import HomeSection2 from "./homesection2/homesection2";
import HistorySection from "./HistorySection/historysection";
import ChefSection from "./ChefSection/chef";
import HomeGallery from "./homegallery/homegallery";

function Homepage() {
  return (
    <div>
      <div className="homepageInner">
        <HomeSection1 />
        <HomeSection2 />
        <HistorySection />
        <ChefSection />
        <HomeGallery />
      </div>
    </div>
  );
}

export default Homepage;
