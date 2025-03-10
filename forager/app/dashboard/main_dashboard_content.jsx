import React, { useState } from "react";
import ButtonComponent from "../helperfunctions/button";
import ImageComponent from "../helperfunctions/image";
import SearchBarComponent from "./searchbar";
import FilterComponent from "./filter_button";
import PolaroidMushroomMatch from "../helperfunctions/polaroid_mushroom_match";
import PolaroidCard from "../helperfunctions/basic_polaroid";
import { DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom } from "@/data/development";

const MainDashboardPage = ({filterValues, searchValues, hitSearchValues, appliedFilters}) => {
    const filterButtonBackground = "backgroundGreen w-auto pl-3 pr-3 rounded-2xl text-white font-nunito text-md";
    const mushroomSize="w-32 h-40"
    const cardSize="w-36 h-48"

    const warningStyling="w-6 h-6"
    const warningSrc="icons/icon_red_warning.svg"
    const warningAlt="A warning icon depicted as a red, fully-filled triangular icon with rounded corners with a white exclamation point inside."

    // Function to filter mushrooms based on selected filters
    const relevantMushrooms = () => {
        const mushrooms = [
          DeathCapMushroom,
          PaddyStrawMushroom,
          DestroyingAngelMushroom,
          FalseDeathCapMushroom,
          PuffballMushroom,
        ];
    
        // If no filters are applied, return all mushrooms
        let filteredMushrooms = mushrooms.filter((mushroom) => mushroom.inMyCollection);

        if (appliedFilters.length > 0) {
            filteredMushrooms = mushrooms.filter((mushroom) => {
                return appliedFilters.some((filter) => {
                    const { id } = filter;
                    switch (id) {
                        case "favorites":
                            return mushroom.filters.tags.isFavorites === "Yes" && mushroom.inMyCollection === true;
                        case "recent":
                            return mushroom.filters.tags.isRecent === "Yes" && mushroom.inMyCollection === true;
                        case "texas":
                            return mushroom.filters.regions.inTexas === "Yes" && mushroom.inMyCollection === true;
                        case "northAmerica":
                            return mushroom.filters.regions.inNorthAmerica === "Yes" && mushroom.inMyCollection === true;
                        case "southAmerica":
                            return mushroom.filters.regions.inSouthAmerica === "Yes" && mushroom.inMyCollection === true;
                        case "asia":
                            return mushroom.filters.regions.inAsia === "Yes" && mushroom.inMyCollection === true;
                        case "europe":
                            return mushroom.filters.regions.inEurope === "Yes" && mushroom.inMyCollection === true;
                        case "africa":
                            return mushroom.filters.regions.inAfrica === "Yes" && mushroom.inMyCollection === true;
                        case "poisonous":
                            return mushroom.filters.category.isPoisonous === "Yes" && mushroom.inMyCollection === true;
                        case "medicinal":
                            return mushroom.filters.category.isMedicinal === "Yes" && mushroom.inMyCollection === true;
                        case "mythical":
                            return mushroom.filters.category.isMythical === "Yes" && mushroom.inMyCollection === true;
                        case "broth":
                            return mushroom.filters.category.isGoodForBroths === "Yes" && mushroom.inMyCollection === true;
                        default:
                            return true;
                    }
                });
            });
        }
    
        // Apply the search term filter
        if (searchValues[0]) {
            filteredMushrooms = filteredMushrooms.filter((mushroom) => 
                mushroom.names.commonName.toLowerCase().includes(searchValues[0].toLowerCase()) 
            // ||
                // mushroom.names.scientificName.toLowerCase().includes(searchValues[0].toLowerCase())
            );
        }
    
        return filteredMushrooms;
    };
  


    return (
        <div className="backgroundGray border-2 h-full pt-8 pb-8 w-full rounded-3xl flex-col">
            <div className="flex flex-row space-x-6 pl-6">
                <SearchBarComponent 
                    buttonValues={[hitSearchValues[0], hitSearchValues[1]]} 
                    searchStateValues={[searchValues[0], searchValues[1]]}/>
                <FilterComponent 
                    filterStateValues={[filterValues[0], filterValues[1]]}/>
            </div>

            <h1 className="text-black font-bold font-nunito text-xl pl-6 pt-8">
                My Collection
            </h1>

            {/* Filter Pills */}
            <div className="pl-6 space-x-4 pt-4">
                {appliedFilters.map(({ id, label}) => {
                    return (
                        <div key={id} className={`${filterButtonBackground} inline-block`}>
                            {label}
                        </div>
                    );
                })}

            </div>

            {/* Mushroom Matches for Filter */}
            <div className="pl-6 pr-6 pt-6 items-center justify-center align-center">
                <ul className="flex flex-wrap gap-6">
                    {relevantMushrooms().map((mushroom, index) => (
                        <div key={mushroom.names.scientificName + index} className="relative flex flex-col">
                            <PolaroidCard
                                mushroomSrc={mushroom.image}
                                mushroomSizing={mushroomSize}
                                cardSizing={cardSize}
                                isOnBorder={false}
                            />
                            {mushroom.isToxic && (
                                <div className="absolute top-6 left-6">
                                    <ImageComponent
                                        styling={warningStyling}
                                        src={warningSrc}
                                        alt={warningAlt}
                                    />
                                </div>
                            )}
                            <h1 className="text-black font-bold font-nunito text-center text-md pt-2">
                                {mushroom.names.commonName}
                            </h1>
                        </div>
                    ))}

                </ul>
            </div>
            
            
        </div>
    );
};

export default MainDashboardPage;
