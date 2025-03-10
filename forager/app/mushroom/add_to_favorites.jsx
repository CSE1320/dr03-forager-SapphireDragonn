import React, { useEffect } from "react";
import ImageComponent from '../../components/image';
import ButtonComponent from "../../components/button"; // Import your ButtonComponent
import { useMushroomContext } from '../context/MushroomContext';
import { DeathCapMushroom } from "@/data/development";

const AddToFavoritesButton = ({ favoriteStateValues}) => {
    const { toggleCollection } = useMushroomContext();

    const favoriteButtonSrc="icons/icon_add_to_favorite.svg";
    const favoriteButtonAlt="A button to add the mushroom to favorites represented as a green circular icon with a plus in the center.";
    const favoriteButtonStyle="w-12 h-12";

    useEffect(() => {
        // Check if the button is clicked (state is true)
        if (favoriteStateValues[0] === true) {
          // If true, update the collection
          toggleCollection(DeathCapMushroom);  // Call the context function to update the collection
          console.log("Added to collection:", DeathCapMushroom);  // Log the action
        }
      }, [favoriteStateValues[0], toggleCollection, DeathCapMushroom]); // Dependency on button state change
    

    return (
        <div className="relative">
            <ButtonComponent    
                isState={favoriteStateValues[0]} 
                setState={favoriteStateValues[1]} 
                styling={favoriteButtonStyle}
                stateValues={[true, false]}>
                <ImageComponent 
                    src={favoriteButtonSrc} 
                    alt={favoriteButtonAlt} 
                />
            </ButtonComponent>
        </div>
    )
}

export default AddToFavoritesButton;