import React, { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
import baseURL from "../../baseURL";

import "./deliveryMap.css";

const containerStyle = {
  width: "500px",
  height: "500px",
};

function MyComponent() {
  const [currlocation, setCurrLocation] = useState({
    lat: 28.6129,
    lng: 77.2295,
  });

  const [locationName, setLocationName] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      getCurrentLocation();
    }
  }, [isLoaded]);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(currlocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
    getCurrLocationName(currlocation);
  }

  function getCurrLocationName(locationCoord) {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: locationCoord }, (result, status) => {
      if (status === "OK") {
        if (result[0]) {
          setLocationName(result[0].formatted_address);
        } else {
          setLocationName("Location Not Found");
        }
      } else {
        console.error("GeoCoding error", status);
      }
    });
  }

  function getLocationCoordinate() {
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    console.log("Current Location Name", locationName);
    geocoder.geocode({ address: locationName }, (results, status) => {
      if (status === "OK") {
        // Extract coordinates from the first result
        const { lat, lng } = results[0].geometry.location;
        console.log("Latitude:", lat());
        console.log("Longitude:", lng());
        setCurrLocation({ lat, lng });
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    // eslint-disable-next-line no-undef
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    console.log(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    getLocationCoordinate();
  }

  function getGoogleMaps(latitude, longitude, locationName) {
    const currentDateTime = new Date();

    const coordinateinfo = {
      name: "Customer1",
      phone: 9876545678,
      locationName: locationName,
      dateTime: currentDateTime,
      latitude: latitude,
      longitude: longitude,
    };
    axios
      .post(baseURL + "/location", coordinateinfo)
      .then((res) => {
        console.log("data send", res);
      })
      .catch((err) => console.log("Error: ", err));

    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );
    console.log(isMobileDevice);
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    if (isMobileDevice) {
      // Open Google Maps app if on mobile
      // window.open(mapsUrl, "_blank");
      window.location.href = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    } else {
      // Open Google Maps in a new tab if on laptop/desktop
      window.open(mapsUrl, "_blank");
    }
  }

  function getDestinationDirection() {
    const locationName = destiantionRef.current.value;
    const geocoder = new window.google.maps.Geocoder();
    console.log(destiantionRef.current.value);
    geocoder.geocode({ address: locationName }, (results, status) => {
      if (status === "OK") {
        // Extract coordinates from the first result
        const { lat, lng } = results[0].geometry.location;
        console.log("Latitude:", lat());
        console.log("Longitude:", lng());
        getGoogleMaps(lat(), lng(), locationName);
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  }

  const handleMarkerDrag = (e) => {
    setCurrLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    getCurrLocationName(currlocation);
  };

  return isLoaded ? (
    <div>
      <div>Maps</div>
      <div id="getMapBorder">
        <div id="getMap_infoBox">
          <Autocomplete>
            <input
              type="text"
              className="mapdirectioninputbar"
              placeholder="Start"
              ref={originRef}
            ></input>
          </Autocomplete>
          <Autocomplete>
            <input
              className="mapdirectioninputbar"
              type="text"
              placeholder="Destination"
              ref={destiantionRef}
            ></input>
          </Autocomplete>
          <button onClick={calculateRoute}>Calculate Route</button>
          <button onClick={clearRoute}>Clear</button>
        </div>
        <div>
          <div>
            Distance: <span>{distance}</span>
          </div>
          <div>
            Duration: <span>{duration}</span>
          </div>
          <div>
            Location: <span>{locationName}</span>
          </div>
          <div>
            Current Location Co- ordinates:
            <div>
              <span>latitude: {currlocation.lat}</span>
              <span>longitude: {currlocation.lng}</span>
            </div>
          </div>
          <button onClick={getCurrentLocation}>Get current Location</button>
          <button
            onClick={() =>
              getGoogleMaps(currlocation.lat, currlocation.lng, locationName)
            }
          >
            Redirect to Google maps
          </button>
          <button onClick={() => getDestinationDirection()}>
            Redirect & store Destination location
          </button>
        </div>
      </div>
      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currlocation}
          zoom={11}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
          onLoad={onLoad}
          // onLoad={(map) => setMap(map)}
          onUnmount={onUnmount}
        >
          {console.log(currlocation)}
          <MarkerF
            position={currlocation}
            draggable={true}
            onDragEnd={handleMarkerDrag}
          />

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
