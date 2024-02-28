import "./adminMenu.css";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../baseURL";
import AdminMenuShow from "./adminMenuShow/adminMenuShow";

function AdminMenu() {
  return (
    <div id="adminmenu_outer">
      <AdminMenuShow />
    </div>
  );
}

export default AdminMenu;
