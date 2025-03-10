import React from "react";
import ImageComponent from "./image";
import ButtonComponent from "./button";

const PageHeader = ({ HeaderStateValues, Text }) => {
    const backStyling = "w-8"; // Correct width for the back arrow icon
    const backSrc = "icons/icon_back_arrow.svg";
    const backAlt = "A warning icon depicted as a white triangular icon with rounded corners with a white exclamation point inside.";

    return (
        <div className="flex items-end backgroundGreen w-full h-56 pb-5 pl-6 pr-8 rounded-3xl">
            <div className="flex w-full items-center justify-between">
                <ButtonComponent    
                    isState={HeaderStateValues[0]} 
                    setState={HeaderStateValues[1]} 
                    styling={backStyling}
                    stateValues={[true, false]}>
                    <ImageComponent 
                        src={backSrc} 
                        alt={backAlt} />
                </ButtonComponent>

                <h1 className="text-white font-nunito text-4xl mx-auto">
                    {Text}
                </h1>
            </div>
        </div>
    );
};

export default PageHeader;
