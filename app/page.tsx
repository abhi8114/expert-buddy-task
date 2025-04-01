"use client";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import { mockCards } from "@/app/api/cards/route"; // Importing mock API for now
import NavBar from "@/components/HeroSection";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  const [cards, setCards] = useState<any[]>(mockCards);
  const [filteredCards, setFilteredCards] = useState<any[]>(mockCards);

  const handleFilterChange = ({ subject, type }: { subject: string; type: string }) => {
    let filtered = cards;

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    setFilteredCards(filtered);
  };

  useEffect(() => {
    setFilteredCards(cards); // Initial load with all cards
  }, [cards]);

  return (
    <div className=" ">
    <HeroSection />

      {/* <h1 className="text-2xl font-bold">Find Assignments</h1> */}

      {/* Filter Component */}
      {/* <Filter onFilterChange={handleFilterChange} /> */}

      {/* Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="border p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold">{card.subject}</h2>
              <p>Type: {card.type}</p>
              <p>Word Count: {card.words}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div> */}
    </div>
  );
}
