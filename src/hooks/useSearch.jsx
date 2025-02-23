import { useState, useEffect } from "react";
import useDatabase from "./useDatabase";

const useSearch = (searchQuery) => {
  const [results, setResults] = useState([]);
  const { db, members } = useDatabase();

  useEffect(() => {
    if (!db || !searchQuery.trim()) {
      setResults([]);
      return;
    }
    const filteredMembers = members.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
      setResults(filteredMembers);


    // const transaction = db.transaction(["members"], "readonly");
    // const store = transaction.objectStore("members");
    // const request = store.getAll();

    // request.onsuccess = () => {
    //   const allMembers = request.result;

    //   // Filter members based on the search query (name, email, etc.)
    //   const filteredMembers = allMembers.filter((member) =>
    //     member.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     member.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     member.email.toLowerCase().includes(searchQuery.toLowerCase())
    //   );

    //   setResults(filteredMembers);
    // };

    // request.onerror = () => {
    //   console.error("Error fetching members:", request.error);
    // };
  }, [db, searchQuery]); // Runs when db or searchQuery changes

  return results;
};

export default useSearch;
