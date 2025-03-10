"use client";

import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBarComponent from '../../components/search';
import React, { useState, useEffect } from 'react';
import FilterComponent from '../../components/filter_button';
import FilterPage from '../../components/filter_settings';
import MainDashboardPage from './main_dashboard_content';
import ImageComponent from '../../components/image';

/* 
Filter button when clicked should have a state that when clicked is set to open
When the filter page pops up and is closed, SAME STATE should be set to closed
*/

export default function DashboardPage() {

  const mushroomStyling="w-50 h-50"
  const mushroomSrc="icons/icon_dashboard_mushroom.svg"
  const mushroomAlt="A slightly angled green mushroom with three transparent holes in the mushroom cap and a thick stem."
  
  const[isClicked, setClicked] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const[isSearched, setSearched] = useState(true)

  //state variables for the filter
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

  // Store the names of selected filters
  const [appliedFilters, setAppliedFilters] = useState([]);

  // Store and update all applied filter values
  useEffect(() => {
    const filters = [];
    
    // Check each filter and add to appliedFilters if it's selected
    if (isFavoritesFilter) filters.push({ id: "favorites", label: "Favorites", filter: "isFavorites"});
    if (isRecentFilter) filters.push({ id: "recent", label: "Recent", filter: "isRecent" });
    if (isTexasFilter) filters.push({ id: "texas", label: "Texas", filter: "inTexas" });
    if (isNorthAmericaFilter) filters.push({ id: "northAmerica", label: "North America", filter: "inNorthAmerica" });
    if (isSouthAmericaFilter) filters.push({ id: "southAmerica", label: "South America", filter: "inSouthAmerica" });
    if (isAsiaFilter) filters.push({ id: "asia", label: "Asia", filter: "inAsia" });
    if (isEuropeFilter) filters.push({ id: "europe", label: "Europe", filter: "inEurope" });
    if (isAfricaFilter) filters.push({ id: "africa", label: "Africa", filter: "inAfrica" });
    if (isPoisonousFilter) filters.push({ id: "poisonous", label: "Poisonous", filter: "isPoisonous" });
    if (isMedicinalFilter) filters.push({ id: "medicinal", label: "Medicinal", filter: "isMedicinal" });
    if (isMythicalFilter) filters.push({ id: "mythical", label: "Mythical", filter: "isMythical" });
    if (isBrothFilter) filters.push({ id: "broth", label: "Good for Broths", filter: "isGoodForBroths" });
    
    setAppliedFilters(filters);
  }, [
    isFavoritesFilter,
    isRecentFilter,
    isTexasFilter,
    isNorthAmericaFilter,
    isSouthAmericaFilter,
    isAsiaFilter,
    isEuropeFilter,
    isAfricaFilter,
    isPoisonousFilter,
    isMedicinalFilter,
    isMythicalFilter,
    isBrothFilter
  ]);
  
  return (
    <div className="dashboardGreen relative flex flex-col w-full h-full">
      <NavBar/>

      <div className="absolute right-0 z-0">
        <ImageComponent
          styling={mushroomStyling}
          src={mushroomSrc}
          alt={mushroomAlt}/>
      </div>

      <div className="z-10">
        <h1 className="text-white font-bold font-nunito text-xl pl-6 pt-12">
          Hi,
        </h1>

        <div className="flex flex-row pl-6 pr-6 pt-2 justify-between items-center align-center">
          <h1 className="text-white font-bold font-nunito text-4xl">
            Chantelle!
          </h1>

          <div className="flex items-center justify-center h-12 w-12 profileBrown rounded-full">
            <h1 className="text-white font-nunito text-2xl">
              C
            </h1>
          </div>

        </div>

        <div className="pt-6 pb-20 h-full">
          <MainDashboardPage 
            filterValues={[closeFilterIsClicked, setCloseFilterClicked]}
            searchValues={[searchInput, setSearchInput]}
            hitSearchValues={[isSearched, setSearched]}
            appliedFilters={appliedFilters} />
        </div>

        {!closeFilterIsClicked && (
          <div className="absolute top-16 -left-2 flex align-center w-full h-full">
            <div className=" relative flex justify-center align-center h-full pt-6 pb-36 pl-4 pr-4">
                <FilterPage 
                  closeButtonState={[closeFilterIsClicked, setCloseFilterClicked]}
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
        )}

      </div>
      

    </div>
      
  );
}
