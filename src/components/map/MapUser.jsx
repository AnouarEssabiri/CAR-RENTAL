import React, { useCallback, useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import useDatabase from "../../hooks/useDatabase";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 33.5731,
  lng: -7.5898,
};

const MapUser = (props) => {
  const navigate = useNavigate();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState(null);
  const { users } = useDatabase();
  const [location, SetLocation] = useState();
  const mar = (user) => {
    console.log("Marker clicked:", user.name);
    setSelectedMarker(user);
  };

  const handleClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      console.log("Latitude:", lat, "Longitude:", lng);
      setMarker({ lat, lng });
      if (props.location) {
        props.location({ lat, lng });
      }
    },
    [props]
  );

  return (
    <div
      className="map-container full-screen"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "50%",
        zIndex: 1000,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          fullscreenControl={true}
          onClick={handleClick}
          onCloseClick={() => navigate("/")}
        >
          {users.map((user, index) => (
            <Marker
              key={index}
              position={user.location}
              onClick={() => mar(user)}
              title={user.name}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>{selectedMarker.name}</h2>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapUser;
