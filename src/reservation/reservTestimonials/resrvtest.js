import "./resrvtest.css";
import ResrvTestimonialCard from "../resrvTestCard/resrvtestcard";

function ResrvTestimonial() {
  return (
    <div className="resrvTest_outer">
      <div className="resrvTest_inner">
        <div className="resrvTest_heading">
          <div>
            <h3>
              <em>Testimonials</em>
            </h3>
          </div>
        </div>
        <hr></hr>

        <div className="resrvTestgrid">
          <div className="resrvTestGridElement_outer">
            <div className="resrvTestGridElement_inner">
              <ResrvTestimonialCard />
            </div>
          </div>
          <div className="resrvTestGridElement_outer">
            <div className="resrvTestGridElement_inner">
              <ResrvTestimonialCard />
            </div>
          </div>{" "}
          <div className="resrvTestGridElement_outer">
            <div className="resrvTestGridElement_inner">
              <ResrvTestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResrvTestimonial;
