"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search by topic, type..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
        Search
      </button>
    </div>
  );
}
