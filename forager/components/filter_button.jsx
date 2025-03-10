import React, {useState} from "react";
import ButtonComponent from "./button";
import ImageComponent from "./image";


/*Basic Polaroid Card with mushroom image and border*/
const FilterComponent = ({filterStateValues}) => {
    const filterButtonStyle="w-5 h-5";
    const filterSrc="icons/icon_filter.svg";
    const filterAlt="A filter icon with a geometric shape reminiscent of a funnel or an upside-down beaker colored in green.";

    return (
        <div className="flex flex-row items-center">
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