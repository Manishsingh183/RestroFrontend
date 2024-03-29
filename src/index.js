import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="indexApp">
      <App />
    </div>
  </React.StrictMode>
);
// const key = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
// const GoogleMapURL = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
// <script src={GoogleMapURL}></script>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
