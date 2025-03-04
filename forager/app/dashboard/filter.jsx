import React, {useState} from "react";
import ButtonComponent from "../helperfunctions/button";
import ImageComponent from "../helperfunctions/image";


/* 
Filter button when clicked should have a state that when clicked is set to open
When the filter page pops up and is closed, SAME STATE should be set to closed
*/

/*Basic Polaroid Card with mushroom image and border*/
const FilterComponent = ({filterStateValues}) => {
    const filterButtonStyle="w-5 h-5";
    const filterSrc="icons/icon_filter.svg";
    const filterAlt="A filter icon with a geometric shape reminiscent of a funnel or an upside-down beaker colored in green.";

    return (
        <div className="flex flex-row items-center bg-white border-2 rounded-full w-2/3 px-3">
            <ButtonComponent    
                isState={filterStateValues[0]} 
                setState={filterStateValues[1]} 
                styling={filterButtonStyle}
                stateValues={[true, false]}>
                <ImageComponent 
                    src={filterSrc} 
                    alt={filterAlt} />
            </ButtonComponent>
        </div>
    );
}

export default FilterComponent;