import React, { useState } from 'react';
import NavBar from './NavBar';
import WarningMessage from './warning_message';
import MainPolaroidComponent from './main_polaroid_for_page';
import AddToFavoritesButton from '../app/mushroom/add_to_favorites';
import FastFactsComponent from '../app/mushroom/fast_facts';
import { DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom } from '@/data/development';


export default function Mushroom({ favoritedStateVals, errorStateVals }) {
    const capDiameter="Cap Diameter: " + DeathCapMushroom.characteristics.capDiameter + " cm"
    const gillColor="Gill Color: " + DeathCapMushroom.characteristics.gillsColor + ""
    const stemColor="Stem Color: " + DeathCapMushroom.characteristics.stemColor + ""
    const habitat="Habitat: " + DeathCapMushroom.characteristics.habitat + ""
    const textStyling="font-nunito text-base text-white"
    const textStylingBold="font-nunito text-base font-bold text-white pb-2"
    return (
        <div>
            {/* Polaroid styling for Death Cap */}
            <div className="flex justify-center pt-4">
            <MainPolaroidComponent 
                mushroomSrc="image/death_cap.png" 
                percentage="50" 
                backgroundStyling="warningRed" 
                isOnBorder={true} 
                mushroomSizing="w-72 h-80"
                cardSizing="w-80 h-96"/>
            </div>
    
    
            {/* Common and Scientific Mushroom Name and favorites button*/}
            <div className="flex flex-row justify-between pt-4 pl-9 pr-9">
            {/* Mushroom Names */}
            <div className="flex flex-col">
                <h1 className="text-black font-nunito text-2xl font-bold">
                {DeathCapMushroom.names.commonName}
                </h1>
                <h1 className="text-black font-nunito text-xl italic">
                {DeathCapMushroom.names.scientificName}
                </h1>
            </div>
    
            {/* Favorites Button */}
            <div className="pt-3">
                <AddToFavoritesButton 
                favoriteStateValues={[favoritedStateVals[0], favoritedStateVals[1]]}
                />
            </div>
            </div>
    
            {/* Fast Facts About Mushroom */}
            <div className="pt-6 flex justify-center">
            <FastFactsComponent errorState={[errorStateVals[0], errorStateVals[1]]}/>
            </div>
    
            {/* Mushroom General Description */}
            <div className="flex pt-6 pl-9 pr-9 justify-center items-center">
            <h1 className="text-black font-nunito text-md">
                {DeathCapMushroom.characteristics.generalDescription}
            </h1>
            </div>
        </div>
    );
}


        