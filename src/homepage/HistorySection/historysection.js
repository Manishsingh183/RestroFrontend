import "./historysection.css";

import history1 from "../../Image/history1.png";
import history2 from "../../Image/history2.png";
import history3 from "../../Image/history3.png";
import history4 from "../../Image/history4.png";

import HistorySubLeft from "../historySubleft/historysubleft";
import HistorySubRight from "../historySubright/historysubright";

function HistorySection() {
  return (
    <div className="history_outer">
      <h2 className="historyHeading">Our History</h2>
      <div>
        <HistorySubLeft src={history1} alt="owner image" year="1997" />
        <HistorySubRight src={history2} alt="First Hotel" year="2002" />
        <HistorySubLeft src={history3} alt="hotel No. 2 image" year="2006" />
        <HistorySubRight src={history4} alt="Hotel No. 3 image" year="2012" />
      </div>
    </div>
  );
}

export default HistorySection;
