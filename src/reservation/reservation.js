import "./reservation.css";

import ReservTop from "./reservTop/reservtop";
import ReserveNow from "./reservForm/reserveform";
import ResrvTestimonial from "./reservTestimonials/resrvtest";
import ResvLocation from "./reservLocation/resvlocation";
import ResrvGallery from "./reservGallery/resrvgallery";

function Reservations() {
  return (
    <div>
      <div>
        <ReservTop />
        <ReserveNow />
        <ResrvTestimonial />
        <ResvLocation />
        <ResrvGallery />
      </div>
    </div>
  );
}

export default Reservations;
