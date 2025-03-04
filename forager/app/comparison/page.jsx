"use client";  // Add this line at the top of the file

import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import WarningMessage from '../helperfunctions/warning_message';

export default function MushroomComparisonPage() {

  const[isClosable, setClosable] = useState(true);

  return (
    <div className="page">
      <h1>Mushroom Comparison Page</h1>

      <WarningMessage 
            msgHeading={"WARNING"} 
            msgBody={"This is a toxic species, proceed with caution."} 
            closable={[true, isClosable, setClosable]} 
          />

      <NavBar />
    </div>
  );
}
