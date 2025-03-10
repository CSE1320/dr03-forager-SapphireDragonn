"use client";  // Add this line at the top of the file

import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';
import PageHeader from '../helperfunctions/page_header';
import MainPolaroidComponent from '../helperfunctions/main_polaroid_for_page';
import PolaroidMushroomMatch from '../helperfunctions/polaroid_mushroom_match';
import PolaroidCard from '../helperfunctions/basic_polaroid';
import { DeathCapMushroom } from '@/data/development';
import ImageComponent from '../helperfunctions/image';
import PercentageMatchComponent from '../helperfunctions/percentage_match';
import ComparisonTable from './characteristics_comparison_table';

export default function MushroomComparisonPage() {

  const[isClosable, setClosable] = useState(true);
  const[isComparisonGoBack, setComparisonGoBack] = useState(false)
  const percentageScaleStyle = { transform: "scale(0.3)" };

  const skullImageSrc="icons/icon_match_skull.svg"
  const skullImageAlt="A danger icon represented as a gray skull with darker gray eye sockets."
  const skullImageStyling="h-3 w-3"

  return (
    <div className="page">
      <div>
        {/* Page Header */}
        <div className="overflow-hidden h-28 relative">
          <div className="absolute bottom-0 w-full">
            <PageHeader 
              HeaderStateValues={[isComparisonGoBack, setComparisonGoBack]} 
              Text="Match Results" />
          </div>
        </div>
      
      

        {/* Toxic Species Warning Message */}
        <div className="flex justify-center pt-4">
          <WarningMessage 
                msgHeading={"WARNING"} 
                msgBody={"This is a toxic species, proceed with caution."} 
                closable={[false, null, null]} 
          />
        </div>

        {/* Your Photo and Mushroom Photo */}
        <div className="flex flex-row justify-center">
          {/* Polaroid styling for Death Cap */}
        <div className="flex justify-center pt-4">
          <div className="flex flex-col justify-center items-center">
            <PolaroidCard
              mushroomSrc={DeathCapMushroom.image}
              mushroomSizing="w-36 h-44"
              cardSizing="w-44 h-56"
            />

            <h1 className="text-black font-nunito text-lg font-bold pt-2">
              Your Photo
            </h1>
          </div>


          <div className="flex flex-col justify-center items-center align-center pl-6">
            <div className="relative ">
              <div className="absolute flex flex-row items-center top-[-11px] left-4">
                <ImageComponent 
                    styling={skullImageStyling}
                    src={skullImageSrc}
                    alt={skullImageAlt}/>
                <div style={percentageScaleStyle} className="-ml-16">
                  <PercentageMatchComponent 
                      percentage="97"
                      backgroundStyling="warningRed" 
                      isOnBorder={true}/> 
                </div>
              </div>
              <PolaroidCard
                mushroomSrc={DeathCapMushroom.image}
                mushroomSizing="w-36 h-44"
                cardSizing="w-44 h-56"
              />
            </div>

            <h1 className="text-black font-nunito text-lg font-bold pt-2">
              Death Cap
            </h1>
          </div>
            

          </div>
        </div>

        <div className="flex justify-center pt-4 pb-20 pl-7 pr-7">
          <ComparisonTable/>
        </div>

        <NavBar />
      </div>
    </div>
  );
}
