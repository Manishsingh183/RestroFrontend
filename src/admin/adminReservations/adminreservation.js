import { useEffect, useState } from "react";
import "./adminreservation.css";
import axios from "axios";
import baseURL from "../../baseURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AdminReservation() {
  const [reservationValues, setReservationValues] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingID, setBookingID] = useState("");

  useEffect(() => getReservationDetails, []);

  async function getReservationDetails() {
    await axios
      .get(baseURL + "/reservation")
      .then((res) => {
        console.log(res.data);
        setReservationValues(res.data);
        setFilteredReservations(res.data);
      })
      .catch((error) => console.error("Error: ", error));
  }

  useEffect(() => {
    filterReservations();
  }, [guestName, bookingType, bookingDate]);

  function handleAdminResrvChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "BookingID":
        setBookingID(value);
        break;
      case "GuestName":
        setGuestName(value);
        break;
      case "bookingType":
        setBookingType(value);
        break;
      case "bookingdate":
        setBookingDate(value);
        break;
      default:
        break;
    }
  }

  function filterReservations() {
    let filtered = reservationValues;

    // if (!guestName && !bookingType && !bookingDate) {
    //   setFilteredReservations(reservationValues);
    //   return;
    // }

    if (guestName) {
      filtered = filtered.filter((reservation) =>
        reservation.fullName.toLowerCase().includes(guestName.toLowerCase())
      );
    }

    if (bookingType) {
      filtered = filtered.filter((reservation) =>
        reservation.bookingType
          .toLowerCase()
          .includes(bookingType.toLowerCase())
      );
    }

    if (bookingDate) {
      filtered = filtered.filter(
        (reservation) =>
          new Date(reservation.date).toLocaleDateString() ===
          new Date(bookingDate).toLocaleDateString()
      );
    }
    // if (!guestName && !bookingType && !bookingDate) {
    //   setFilteredReservations(reservationValues);
    // }

    setFilteredReservations(filtered);
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
                  placeholder="BookingID"
                  name="BookingID"
                  value={bookingID}
                  onChange={handleAdminResrvChange}
                  className="adminResrvfilter_inputs"
                />
                <input
                  type="text"
                  placeholder="Guest Name"
                  name="GuestName"
                  value={guestName}
                  onChange={handleAdminResrvChange}
                  className="adminResrvfilter_inputs"
                />
                <input
                  className="adminResrvfilter_inputs"
                  type="text"
                  placeholder="Booking Type"
                  value={bookingType}
                  onChange={handleAdminResrvChange}
                  name="bookingType"
                />
                <input
                  type="date"
                  placeholder="BookingDate"
                  name="bookingdate"
                  value={bookingDate}
                  onChange={handleAdminResrvChange}
                  className="adminResrvfilter_inputs"
                />
                <button type="submit" id="adminResrvfilter_submit" disabled>
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
              {filteredReservations.map((ele, idx) => {
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
