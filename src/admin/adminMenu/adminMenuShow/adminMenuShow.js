import "./adminMenuShow.css";
import axios from "axios";
import { useState, useEffect } from "react";
import baseURL from "../../../baseURL";

function AdminMenuShow() {
  const [menuItems, setMenuItems] = useState([]);

  async function getMenuItems() {
    await axios
      .get(baseURL + "/adminMenu")
      .then((res) => {
        console.log(res.data);
        setMenuItems(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getMenuItems();
  }, []);

  let count = 0;
  return (
    <div>
      <div className="adminMenuShowDiv">
        <h2 id="adminMenuShowH2">Menu Items</h2>
        <table className="adminMenuShowTable">
          <thead>
            <tr>
              <th className="adminMenuShowData">S. No</th>
              <th className="adminMenuShowData">Category</th>
              <th className="adminMenuShowData">Sub-Category</th>
              <th className="adminMenuShowData">Dish Name</th>
              <th className="adminMenuShowData">Dish Description</th>
              <th className="adminMenuShowData">Price</th>
              <th className="adminMenuShowData">Manange</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((ele, idx) => {
              count++;
              return (
                <tr key={idx}>
                  <td className="adminMenuShowData">{count}</td>
                  <td className="adminMenuShowData">{ele.category}</td>
                  <td className="adminMenuShowData">{ele.subCategory}</td>
                  <td className="adminMenuShowData">{ele.dishName}</td>
                  <td className="adminMenuShowData">{ele.dishDescription}</td>
                  <td className="adminMenuShowData">{ele.price}</td>
                  <td className="adminMenuShowData">
                    <button>edit</button>
                    <button>del</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminMenuShow;
