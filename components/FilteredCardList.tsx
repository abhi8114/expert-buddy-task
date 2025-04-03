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
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleFilterChange = ({ subject, type, words }: { subject: string; type: string; words: number[] }) => {
    let filtered = [...cards];

    if (subject) {
      filtered = filtered.filter((card) => card.subject === subject);
    }

    if (type) {
      filtered = filtered.filter((card) => card.type === type);
    }

    if (words && words.length === 2) {
      filtered = filtered.filter((card) => card.words >= words[0] && card.words <= words[1]);
    }

    setFilteredCards(filtered);
    setCurrentPage(0);
  };

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const currentCards = filteredCards.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="pt-16 md:pt-20 bg-[#F5F3EF]">
      <div className="relative">
        <Image
          src="/vector.svg"
          alt="Vector decoration"
          width={60}
          height={80}
          className="absolute -top-4 left-[10%] -translate-x-1/2 w-12 md:w-16 z-10"
        />
        <h1 className="mt-10 md:mt-12 text-2xl md:text-4xl lg:text-5xl text-center font-bold px-4 relative z-0">
          Find Writing Inspiration in Our Data Base
        </h1>
      </div>

      <div className="md:hidden flex justify-center mt-6">
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md"
        >
          {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto mt-6 md:mt-10 p-4 md:p-6">
        <div className="w-full lg:w-[65%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  subject={card.subject}
                  type={card.type}
                  words={card.words}
                  content={card.content}
                />
              ))
            ) : (
              <p className="text-center col-span-2">No results found.</p>
            )}
          </div>

          {filteredCards.length > itemsPerPage && (
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-6 justify-center items-center">
              <button
                className={`px-3 py-2 rounded-md border border-[#E9E9E9] bg-white text-xs sm:text-sm hidden md:block ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                }`}
                onClick={() => setCurrentPage(0)}
                disabled={currentPage === 0}
              >
                « First
              </button>

              <ReactPaginate
                previousLabel={<span className="cursor-pointer text-xs sm:text-sm">&lt; Back</span>}
                nextLabel={<span className="cursor-pointer text-xs sm:text-sm">Next &gt;</span>}
                breakLabel={<span className="text-xs sm:text-sm">...</span>}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName="flex flex-wrap justify-center items-center gap-1 sm:gap-2"
                pageClassName="px-2 py-1 sm:px-3 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer text-xs sm:text-sm bg-white hover:bg-gray-50"
                activeClassName="!bg-purple-600 !text-white font-bold border-purple-600"
                previousClassName="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer bg-white hover:bg-gray-50"
                nextClassName="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer bg-white hover:bg-gray-50"
                disabledClassName="opacity-50 cursor-not-allowed bg-white"
              />

              <button
                className={`px-3 py-2 rounded-md border border-[#E9E9E9] bg-white text-xs sm:text-sm hidden md:block ${
                  currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                }`}
                onClick={() => setCurrentPage(totalPages - 1)}
                disabled={currentPage === totalPages - 1}
              >
                Last »
              </button>
            </div>
          )}
        </div>

        <div className={`${showMobileFilter ? 'block' : 'hidden'} md:block w-full lg:w-[35%] px-0 md:px-6 md:pl-8 mt-6 md:mt-0`}>
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCardList;