"use client";
import Filter from "@/components/Filter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FilteredCardList from "@/components/FilteredCardList";
import Card from "@/components/Card";


export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);




  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cards");
      const data = await res.json();
      const filtered = data.filter(
        (card: any) =>
          card.subject.toLowerCase().includes(query.toLowerCase()) ||
          card.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
    fetchData();
  }, [query]);
  console.log(results)
  console.log(query)





  //.............................................................................

  const [cards, setCards] = useState<any[]>(results || []);
  const [searchfilteredCards, setsearchFilteredCards] = useState<any[]>(results || []);
  const searchHandleFilterChange = ({ subject, type }: { subject: string; type: string }) => {
    let filtered = [...cards];

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    setsearchFilteredCards(filtered);
    // Reset to first page on filter change
  };
  useEffect(() => {
    setsearchFilteredCards(cards);
  }, [cards]);

  //............................................................................



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {results.length > 0 ? (
            results.map((card) => (
            <Card key={card.id} subject={card.subject} type={card.type} words={card.words} content={card.content} />
          ))
        ) : (
          <p className="text-center col-span-2">No results found.</p>
        )}
      </div>
      {/* <FilteredCardList /> */}
      <Filter onFilterChange={searchHandleFilterChange} />
    </div>
  );
}
