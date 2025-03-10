"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  DeathCapMushroom, 
  PaddyStrawMushroom, 
  DestroyingAngelMushroom, 
  FalseDeathCapMushroom, 
  PuffballMushroom 
} from "../../data/development"; // Import your mushroom data

// Create the Context for mushrooms and navigation tracking
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

  const [previousPage, setPreviousPage] = useState(null);
  const pathname = usePathname(); // Get current page path

  // Track the previous page, except when on the MushroomPage itself
  useEffect(() => {
    if (pathname !== "/mushroom") {
      setPreviousPage(pathname);
    }
  }, [pathname]);

  // Function to toggle collection status
  const toggleCollection = (mushroomName) => {
    setMushrooms((prevState) => {
      if (prevState[mushroomName]) {
        const updatedState = {
          ...prevState,
          [mushroomName]: {
            ...prevState[mushroomName],
            inMyCollection: !prevState[mushroomName].inMyCollection,
          },
        };
        console.log("Updated Collection:", updatedState);
        return updatedState;
      }
      return prevState;
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
    <MushroomContext.Provider value={{ 
      mushrooms, 
      toggleCollection, 
      setMushroomFilter, 
      previousPage 
    }}>
      {children}
    </MushroomContext.Provider>
  );
};

// Custom hook to use MushroomContext
export const useMushroomContext = () => {
  return useContext(MushroomContext);
};
