import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  getAllLocations,
  getAllUsers,
  openDatabase,
  upgradeDatabase,
} from "../../database/Database";
import { useNavigate } from "react-router-dom";

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
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCnrK9QY5GOJEyvzfTHxMzpBN8obW_Fv28",
  });
  const [db, setDb] = useState(null);
  const [marker, setMarker] = useState(null);
  const [locations, SetLocations] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    openDatabase(
      "MyDatabase",
      1,
      upgradeDatabase,
      (event) => {
        setDb(event.target.result);
        console.log("Database opened successfully");
        fetchUsers(event.target.result); // Fetch locations when the database is opened successfully
      },
      (event) => {
        console.error("Database error:", event.target.errorCode);
      }
    );
  }, []);
  // const fetchLocations = (db) => {
  //   getAllLocations(db, (locations) => {
  //     SetLocations(locations);
  //     console.log("All locations:", locations);
  //   });
  // };
  const fetchUsers = (db) => {
    getAllUsers(db, (users) => {
      setUsers(users);
    });
  };
  const mar = (id) => {
    console.log("Marker clicked:", id);
    navigate(`/cars`);
  };
  const handleClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log("Latitude:", lat, "Longitude:", lng);
    setMarker({ lat, lng });
    if(props.location){
      props.location({ lat, lng });
    }
  }, []);

  return (
    <div
      className="map-container full-screen"
      style={{
        // display: "flex",
        // justifyContent: "end",
        // alignItems: "center",
        // height: "100vh",
        position: "fixed", 
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        zIndex: 1000,
        transform: "translate(-50%, -50%)",
    

        // position: "fixed",
        // zIndex: 10
      }}
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          fullscreenControl={true}
          onClick={handleClick}
        >
          {users.map((user, index) => (
            <Marker
              key={index}
              position={user.location}
              onClick={() => mar(user.name)}
              title={user.name}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          ))}
          {/* {marker && <Marker position={marker} />} */}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapUser;
