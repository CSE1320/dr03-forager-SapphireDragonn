"use client";

import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBarComponent from './searchbar';
import React, { useState } from 'react';
import FilterComponent from './filter_button';
import FilterPage from './filter_page';

/* 
Filter button when clicked should have a state that when clicked is set to open
When the filter page pops up and is closed, SAME STATE should be set to closed
*/

export default function DashboardPage() {
  
  const[isClicked, setClicked] = useState(true);
  const[filterIsClicked, setFilterClicked] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  //state variables for the filter
  const filterValues=["Selected", "Deselected", "Disabled"]

  const[closeFilterIsClicked, setCloseFilterClicked] = useState(true)
  const[isFavoritesFilter, setFavoritesFilter] = useState(false)
  const[isRecentFilter, setRecentFilter] = useState(false)
  const[isTexasFilter, setTexasFilter] = useState(false)
  const[isNorthAmericaFilter, setNorthAmericaFilter] = useState(true)
  const[isSouthAmericaFilter, setSouthAmericaFilter] = useState(false)
  const[isAsiaFilter, setAsiaFilter] = useState(null)
  const[isEuropeFilter, setEuropeFilter] = useState(false)
  const[isAfricaFilter, setAfricaFilter] = useState(false)
  const[isPoisonousFilter, setPoisonousFilter] = useState(false)
  const[isMedicinalFilter, setMedicinalFilter] = useState(false)
  const[isMythicalFilter, setMythicalFilter] = useState(false)
  const[isBrothFilter, setBrothFilter] = useState(false)
  
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <NavBar />
      <SearchBarComponent buttonValues={[isClicked, setClicked]} searchStateValues={[searchInput, setSearchInput]}/>
      <FilterComponent filterStateValues={[isClicked, setClicked]}/>
      <div className=" flex justify-center align-center h-screen pt-6 pb-36 pl-4 pr-4">
        <FilterPage 
          closeButtonState={[closeFilterIsClicked, setFilterClicked]}
          favoritesFilter={[isFavoritesFilter, setFavoritesFilter]}
          recentFilter={[isRecentFilter, setRecentFilter]}
          texasFilter={[isTexasFilter, setTexasFilter]}
          northAmericaFilter={[isNorthAmericaFilter, setNorthAmericaFilter]}
          southAmericaFilter={[isSouthAmericaFilter, setSouthAmericaFilter]}
          asiaFilter={[isAsiaFilter, setAsiaFilter]}
          europeFilter={[isEuropeFilter, setEuropeFilter]}
          africaFilter={[isAfricaFilter, setAfricaFilter]}
          poisonousFilter={[isPoisonousFilter, setPoisonousFilter]}
          medicinalFilter={[isMedicinalFilter, setMedicinalFilter]}
          mythicalFilter={[isMythicalFilter, setMythicalFilter]}
          brothFilter={[isBrothFilter, setBrothFilter]}/>
      </div>

      </div>
      
  );
}
