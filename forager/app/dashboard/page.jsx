"use client";

import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBarComponent from './searchbar';
import React, { useState } from 'react';


export default function DashboardPage() {
  
  const[isClicked, setClicked] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <NavBar />
      <SearchBarComponent buttonValues={[isClicked, setClicked]} searchStateValues={[searchInput, setSearchInput]}/>
    </div>
  );
}
