import "./adminMenu.css";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../baseURL";
import AdminMenuShow from "./adminMenuShow/adminMenuShow";
import AdminMenuAdd from "./adminMenuAdd/adminMenuAdd";

function AdminMenu() {
  return (
    <div id="adminmenu_outer">
      <AdminMenuAdd />
      <AdminMenuShow />
    </div>
  );
}

export default AdminMenu;
