import React, { useState } from "react";
import ButtonComponent from "../helperfunctions/button";
import ImageComponent from "../helperfunctions/image";

const FilterPage = ({
    closeButtonState, 
    favoritesFilter, 
    recentFilter, 
    texasFilter, 
    northAmericaFilter, 
    southAmericaFilter, 
    asiaFilter, 
    europeFilter, 
    africaFilter, 
    poisonousFilter, 
    medicinalFilter, 
    mythicalFilter, 
    brothFilter
}) => {
    // Define button styles
    const SelectedButtonBackground = "backgroundGreen w-auto pl-3 pr-3 rounded-2xl text-white font-nunito text-md";
    const DeselectedButtonBackground = "filterGray w-auto pl-3 pr-3 rounded-2xl text-black font-nunito text-md";
    const DisabledButtonBackground = "bg-black w-auto pl-3 pr-3 rounded-2xl text-white font-nunito text-md";

    const closeButtonStyling = "w-6 h-6";
    const closeButtonSrc = "icons/icon_close.svg";
    const closeButtonAlt = "A close icon represented by a black x";

    // Options for filter buttons
    const tagsOptions = [
        { id: "favorites", label: "Favorites", state: favoritesFilter },
        { id: "recent", label: "Recent", state: recentFilter },
    ];

    const regionsOptions = [
        { id: "texas", label: "Texas", state: texasFilter },
        { id: "northAmerica", label: "North America", state: northAmericaFilter },
        { id: "southAmerica", label: "South America", state: southAmericaFilter },
        { id: "asia", label: "Asia", state: asiaFilter },
        { id: "europe", label: "Europe", state: europeFilter },
        { id: "africa", label: "Africa", state: africaFilter },
    ];

    const categoryOptions = [
        { id: "poisonous", label: "Poisonous", state: poisonousFilter },
        { id: "medicinal", label: "Medicinal", state: medicinalFilter },
        { id: "mythical", label: "Mythical", state: mythicalFilter },
        { id: "broth", label: "Good for Broths", state: brothFilter },
    ];

    return (
        <div className="flex flex-col bg-white rounded-3xl h-full w-full border-2">
            {/* Filter Heading */}
            <div className="flex items-center justify-between w-full pl-6 pr-8  pt-4">
                <div className="flex-1 flex justify-center">
                    <h1 className="text-black font-bold font-nunito text-lg">
                        FILTER
                    </h1>
                </div>

                {/* Close Button */}
                <ButtonComponent
                    isState={closeButtonState[0]}
                    setState={closeButtonState[1]}
                    styling={closeButtonStyling}
                    stateValues={[true, false]}
                >
                    <ImageComponent src={closeButtonSrc} alt={closeButtonAlt} />
                </ButtonComponent>
            </div>

            {/* Tags Section */}
            <h1 className="text-black font-bold font-nunito text-2xl pt-6 pl-8">Tags</h1>
            <div className="flex flex-wrap gap-4 pt-4 pl-8 pr-8">
                {tagsOptions.map(({ id, label, state }) => {
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

            {/* Regions Section */}
            <h1 className="text-black font-bold font-nunito text-2xl pt-8 pl-8">Regions</h1>
            <div className="flex flex-wrap gap-4 pt-4 pl-8 pr-8">
                {regionsOptions.map(({ id, label, state }) => {
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

            {/* Categories Section */}
            <h1 className="text-black font-bold font-nunito text-2xl pt-8 pl-8">Category</h1>
            <div className="flex flex-wrap gap-4 pt-4 pl-8 pr-8">
                {categoryOptions.map(({ id, label, state }) => {
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
        </div>
    );
};

export default FilterPage;
