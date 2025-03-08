"use client";  // Add this line at the top of the file
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';
import PolaroidCard from '../helperfunctions/polaroid_card';
import PercentageMatchComponent from '../helperfunctions/percentage_match';
import FastFactsComponent from './fast_facts';
import ReportErrorButton from './report_error';
import { DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom } from '@/data/development';

export default function MushroomPage() {
  const[isClosable, setClosable] = useState(true);
  const[isReportedError, setReportedError] = useState(false);

  const mushroom1 = "image/death_cap.png"
  const isOnBorder = false

  return (
    <div className="page">
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>

      {/* Percentage styling for top match card */}
      <div className="relative">
        <PolaroidCard mushroomSrc={mushroom1}/>
        <div className="absolute top-1 left-4  origin-top-left scale-50">
            <PercentageMatchComponent percentage="50" backgroundStyling="bg-red-500 bg-opacity-50" isOnBorder={true}/> 
        </div>
      </div>
          


    

      {/* <WarningMessage 
            msgHeading={"WARNING"} 
            msgBody={"This is a toxic species, proceed with caution."} 
            closable={[false, null, null]} 
          /> */}

      {/* Display the popup only if it is set to "open" */}
      {isClosable && (
          <WarningMessage 
            msgHeading={"ATTENTION"} 
            msgBody={"Our system can make mistakes! Verify important information and use your judgment."} 
            closable={[true, isClosable, setClosable]} 
          />
      )}
      <NavBar />

      <div className="pt-6">
        <FastFactsComponent errorState={[isReportedError, setReportedError]}/>
      </div>

      <div className="pt-6">
        <ReportErrorButton/>
      </div>

    </div>
    
  );
}
