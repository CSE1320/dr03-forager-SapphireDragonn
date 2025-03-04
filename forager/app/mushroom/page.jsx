"use client";  // Add this line at the top of the file

import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';
import PolaroidCard from '../helperfunctions/polaroid_card';

export default function MushroomPage() {
  const[isClosable, setClosable] = useState(true);
  
  const mushroom1 = "image/death_cap.png"

  return (
    <div className="page">
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>

      <PolaroidCard mushroomSrc={mushroom1}/>

      <WarningMessage 
            msgHeading={"WARNING"} 
            msgBody={"This is a toxic species, proceed with caution."} 
            closable={[true, isClosable, setClosable]} 
          />

      {/* Display the popup only if it is set to "open" */}
      {isClosable && (
          <WarningMessage 
            msgHeading={"ATTENTION"} 
            msgBody={"Our system can make mistakes! Verify important information and use your judgment."} 
            closable={[true, isClosable, setClosable]} 
          />
      )}
      <NavBar />
    </div>
  );
}
