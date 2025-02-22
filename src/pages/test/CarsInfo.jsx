import { useEffect, useState } from "react";
import {
    getAllLocations,
  getAllUsers,
  openDatabase,
  upgradeDatabase,
} from "../../database/Database";
import useDatabase from "../../hooks/useDatabase";

const CarsInfo = () => {
  const [db, setDb] = useState(null);
  // const [users, setUsers] = useState([]);
  // const [locations, SetLocations] = useState([]);
  const {users, locations}= useDatabase();
  // useEffect(() => {
  //   openDatabase(
  //     "MyDatabase",
  //     1,
  //     upgradeDatabase,
  //     (event) => {
  //       setDb(event.target.result);
  //       console.log("Database opened successfully");
  //       fetchUsers(event.target.result); // Fetch users when the database is opened successfully
  //       fetchLocations(event.target.result); // Fetch locations when the database is opened successfully
  //   },
  //     (event) => {
  //       console.error("Database error:", event.target.errorCode);
  //     }
  //   );
  //   // openDatabase(
  //   //   "myDatabase",  
  //   //   1,
  //   //   upgradeDatabase,
  //   //   (event) => {
  //   //     const db = event.target.result;
  //   //     getAllLocations(db, (locations) => {
  //   //       console.log("All locations:", locations);
  //   //     });
  //   //   },
  //   //   (event) => {
  //   //     console.error("Database open error:", event.target.errorCode);
  //   //   }
  //   // );
  // }, []);
  // const fetchUsers = (db) => {
  //   getAllUsers(db, (users) => {
  //     setUsers(users);
  //   });
  // };
  // const fetchLocations = (db) => {
  //   getAllLocations(db, (locations) => {
  //       SetLocations(locations);
  //     console.log("All locations:", locations);
  //   });
  // };
  console.log(users);
  return (
    <div>
      <h1>location</h1>
      <ul>
        {locations.map((location,index) => (
            <li key={index}>
            <p>
              <strong>Location:</strong>
              {location
                ? `Lat: ${location.lat}, Lng: ${location.lng}`
                : "No location provided"}
            </p>
            </li>
        ))}
        </ul>
      <h1>CarsInfo</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name || "No name provided"}</h3>
            <p>
              <strong>Location:</strong>
              {user.location
                ? `Lat: ${user.location.lat}, Lng: ${user.location.lng}`
                : "No location provided"}
            </p>
            <h4>Cars:</h4>
            <ul>
              {user.cars && user.cars.length > 0 ? (
                user.cars.map((car) => (
                  <li key={car.id}>
                    <p>
                      <strong>Make:</strong> {car.make || "No make provided"}
                    </p>
                    <p>
                      <strong>Model:</strong> {car.model || "No model provided"}
                    </p>
                    <p>
                      <strong>Year:</strong> {car.year || "No year provided"}
                    </p>
                    <p>
                      <strong>Category:</strong>{" "}
                      {car.category || "No category provided"}
                    </p>
                    <p>
                      <strong>Daily Rate:</strong>{" "}
                      {car.dailyRate || "No daily rate provided"}
                    </p>
                    <p>
                      <strong>Features:</strong>{" "}
                      {car.features
                        ? car.features.join(", ")
                        : "No features provided"}
                    </p>
                    <p>
                      <strong>Specs:</strong>{" "}
                      {car.specs ? car.specs.join(", ") : "No specs provided"}
                    </p>
                    <div>
                      <strong>Images:</strong>
                      {car.images && car.images.length > 0
                        ? car.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${car.make} ${car.model}`}
                            />
                          ))
                        : "No images provided"}
                    </div>
                  </li>
                ))
              ) : (
                <li>No cars provided</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarsInfo;
