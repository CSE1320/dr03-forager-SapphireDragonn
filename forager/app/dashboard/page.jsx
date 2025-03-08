"use client";

import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBarComponent from './searchbar';
import React, { useState } from 'react';
import FilterComponent from './filter';


/* 
Filter button when clicked should have a state that when clicked is set to open
When the filter page pops up and is closed, SAME STATE should be set to closed
*/

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
