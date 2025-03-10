import React, { useState } from "react";
import ButtonComponent from "./button";
import ImageComponent from "./image";

/*Basic Polaroid Card with mushroom image and border*/
const PillList = ({tagsArray}) => {
    const SelectedButtonBackground = "backgroundGreen w-auto pl-3 pr-3 rounded-2xl text-white font-nunito text-md";
    const DeselectedButtonBackground = "filterGray w-auto pl-3 pr-3 rounded-2xl text-black font-nunito text-md";
    const DisabledButtonBackground = "bg-black w-auto pl-3 pr-3 rounded-2xl text-white font-nunito text-md";


    return (
        <div className="flex flex-wrap gap-4 pt-4">
            {tagsArray.map(({ id, label, state }) => {
                const [isButton, setButton] = state;
                let buttonStyle = DeselectedButtonBackground;  // Default is Deselected

                if (isButton === true) {
                    buttonStyle = SelectedButtonBackground; // Selected style
                } else if (isButton === false) {
                    buttonStyle = DeselectedButtonBackground; // Deselected style
                } else if (isButton === null) {
                    buttonStyle = DisabledButtonBackground; // Disabled style
                }

                return (
                    <ButtonComponent
                        key={id}
                        isState={isButton}
                        setState={setButton}
                        styling={`${buttonStyle} ${isButton === null ? DisabledButtonBackground : isButton === true ? SelectedButtonBackground : DeselectedButtonBackground}`}
                        stateValues={[true, false, null]}
                    >
                        {label}
                    </ButtonComponent>
                );
            })}
        </div>
    );
};

export default PillList;
