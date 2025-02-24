import { useEffect, useState } from "react";
import {
  getAllCars,
  getAllLocations,
  getAllUsers,
  getBookings,
  getMembers,
  openDatabase,
  upgradeDatabase,
} from "../database/Database";

const useDatabase = () => {
  const [db, setDb] = useState(null);
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);
  const [members, setMembers] = useState({});

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    const handleDatabaseOpen = (event) => {
      if (!isMounted) return; // Avoid state updates if the component is unmounted

      const database = event.target.result;
      setDb(database);
      console.log("Database opened successfully");

      // Fetch data only if the component is still mounted
      if (isMounted) {
        fetchUsers(database);
        fetchLocations(database);
        fetchBookings(database);
        fetchCars(database);
        fetchMembers(database);
      }
    };

    openDatabase("MyDatabase", 1, upgradeDatabase, handleDatabaseOpen);

    // Cleanup function to avoid state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this runs only once

  const fetchUsers = (db) => {
    getAllUsers(db, (users) => {
      setUsers(users);
    });
  };

  const fetchLocations = (db) => {
    getAllLocations(db, (locations) => {
      setLocations(locations);
    });
  };

  const fetchBookings = (db) => {
    getBookings(db, (bookings) => {
      setBookings(bookings);
    });
  };

  const fetchCars = (db) => {
    getAllCars(db, (cars) => {
      setCars(cars);
    });
  };

  const fetchMembers = (db) => {
    getMembers(db, (members) => {
      setMembers(members);
    });
  };

  return { db, users, locations, bookings, cars, members };
};

export default useDatabase;