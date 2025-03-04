"use client";

import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBarComponent from './searchbar';
import React, { useState } from 'react';
import FilterComponent from './filter';


export default function DashboardPage() {
  
  const[isClicked, setClicked] = useState(true);
  const[filterIsClicked, setFilterClicked] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput)
  
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <NavBar />
      <SearchBarComponent buttonValues={[isClicked, setClicked]} searchStateValues={[searchInput, setSearchInput]}/>
      <FilterComponent filterStateValues={[isClicked, setClicked]}/>
    </div>
  );
}
