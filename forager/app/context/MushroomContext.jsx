// src/context/MushroomContext.js
"use client";
import React, { createContext, useState, useContext } from 'react';
import { DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom } from '../../data/development'; // Import your mushroom data

// Create the Context for mushrooms
const MushroomContext = createContext();

// Create a provider component
export const MushroomProvider = ({ children }) => {
  const [mushrooms, setMushrooms] = useState({
    DeathCapMushroom,
    PaddyStrawMushroom,
    DestroyingAngelMushroom,
    FalseDeathCapMushroom,
    PuffballMushroom,
  });

  // Function to toggle collection status
  const toggleCollection = (mushroomName) => {
    setMushrooms((prevState) => {
      // Make sure the mushroom exists in the state
      if (prevState[mushroomName]) {
        const updatedState = {
          ...prevState,
          [mushroomName]: {
            ...prevState[mushroomName],
            inMyCollection: !prevState[mushroomName].inMyCollection, // Toggle inMyCollection
          },
        };

        // Log the updated collection state after change
        console.log('Updated Collection:', updatedState);
        return updatedState;
      }
      return prevState; // Return the unchanged state if mushroom doesn't exist
    });
  };

  // Function to set the filter (like favorites)
  const setMushroomFilter = (filterName, value) => {
    setMushrooms((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  return (
    <MushroomContext.Provider value={{ mushrooms, toggleCollection, setMushroomFilter }}>
      {children}
    </MushroomContext.Provider>
  );
};

// Custom hook to use MushroomContext
export const useMushroomContext = () => {
  return useContext(MushroomContext);
};