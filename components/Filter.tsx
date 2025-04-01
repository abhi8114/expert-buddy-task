"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";

interface FilterProps {
  onFilterChange: (filters: { subject: string; type: string }) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const subjects = ["Mathematics", "Science", "History", "English"];
  const types = ["Essay", "Report", "Article"];

  const handleFilterChange = () => {
    onFilterChange({ subject: selectedSubject, type: selectedType });
  };

  return (
    <div className="flex gap-4">
        
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">Select Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button onClick={handleFilterChange} className="bg-blue-500 text-white p-2 rounded-md">
        Apply Filters
      </button>
    </div>
  );
}
