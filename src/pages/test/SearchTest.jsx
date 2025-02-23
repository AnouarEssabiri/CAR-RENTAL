import React, { useState } from "react";
import useSearch from "../../hooks/useSearch";

const SearchTest = () => {
  const [query, setQuery] = useState("");
  const members = useSearch(query);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search members..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-md w-full"
      />

      <ul className="mt-4">
        {members.length > 0 ? (
          members.map((member) => (
            <li key={member.email} className="p-2 border-b">
              {member.firstName} {member.lastName} - {member.email}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No matching members found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchTest;
