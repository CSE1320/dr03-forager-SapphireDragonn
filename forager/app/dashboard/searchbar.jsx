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
const SearchBarComponent = ({ buttonValues, searchStateValues }) => {
    const [tempInput, setTempInput] = useState(""); // Local state to track user typing

    const searchButtonStyle = "w-5 h-5";
    const searchSrc = "icons/icon_search.svg";
    const searchAlt = "A search icon displayed as a magnifying glass with a black border.";

    // Update temp input as user types (but don't save to searchStateValues yet)
    const handleInputChange = (e) => {
        setTempInput(e.target.value);
    };

    // Save the input to searchStateValues when search button is clicked
    const handleSearchClick = () => {
        searchStateValues[1](tempInput);
    };

    // Save the input when Enter key is pressed
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchStateValues[1](tempInput);
        }
    };

    return (
        <div className="flex flex-row items-center bg-white border-2 rounded-full w-2/3 px-3">
            {/* Search Button */}
            <ButtonComponent    
                isState={buttonValues[0]} 
                setState={buttonValues[1]} 
                styling={searchButtonStyle}
                stateValues={[true, false]}
                onClick={handleSearchClick} // Save search term when clicked
            >
                <ImageComponent src={searchSrc} alt={searchAlt} />
            </ButtonComponent>

            {/* Search Input */}
            <input 
                type="text" 
                placeholder="Search for a mushroom" 
                className="pl-3 w-full outline-none bg-transparent text-gray-700"
                value={tempInput}  // Controlled by local state
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown} // Save input when Enter is pressed
            />
        </div>
    );
};

export default SearchBarComponent;