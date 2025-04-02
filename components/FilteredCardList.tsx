"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Filter from "./Filter";
import ReactPaginate from "react-paginate";
import { mockCards } from "@/app/api/cards/route";

const ITEMS_PER_PAGE = 8;

const FilteredCardList = () => {
  const [cards, setCards] = useState<any[]>(mockCards || []);
  const [filteredCards, setFilteredCards] = useState<any[]>(mockCards || []);
  const [currentPage, setCurrentPage] = useState(0);

  // Handle Filter Logic
  const handleFilterChange = ({ subject, type, words }: { subject: string; type: string; words: number[] }) => {
    let filtered = [...cards];

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    // ✅ Filter by word count range
    if (words && words.length === 2) {
      filtered = filtered.filter((card) => card.words >= words[0] && card.words <= words[1]);
    }

    setFilteredCards(filtered);
    setCurrentPage(0); // Reset to first page on filter change
  };

  // Initial Load
  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const currentCards = filteredCards.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="pt-20">
      <div className="flex max-w-[1200px] mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-[65%]">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <Card key={card.id} subject={card.subject} type={card.type} words={card.words} content={card.content} />
            ))
          ) : (
            <p className="text-center col-span-2">No results found.</p>
          )}
          {/* Pagination */}
      {filteredCards.length > ITEMS_PER_PAGE && (
        <div className="flex gap-x-4 mt-6 justify-center col-span-2 ">
          {/* First Button */}
          <button
            className={`px-4 py-2 rounded-md border border-[#E9E9E9] ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => setCurrentPage(0)}
            disabled={currentPage === 0}
          >
            « First
          </button>

          {/* React Paginate */}
          <ReactPaginate
            previousLabel={<span className="cursor-pointer">&lt; Back</span>}
            nextLabel={<span className="cursor-pointer">Next &gt;</span>}
            breakLabel="..."
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName="flex justify-center items-center gap-2"
            pageClassName="px-3 py-2 rounded-md border border-[#E9E9E9] cursor-pointer"
            activeClassName="bg-purple-600 text-white font-bold"
            previousClassName="px-4 py-2 rounded-md border border-[#E9E9E9] cursor-pointer"
            nextClassName="px-4 py-2 rounded-md border border-[#E9E9E9] cursor-pointer"
            disabledClassName="opacity-50 cursor-not-allowed"
          />

          {/* Last Button */}
          <button
            className={`px-4 py-2 rounded-md border border-[#E9E9E9] ${
              currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => setCurrentPage(totalPages - 1)}
            disabled={currentPage === totalPages - 1}
          >
            Last »
          </button>
        </div>
      )}
        </div>

        {/* Filter Section */}
        <div className="w-[35%] px-8">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>

      
    </div>
  );
};

export default FilteredCardList;