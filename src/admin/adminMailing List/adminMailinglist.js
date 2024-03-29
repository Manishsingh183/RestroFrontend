import "./adminMailinglist.css";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../baseURL";

function AdminMailingList() {
  const [mailingList, setMailingList] = useState([]);

  async function getMailingList() {
    await axios
      .get(baseURL + "/mailing")
      .then((res) => {
        console.log(res.data);
        setMailingList(res.data);
      })
      .catch((error) => {
        console.log("Error found", error);
      });
  }

  useEffect(() => getMailingList, []);

  let count = 0;

  return (
    <div id="adminMailing_inner">
      <div>
        <h2>Mailing List</h2>
      </div>
      <div id="adminMailingbox">
        <div id="adminMailing_content">
          <table className="adminMailingTable">
            <thead>
              <tr>
                <th className="adminMailingData">S. No</th>
                <th className="adminMailingData">User's Emails</th>
              </tr>
            </thead>
            <tbody>
              {mailingList.map((ele, idx) => {
                count++;
                return (
                  <tr key={idx}>
                    <td className="adminMailingData">{count}</td>
                    <td className="adminMailingData">
                      <span key={idx}>{ele.email}</span>
                    </td>
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

export default AdminMailingList;
