import "./deliverysec3.css";
import { useState, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

function DeliverySec3() {
  const center = { lat: 28.6129, lng: 77.2295 };

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [userLocation, SetUserLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [destinationLocation, SetdestinationLocation] = useState({
    latitude: null,
    longitude: null,
  });
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
  // });

  // if (!isLoaded) {
  //   return <div>Loading..</div>;
  // }

  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef();
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();

  return (
    <div>
      <div>Maps</div>
      <div id="getMapBorder">
        <div id="getMap_infoBox">
          <input type="text" placeholder="Start"></input>
          <input type="text" placeholder="Destination"></input>
          <button>Calculate Route</button>
          <button>Clear</button>
        </div>
        <div>
          <div>
            Distance: <span>dist</span>
          </div>
          <div>
            Duration: <span>dist</span>
          </div>
        </div>
      </div>
      <div id="MapBorder">
        <div>Map is below</div>
        <div>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMap(map)}
          >
            {/* <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}  */}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default DeliverySec3;
