"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Filter from "./Filter";
import ReactPaginate from "react-paginate";
import { mockCards } from "@/data";
import Image from "next/image";

const FilteredCardList = () => {
  const [cards, setCards] = useState<any[]>(mockCards || []);
  const [filteredCards, setFilteredCards] = useState<any[]>(mockCards || []);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default to 8 items

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    updateItemsPerPage(); // Set on initial load
    window.addEventListener("resize", updateItemsPerPage); // Listen for window resize

    return () => window.removeEventListener("resize", updateItemsPerPage); // Cleanup on unmount
  }, []);

  // Handle Filter Logic
  const handleFilterChange = ({ subject, type, words }: { subject: string; type: string; words: number[] }) => {
    let filtered = [...cards];

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    // Filter by word count range
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
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const currentCards = filteredCards.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="pt-20">
      <Image src="/vector.svg" alt="Vector" width={80} height={100} className="absolute left-[10%] bottom-16 " />
      <h1 className="text-3xl md:text-5xl text-center font-bold"> Find Writing Inspiration in Our Data Base</h1>

      <div className="flex max-w-[1200px] mx-auto mt-10 p-6 md:p-0">
        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-28 gap-y-4 md:gap-6 md:mt-4 w-[65%]">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <Card key={card.id} id={card.id} subject={card.subject} type={card.type} words={card.words} content={card.content} />
            ))
          ) : (
            <p className="text-center col-span-2">No results found.</p>
          )}

          {/* Pagination */}
          {filteredCards.length > itemsPerPage && (
            <div className="flex flex-wrap gap-2  md:mt-6 justify-center items-center col-span-2">
              {/* First Button */}
              <button
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md border border-[#E9E9E9] hidden md:block ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={() => setCurrentPage(0)}
                disabled={currentPage === 0}
              >
                « First
              </button>

              {/* React Paginate */}
              <ReactPaginate
                previousLabel={<span className="cursor-pointer text-sm md:text-base">&lt; Back</span>}
                nextLabel={<span className="cursor-pointer text-sm md:text-base">Next &gt;</span>}
                breakLabel="..."
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName="flex flex-wrap justify-center items-center gap-2"
                pageClassName="px-2 py-1 md:px-3 md:py-2 rounded-md border border-[#E9E9E9] cursor-pointer text-sm md:text-base"
                activeClassName="bg-purple-600 text-white font-bold"
                previousClassName="px-3 py-1 md:px-4 md:py-2 rounded-md border border-[#E9E9E9] cursor-pointer text-sm md:text-base"
                nextClassName="px-3 py-1 md:px-4 md:py-2 rounded-md border border-[#E9E9E9] cursor-pointer text-sm md:text-base"
                disabledClassName="opacity-50 cursor-not-allowed"
              />

              {/* Last Button */}
              <button
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md border border-[#E9E9E9] hidden md:block ${
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
        <div className="hidden md:block md:w-[35%] px-8">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCardList;
