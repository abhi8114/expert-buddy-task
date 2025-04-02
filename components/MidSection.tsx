"use client";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { mockCards } from "@/app/api/cards/route";
import Filter from "@/components/Filter";
import ReactPaginate from "react-paginate";
import FilteredCardList from "./FilteredCardList";

const MidSection = () => {
  // const ITEMS_PER_PAGE = 8;
  // const [cards, setCards] = useState<any[]>(mockCards || []);
  // const [filteredCards, setFilteredCards] = useState<any[]>(mockCards || []);
  // const [currentPage, setCurrentPage] = useState(0);

  // Filter Logic
  // const handleFilterChange = ({ subject, type }: { subject: string; type: string }) => {
  //   let filtered = [...cards];

  //   if (subject) {
  //     filtered = filtered.filter((card) => card.subject === subject);
  //   }

  //   if (type) {
  //     filtered = filtered.filter((card) => card.type === type);
  //   }

  //   setFilteredCards(filtered);
  //   setCurrentPage(0); // Reset to first page on filter change
  // };

  // Initial Load
  // useEffect(() => {
  //   setFilteredCards(cards);
  // }, [cards]);

  // Pagination Logic
  // const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  // const currentCards = filteredCards.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className=" bg-[#F5F3EF]">

      <FilteredCardList />




    </div>
  );
};

export default MidSection;
