import "./adminMailinglist.css";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../baseURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AdminMailingList() {
  const [mailingList, setMailingList] = useState([]);
  // const [searchMailingList, setSearchMailingList] = useState([]);
  const [displayMailList, setMailDisplayList] = useState([]);
  const [mailSearch, setMailSearch] = useState("");

  async function getMailingList() {
    await axios
      .get(baseURL + "/mailing")
      .then((res) => {
        console.log(res.data);
        setMailingList(res.data);
        setMailDisplayList(res.data);
      })
      .catch((error) => {
        console.log("Error found", error);
      });
  }

  useEffect(() => getMailingList, []);

  function handleMailingSearchChange(e) {
    const query = e.target.value.toLowerCase();
    setMailSearch(query);

    if (query) {
      const filteredList = mailingList.filter((item) =>
        item.email.toLowerCase().includes(query)
      );
      setMailDisplayList(filteredList);
    } else {
      setMailDisplayList(mailingList); // Reset to full list if search is cleared
    }
  }
  let count = 0;

  // function handleSearchClick(e) {
  //   e.preventDefault();
  //   if (mailSearch) handleMailingSearchChange(mailSearch);
  // }

  return (
    <div id="adminMailing_inner">
      <div>
        <h2>Mailing List</h2>
      </div>
      <div>
        <form id="adminMailingFilter_form">
          <input
            type="text"
            placeholder="User Email"
            name="userEmail"
            className="adminMailingfilter_input"
            value={mailSearch}
            onChange={handleMailingSearchChange}
          />
          <button type="submit" id="adminMailingfilter_submit" disabled>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "1em" }}
              // onClick={handleSearchClick}
            />
          </button>
        </form>
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
              {displayMailList.map((ele, idx) => {
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
