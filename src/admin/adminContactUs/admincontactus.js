import axios from "axios";
import baseURL from "../../baseURL";
import "./admincontactus.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AdminContactUs() {
  const [contactValues, setContactValues] = useState([]);

  useEffect(() => getContactUsValues, []);

  async function getContactUsValues() {
    await axios
      .get(baseURL + "/contactUs")
      .then((res) => {
        console.log(res);
        setContactValues(res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  let count = 0;

  return (
    <div id="adminContact_outer">
      <div id="adminContact_inner">
        <h2>Contact Us Details</h2>
        <div>
          <form id="adminContactfilter_form">
            <input
              type="text"
              placeholder="UserName"
              className="adminContactfilter_input"
            />
            <input
              type="text"
              placeholder="Email"
              className="adminContactfilter_input"
            />
            <button type="submit" id="adminContactfilter_submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: "1em" }}
              />
            </button>
          </form>
        </div>
        <table className="adminContactTable_outer">
          <thead>
            <tr>
              <th className="adminContactheading"> S.No</th>
              <th className="adminContactheading">Name</th>
              <th className="adminContactheading">Email</th>
              <th className="adminContactheading">Comment</th>
            </tr>
          </thead>
          <tbody>
            {contactValues.map((ele, idx) => {
              count++;
              return (
                <tr key={idx}>
                  <td className="adminContactheading">{count}.</td>
                  <td className="adminContactheading">{ele.name}</td>
                  <td className="adminContactheading">{ele.email}</td>
                  <td className="adminContactheading">{ele.comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContactUs;
