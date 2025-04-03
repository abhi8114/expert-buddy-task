"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md px-2 md:px-6 py-2 w-auto md:max-w-lg mt-8">
  
  <span className="hidden md:block">
    <Image src="/search.svg" alt="search icon" width={20} height={100} />
  </span>

  {/* Search Input */}
  <input
    type="text"
    placeholder="Find any type of work, topic, etc."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-grow bg-transparent outline-none text-lg text-[#6B7B93] px-2 dm-sans"
  />

  {/* Search Button */}
  <button
    onClick={handleSearch}
    className="bg-gray-900 text-white px-6 py-2 rounded-full"
  >
    Search
  </button>
</div>

  );
}
