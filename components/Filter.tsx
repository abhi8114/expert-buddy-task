"use client";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: { subject: string; type: string; words: number[] }) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>("Accounting");
  const [selectedType, setSelectedType] = useState<string>("");
  const [wordRange, setWordRange] = useState<[number, number]>([275, 550000]);

  const subjects = ["Accounting", "Mathematics", "Science", "History", "English"];
  const types = ["All Project Types", "Essay", "Report", "Article"];

  const handleFilterChange = () => {
    onFilterChange({ subject: selectedSubject, type: selectedType, words: wordRange });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
      {/* Type of Work */}
      <label className="block text-gray-700 font-medium">Type of work</label>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full border rounded-md p-2 mb-4"
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Subject */}
      <label className="block text-gray-700 font-medium">Subject</label>
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="w-full border rounded-md p-2 mb-4"
      >
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      {/* Words */}
      <label className="block text-gray-700 font-medium">Words</label>
      <input
        type="range"
        min="275"
        max="550000"
        value={wordRange[1]}
        onChange={(e) => setWordRange([275, parseInt(e.target.value)])}
        className="w-full mb-2 accent-purple-600"
      />
      
      <div className="flex justify-between mb-2">
        <input
          type="text"
          value={`From ${wordRange[0]}`}
          className="border p-2 rounded-md text-center w-1/2 mr-2"
          disabled
        />
        <input
          type="text"
          value={`To ${wordRange[1]}`}
          className="border p-2 rounded-md text-center w-1/2"
          disabled
        />
      </div>

      <p className="text-sm text-gray-500 mb-4">1 Page = 275 Words</p>

      {/* Apply Button */}
      <button
        onClick={handleFilterChange}
        className="bg-purple-600 text-white w-full py-3 rounded-full font-medium hover:bg-purple-700"
      >
        Apply
      </button>
    </div>
  );
}
