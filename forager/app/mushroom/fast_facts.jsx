import { DeathCapMushroom } from '@/data/development';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';

/*Fast Facts Component*/

export default function FastFactsComponent() {
    const capDiameter="Cap Diameter: " + DeathCapMushroom.characteristics.capDiameter + " cm"
    const gillColor="Gill Color: " + DeathCapMushroom.characteristics.gillsColor + ""
    const stemColor="Stem Color: " + DeathCapMushroom.characteristics.stemColor + ""
    const habitat="Habitat: " + DeathCapMushroom.characteristics.habitat + ""
    const textStyling="font-nunito text-base text-white"
    const textStylingBold="font-nunito text-base font-bold text-white pb-2"
    return (
    <div className="flex align-center flex-col p-5 bg-amber-900 w-5/6 h-auto rounded-3xl">
        <h1 className={textStylingBold}>
            Fast Facts
        </h1>
        <h1 className={textStyling}>
            {capDiameter}
        </h1>
        <h1 className={textStyling}>
            {gillColor}
        </h1>
        <h1 className={textStyling}>
            {stemColor}
        </h1>
        <h1 className={textStyling}>
            {habitat}
        </h1>
    </div>
    );
}