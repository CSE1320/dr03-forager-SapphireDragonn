import React, {useState} from "react";
import ButtonComponent from "../helperfunctions/button";
import ImageComponent from "../helperfunctions/image";

/*
Low Fidelity:
Parts:
    1. Search button:
        - need to take in input to determine if user clicked on it
        - IF clicked, trigger input bar
        - if not clicked, display standard search bar
        - once user navigates away from search bar, display original
    2. Search Input Bar
        - must take and store user input
        - display "search for a mushroom" until user enters input

*/


/*Basic Polaroid Card with mushroom image and border*/
const SearchBarComponent = ({buttonValues, searchStateValues}) => {
    const filterButtonStyle="w-5 h-5";
    const searchSrc="icons/icon_search.svg";
    const searchAlt="A search icon displayed as a magnifying glass with a black border.";
    
    const handleSearch = (e) => {
        searchStateValues[1](e.target.value)
    }

    return (
        <div className="flex flex-row items-center bg-white border-2 rounded-full w-2/3 px-3">
            <ButtonComponent    
                isState={buttonValues[0]} 
                setState={buttonValues[1]} 
                styling={filterButtonStyle}
                stateValues={["clicked", "notClicked"]}>
                <ImageComponent 
                    src={searchSrc} 
                    alt={searchAlt} />
            </ButtonComponent>
            <input 
                type="text" 
                placeholder="Search for a mushroom" 
                className="pl-3 w-full outline-none bg-transparent text-gray-700"
                value={searchStateValues[0]}
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchBarComponent;