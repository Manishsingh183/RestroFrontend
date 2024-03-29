import { useEffect, useState } from "react";
import "./admindelivery.css";
import axios from "axios";
import baseURL from "../../baseURL";
import socketIOClient from "socket.io-client";

function AdminDelivery() {
  const [serviceData, setServiceData] = useState([]);

  async function getCustomerData() {
    await axios
      .get(baseURL + "/adminServicePortal")
      .then((res) => {
        const info = res.data;
        console.log(info);
        setServiceData(info);
      })
      .catch((err) => console.log("error", err));
  }

  const ENDPOINT = "http://localhost:8080";

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    // Listen for 'dataUpdated' event from server
    socket.on("dataUpdated", (newData) => {
      setServiceData(newData);
    });

    return () => {
      // Clean up WebSocket connection
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    getCustomerData();
  }, []);

  function getMapsDirection(lat, lng) {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );
    console.log(isMobileDevice);
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    if (isMobileDevice) {
      // Open Google Maps app if on mobile
      // window.open(mapsUrl, "_blank");
      window.location.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    } else {
      // Open Google Maps in a new tab if on laptop/desktop
      window.open(mapsUrl, "_blank");
    }
  }

  let count = 0;

  return (
    <div>
      <div id="adminDelivery_inner">
        <h2>Delivery Admin Section</h2>
        <div id="adminDeliveryBox">
          {serviceData.map((ele, idx) => {
            const lat = ele.coordinate.coordinate[0];
            const lng = ele.coordinate.coordinate[1];
            const time = ele.dateTime;
            count++;
            return (
              <div key={idx} className="adminServiceValue">
                <div className="adminServiceCustomerInfoUpper">
                  <div>
                    <div>{count}</div>
                    <div>{ele.name}</div>
                    <div>{ele.phone}</div>
                  </div>
                  <div>
                    <button onClick={() => getMapsDirection(lat, lng)}>
                      Location on Google map
                    </button>
                    <div>{time}</div>
                  </div>
                </div>
                <div>{ele.status}</div>
                <div>{ele.locationName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default AdminDelivery;
