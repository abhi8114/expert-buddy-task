"use client";

import React, { useState, useEffect } from "react";
import { mockCards } from "@/app/api/cards/route";
import Filter from "@/components/Filter";

const MidSection = () => {
  const [cards, setCards] = useState<any[]>(mockCards || []);
  const [filteredCards, setFilteredCards] = useState<any[]>(mockCards || []);

  // Filter Logic
  const handleFilterChange = ({ subject, type }: { subject: string; type: string }) => {
    let filtered = [...cards];

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    setFilteredCards(filtered);
  };

  // Initial Load
  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  return (
    <div>
      

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
      </div>
      <Filter onFilterChange={handleFilterChange} />
    </div>
  );
};

export default MidSection;
