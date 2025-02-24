import { useState, useEffect } from "react";
import useDatabase from "./useDatabase";

const useSearchMember = (searchQuery) => {
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

  }, [db, searchQuery]); // Runs when db or searchQuery changes

  return results;
};

export default useSearchMember;
