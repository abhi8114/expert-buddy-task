"use client";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { mockCards } from "@/app/api/cards/route";
import Filter from "@/components/Filter";
import ReactPaginate from "react-paginate";
import FilteredCardList from "./FilteredCardList";

const MidSection = () => {
  return (
    <div className=" ">

      <FilteredCardList />




    </div>
  );
};

export default MidSection;
