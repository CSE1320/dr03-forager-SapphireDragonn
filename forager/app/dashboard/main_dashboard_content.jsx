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
    
        // Filter mushrooms based on the applied filters
        let filteredMushrooms = mushrooms.filter((mushroom) => {
          return appliedFilters.every((filter) => {
            const { id } = filter;
            switch (id) {
              case "favorites":
                return mushroom.filters.tags.isFavorites === "Yes";
              case "recent":
                return mushroom.filters.tags.isRecent === "Yes";
              case "texas":
                return mushroom.filters.regions.inTexas === "Yes";
              case "northAmerica":
                return mushroom.filters.regions.inNorthAmerica === "Yes";
              case "southAmerica":
                return mushroom.filters.regions.inSouthAmerica === "Yes";
              case "asia":
                return mushroom.filters.regions.inAsia === "Yes";
              case "europe":
                return mushroom.filters.regions.inEurope === "Yes";
              case "africa":
                return mushroom.filters.regions.inAfrica === "Yes";
              case "poisonous":
                return mushroom.filters.category.isPoisonous === "Yes";
              case "medicinal":
                return mushroom.filters.category.isMedicinal === "Yes";
              case "mythical":
                return mushroom.filters.category.isMythical === "Yes";
              case "broth":
                return mushroom.filters.category.isGoodForBroths === "Yes";
              default:
                return true;
            }
          });
        });
    
        // If there is search input, filter mushrooms based on the title (case insensitive)
        if (searchValues[0]) {
          filteredMushrooms = filteredMushrooms.filter((mushroom) => 
            mushroom.names.commonName.toLowerCase().includes(searchValues[0].toLowerCase()) 
        //   ||
        //     mushroom.names.scientificName.toLowerCase().includes(searchValues[0].toLowerCase())
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
