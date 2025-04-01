"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cards");
      const data = await res.json();
      const filtered = data.filter(
        (card:any) =>
          card.subject.toLowerCase().includes(query.toLowerCase()) ||
          card.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
    fetchData();
  }, [query]);
  console.log(query)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {results.length > 0 ? (
          results.map((card) => (
            <div key={card.id} className="border p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold">{card.subject}</h2>
              <p>Type: {card.type}</p>
              <p>Word Count: {card.words}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
