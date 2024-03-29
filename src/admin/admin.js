import React from "react";
import { useState } from "react";
import "./admin.css";
import AdminBar from "./adminBar/adminbar";
import AdminContactUs from "./adminContactUs/admincontactus";
import AdminMailingList from "./adminMailing List/adminMailinglist";
import AdminMenu from "./adminMenu/adminMenu";
import AdminReservation from "./adminReservations/adminreservation";
import AdminDelivery from "./adminDelivery/admindelivery";

function Admin() {
  const [adminBar, setAdminBar] = useState({
    menu: false,
    reservations: false,
    contact: false,
    mailing: false,
  });

  function updateState(button) {
    setAdminBar((prevVal) => ({
      ...prevVal,
      [button]: true,
      ...Object.keys(prevVal)
        .filter((item) => item !== button)
        .reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {}),
    }));
  }

  return (
    <div className="admin_outer">
      <div id="admin_headerName">
        <h3>Admin Section</h3>
      </div>
      <div className="admin_inner">
        <div>
          <AdminBar state={adminBar} updateState={updateState} />
        </div>
        <div className="admin_elements">
          <AdminDelivery />
          {adminBar.contact && <AdminContactUs />}
          {adminBar.menu && <AdminMenu />}
          {adminBar.mailing && <AdminMailingList />}
          {adminBar.reservations && <AdminReservation />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
