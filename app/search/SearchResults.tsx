// app/search/SearchResults.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "@/components/Filter";
import Card from "@/components/Card";
import { mockCards } from "@/data";

const ITEMS_PER_PAGE = 6;

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const filtered = mockCards.filter(
      (card) =>
        card.subject.toLowerCase().includes(query.toLowerCase()) ||
        card.type.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setFilteredCards(filtered);
  }, [query]);

  const handleFilterChange = ({ subject, type, words }: { subject: string; type: string; words: number[] }) => {
    let filtered = [...results];

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

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const currentCards = filteredCards.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="pt-16 md:pt-20 bg-[#F5F3EF] p-4 sm:p-6">
      <h1 className="text-xl sm:text-5xl font-bold mb-3 sm:mb-4 dm-sans">Results for "{query}"</h1>
      <h4 className="text-sm sm:text-[23px] dm-sans font-bold text-[#A414D5]">{filteredCards.length} results</h4>
      
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-6">
        {/* Cards Grid */}
        <div className="w-full lg:w-[65%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
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

          {/* Pagination */}
          {filteredCards.length > ITEMS_PER_PAGE && (
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center">
              {/* First Page Button */}
              <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] text-xs sm:text-sm bg-white ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
                }`}
                onClick={() => setCurrentPage(0)}
                disabled={currentPage === 0}
              >
                « First
              </button>
            
              {/* React Paginate */}
              <ReactPaginate
                previousLabel={<span className="cursor-pointer text-xs sm:text-sm">&lt; Back</span>}
                nextLabel={<span className="cursor-pointer text-xs sm:text-sm">Next &gt;</span>}
                breakLabel={<span className="text-xs sm:text-sm">...</span>}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName="flex justify-center items-center gap-1 sm:gap-2"
                pageClassName="px-2 py-1 sm:px-3 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer text-xs sm:text-sm bg-white hover:bg-gray-50"
                activeClassName="!bg-purple-600 !text-white font-bold border-purple-600"
                previousClassName="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer bg-white hover:bg-gray-50"
                nextClassName="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] cursor-pointer bg-white hover:bg-gray-50"
                disabledClassName="opacity-50 cursor-not-allowed bg-white"
              />
            
              {/* Last Page Button */}
              <button
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-[#E9E9E9] text-xs sm:text-sm bg-white ${
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

        {/* Filter Section */}
        <div className="w-full lg:w-[35%] px-0 lg:px-8 mt-6 lg:mt-0">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
}