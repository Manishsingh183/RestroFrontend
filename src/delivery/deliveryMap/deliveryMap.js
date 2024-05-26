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
  width: "400px",
  height: "400px",
};

function MyComponent() {
  const [currlocation, setCurrLocation] = useState({
    lat: 28.6129,
    lng: 77.2295,
  });

  const [locationName, setLocationName] = useState("");

  // const [directionsResponse, setDirectionsResponse] = useState(null);
  // const [distance, setDistance] = useState("");
  // const [duration, setDuration] = useState("");

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
      // getCurrentLocation();
      getCurrLocationName(currlocation);
    }
  }, [isLoaded]);

  // To get the google maps direction in phone
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

  useEffect(() => {
    getCurrentLocation();
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
  }

  function getLocationCoordinate(locationName) {
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    console.log("Current Location Name", locationName);
    geocoder.geocode({ address: locationName }, (results, status) => {
      if (status === "OK") {
        // Extract coordinates from the first result
        const { lat, lng } = results[0].geometry.location;
        setCurrLocation({ lat: lat(), lng: lng() });
        setLocationName(results[0].formatted_address);
        // handleMarkerMove(currlocation);
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  }

  function clearRoute() {
    getCurrentLocation();
    originRef.current.value = "";
    setLocationName("");
  }

  function getSearchedLocation() {
    const searchLocation = originRef.current.value;
    console.log("----------> new location", searchLocation);
    if (searchLocation) {
      getLocationCoordinate(searchLocation);
      console.log("getSearchedLocation---->", currlocation);
    } else {
      console.warn("Please enter a search location"); // Warn about empty input
    }
  }

  const handleMarkerDrag = (e) => {
    const newLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setCurrLocation(newLocation);
    getCurrLocationName(newLocation);
  };

  return isLoaded ? (
    <div id="deliveryMap_outer">
      <div>Maps</div>
      <div id="getMapBorder">
        <div id="getMap_infoBox">
          <Autocomplete>
            <input
              type="text"
              className="mapdirectioninputbar"
              placeholder="Search your location"
              ref={originRef}
            ></input>
          </Autocomplete>
          <button onClick={getSearchedLocation}>Search</button>
          <button onClick={getCurrentLocation}>Get current Location</button>
          <button onClick={clearRoute}>Clear</button>
        </div>
        <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currlocation}
            zoom={19}
            options={{
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
            // onLoad={onLoad}
            onLoad={getCurrentLocation}
            // onLoad={(map) => setMap(map)}
            // onUnmount={onUnmount}
          >
            <MarkerF
              position={currlocation}
              draggable={true}
              onDragEnd={handleMarkerDrag}
              onPositionChanged={getSearchedLocation}
              onLoad={getSearchedLocation}
            />
          </GoogleMap>
        </div>
        <div>
          <div>
            Location: <span>{locationName}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
