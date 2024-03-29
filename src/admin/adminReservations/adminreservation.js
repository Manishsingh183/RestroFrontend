import { useEffect, useState } from "react";
import "./adminreservation.css";
import axios from "axios";
import baseURL from "../../baseURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AdminReservation() {
  const [reservationValues, setReservationValues] = useState([]);

  useEffect(() => getReservationDetails, []);

  async function getReservationDetails() {
    await axios
      .get(baseURL + "/reservation")
      .then((res) => {
        console.log(res.data);
        setReservationValues(res.data);
      })
      .catch((error) => console.error("Error: ", error));
  }

  let count = 0;

  return (
    <div id="adminRes_outer">
      <div id="adminRes_inner">
        <div id="adminRes_heading">
          <h2>Reservations</h2>
        </div>
        <div id="adminRes_filter">
          <div>
            <div>
              <form id="adminResrv_filterform">
                <input
                  type="text"
                  placeholder="Guest Name"
                  name="GuestName"
                  className="adminResrvfilter_inputs"
                />
                <input
                  className="adminResrvfilter_inputs"
                  type="text"
                  placeholder="Booking Type"
                  name="bookingType"
                />
                <input
                  type="date"
                  placeholder="BookingDate"
                  name="bookingdate"
                  className="adminResrvfilter_inputs"
                />
                <button type="submit" id="adminResrvfilter_submit">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: "1em" }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="adminValues_align">
          <table className="adminReservationTable">
            <thead>
              <tr>
                <th className="adminReservationheading">S.No</th>
                <th className="adminReservationheading">Full Name</th>
                <th className="adminReservationheading">Guest No's</th>
                <th className="adminReservationheading">Booking Type</th>
                <th className="adminReservationheading">Booking Date</th>
                <th className="adminReservationheading">Time Slot</th>
              </tr>
            </thead>
            <tbody>
              {reservationValues.map((ele, idx) => {
                count++;
                const Resdate = new Date(ele.date);
                return (
                  <tr key={idx}>
                    <td className="adminReservationheading">{count}</td>
                    <td className="adminReservationheading">{ele.fullName}</td>
                    <td className="adminReservationheading">{ele.guestNo}</td>
                    <td className="adminReservationheading">
                      {ele.bookingType}
                    </td>
                    <td className="adminReservationheading">
                      {Resdate.toLocaleDateString()}
                    </td>
                    <td className="adminReservationheading">{ele.timeSlot}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminReservation;
