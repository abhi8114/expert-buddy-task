"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "@/components/Filter";
import Card from "@/components/Card";
import { mockCards } from "@/data";

const ITEMS_PER_PAGE = 6; // Number of items per page



export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Filter data based on query
  useEffect(() => {
    const filtered = mockCards.filter(
      (card) =>
        card.subject.toLowerCase().includes(query.toLowerCase()) ||
        card.type.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setFilteredCards(filtered);
  }, [query]);

  // Handle Filter Changes
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
    setCurrentPage(0); // Reset to first page when filter changes
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const currentCards = filteredCards.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="pt-20 bg-[#F5F3EF] p-6">
      <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>
      <h4>{filteredCards.length} results</h4>
      <div className="flex max-w-[1200px] mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-[65%]">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <Card key={card.id} id={card.id} subject={card.subject} type={card.type} words={card.words} content={card.content} />
            ))
          ) : (
            <p className="text-center col-span-2">No results found.</p>
          )}

          {/* Pagination */}
          {filteredCards.length > ITEMS_PER_PAGE && (
            <div className="flex gap-x-4 mt-6 justify-center col-span-2">
              {/* First Page Button */}
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

              {/* Last Page Button */}
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
}
