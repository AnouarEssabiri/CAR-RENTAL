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
    openDatabase("MyDatabase", 1, upgradeDatabase, (event) => {
      setDb(event.target.result);
      console.log("Database opened successfully");
      fetchUsers(event.target.result); // Fetch users when the database is opened successfully
      fetchLocations(event.target.result); // Fetch locations when the database is opened successfully
      fetchBookings(event.target.result);
      fetchCars(event.target.result);
      fetchMemebrs(event.target.result);
    });
  }, []);
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
  const fetchMemebrs = (db) => {
    getMembers(db, (members) => {
      setMembers(members);
    });
  };
  return { db, users, locations, bookings, cars, members };
};
export default useDatabase;
