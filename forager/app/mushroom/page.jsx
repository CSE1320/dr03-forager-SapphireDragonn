"use client";  // Add this line at the top of the file
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';
import PolaroidCard from '../helperfunctions/basic_polaroid';
import PolaroidMushroomMatch from '../helperfunctions/polaroid_mushroom_match';
import MainPolaroidComponent from '../helperfunctions/main_polaroid_for_page';
import PercentageMatchComponent from '../helperfunctions/percentage_match';
import FastFactsComponent from './fast_facts';
import ReportErrorButton from './report_error';
import CompareButton from './compare';
import AddToFavoritesButton from './add_to_favorites';
import PageHeader from '../helperfunctions/page_header';
import ButtonComponent from '../helperfunctions/button';
import ImageComponent from '../helperfunctions/image';
import PercentageMessage from './percentage_message';
import MushroomList from '../helperfunctions/mushroom_list';
import { useMushroomContext } from '../context/MushroomContext';
import { useRouter } from 'next/navigation';
import { DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom } from '@/data/development';

export default function MushroomPage() {
  const[isClosable, setClosable] = useState(true);
  const[isClosablePercentage, setClosablePercentage] = useState(true);
  const[isReportedError, setReportedError] = useState(false);
  const[isFavorited, setFavorited] = useState(false)
  const[isMatchGoBack, setMatchGoBack] = useState(false)

  // Use the previous page from context
  const { previousPage } = useMushroomContext();
  const router = useRouter();

  const handleGoBack = () => {
    if (previousPage) {
      router.push(previousPage); // Navigate to last visited page
    } else {
      router.push("/dashboard"); // Default to dashboard if no previous page
    }
  };

  //To add to Collection
  const { mushrooms, toggleCollection } = useMushroomContext();

  const mushroomSize="w-32 h-40"
  const cardSize="w-36 h-48"
  const percentageMessageStyling={ top: '30%'}

  const backStyling = "w-8"; // Correct width for the back arrow icon
  const backSrc = "icons/icon_back_arrow.svg";
  const backAlt = "A warning icon depicted as a white triangular icon with rounded corners with a white exclamation point inside.";


  const MushroomMatchesArray = [{
                                  id: PaddyStrawMushroom.names.scientificName,
                                  mushroomSrc: PaddyStrawMushroom.image, 
                                  name: PaddyStrawMushroom.names.commonName,
                                  percentage: 90, 
                                  backgroundStyling: "backgroundGreen",
                                  isOnBorder: false,
                                  mushroomSizing: mushroomSize,
                                  cardSizing: cardSize},
                                {
                                  id: DestroyingAngelMushroom.names.scientificName,
                                  mushroomSrc: DestroyingAngelMushroom.image,
                                  name: DestroyingAngelMushroom.names.commonName, 
                                  percentage: 80, 
                                  backgroundStyling: "warningRed",
                                  isOnBorder: false,
                                  mushroomSizing: mushroomSize,
                                  cardSizing: cardSize},
                                {
                                  id: FalseDeathCapMushroom.names.scientificName,
                                  mushroomSrc: FalseDeathCapMushroom.image, 
                                  name: FalseDeathCapMushroom.names.commonName, 
                                  percentage: 70, 
                                  backgroundStyling: "warningRed",
                                  isOnBorder: false,
                                  mushroomSizing: mushroomSize,
                                  cardSizing: cardSize},
                                {
                                  id: PuffballMushroom.names.scientificName,
                                  mushroomSrc: PuffballMushroom.image, 
                                  name: PuffballMushroom.names.commonName,
                                  percentage: 60, 
                                  backgroundStyling: "backgroundGreen",
                                  isOnBorder: false,
                                  mushroomSizing: mushroomSize,
                                  cardSizing: cardSize}]




  const mushroom1 = "image/death_cap.png"
  const isOnBorder = false

  return (
    <div className="page">
      <div className="flex flex-col">
        {/* Page Header */}
        <div className="overflow-hidden h-28 relative">
          <div className="absolute bottom-0 w-full">
            <PageHeader 
              Text="Match Results">
                  <Link href={previousPage || "/dashboard"}>
                    <ButtonComponent    
                          isState={isMatchGoBack} 
                          setState={setMatchGoBack} 
                          styling={backStyling}
                          stateValues={[true, false]}>
                          <ImageComponent 
                              src={backSrc} 
                              alt={backAlt} />
                      </ButtonComponent>
                  </Link>
              </PageHeader>
          </div>
        </div>

        {/* Report an error with the result */}
        <div className="flex flex-row justify-between items-center pl-9 pr-9 pt-4">
          <p className="text-gray-500 font-nunito text-sm">
            Not what you expected?
          </p>
          <ReportErrorButton/>
        </div>

        {/* Toxic Species Warning Message */}
        <div className="flex justify-center pt-4">
          <WarningMessage 
                msgHeading={"WARNING"} 
                msgBody={"This is a toxic species, proceed with caution."} 
                closable={[false, null, null]} 
          />
        </div>

        {/* Button to Link to Compare Page */}
        <div className="flex justify-end pt-4 pr-9">
          <Link href="/comparison">
            <CompareButton/>
          </Link>
        </div>

        {/* Polaroid styling for Death Cap */}
        <div className="flex justify-center pt-4">
          <MainPolaroidComponent 
            mushroomSrc={mushroom1} 
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
              favoriteStateValues={[isFavorited, setFavorited]}
            />
          </div>
        </div>

        {/* Fast Facts About Mushroom */}
        <div className="pt-6 flex justify-center">
          <FastFactsComponent errorState={[isReportedError, setReportedError]}/>
        </div>

        {/* Mushroom General Description */}
        <div className="flex pt-6 pl-9 pr-9 justify-center items-center">
          <h1 className="text-black font-nunito text-md">
            {DeathCapMushroom.characteristics.generalDescription}
          </h1>
        </div>
        

        {/* Similar Matches */}
        <div className="flex justify-center pt-6">
          <h1 className="text-black font-nunito text-2xl font-bold">
            Similar Matches
          </h1>
        </div>
        
        {/* List of Mushroom Matches */}
        <div className="relative">
          <div className="justify-center flex pt-6 pb-20 w-full pl-9 pr-9">
            <MushroomList MushroomMatchesArray={MushroomMatchesArray}/>
          </div>

          {/* percentages Popup: Display the error popup only if it is set to "open" */}
          {isClosablePercentage && (
            <div 
              className="absolute inset-x-0 top-0 flex justify-center items-center z-50" 
              style={percentageMessageStyling} // Using percentage to position the message
            >
              <div className="relative flex justify-center items-center">
                <PercentageMessage
                  msgBody={"Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                  closable={[true, isClosablePercentage, setClosablePercentage]}
                />
              </div>
            </div>
          )}
        </div>
        
            
            
        <NavBar />

        {/* Error Popup: Display the error popup only if it is set to "open" */}
        {isClosable && (
          <div className="absolute flex align-center w-full h-full bg-white bg-opacity-10 backdrop-blur-lg ">
            <div className="relative flex justify-center items-center">
              <WarningMessage
                msgHeading={"ATTENTION"}
                msgBody={"Our system can make mistakes! Verify important information and use your judgment."}
                closable={[true, isClosable, setClosable]}
              />
            </div>
          </div>
        )}

        

      </div>
    </div>
    
  );
}
