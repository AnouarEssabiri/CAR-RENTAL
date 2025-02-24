import { useState, useEffect, useMemo } from "react";
import useDatabase from "./useDatabase";

const useSearchBook = (searchQuery) => {
  const [results, setResults] = useState([]);
  const { db, bookings } = useDatabase();

  // Memoize the filtered results
  const filteredBookings = useMemo(() => {
    if (!db || !searchQuery.trim() || !Array.isArray(bookings)) {
      return [];
    }

    const query = searchQuery.toLowerCase();

    return bookings.filter((book) => {
      const username = book.username?.toLowerCase() || "";
      const userEmail = book.userEmail?.toLowerCase() || "";
      const status = book.status?.toLowerCase() || "";
      const phone = book.phone?.toLowerCase() || "";
      const carMake = book.car?.car?.make?.toLowerCase() || "";
      const carModel = book.car?.car?.model?.toLowerCase() || "";

      return (
        username.includes(query) ||
        userEmail.includes(query) ||
        status.includes(query) ||
        carMake.includes(query) ||
        carModel.includes(query) ||
        phone.includes(query)
      );
    });
  }, [db, searchQuery, bookings]);

  // Update results when filteredBookings changes
  useEffect(() => {
    setResults(filteredBookings);
  }, [filteredBookings]);

  return results;
};

export default useSearchBook;
