import react from "react";
import ImageComponent from '../helperfunctions/image';
import ButtonComponent from "../helperfunctions/button";

/*Main Polaroid Card match for a given mushroom with mushroom image and border*/
const AddToFavoritesButton = ({favoriteStateValues}) => {
    
    const favoriteButtonSrc="icons/icon_add_to_favorite.svg"
    const favoriteButtonAlt="A button to add the mushroom to favorites represented as a green circular icon with a plus in the center."
    const favoriteButtonStyle="w-12 h-12"

    return (
        <div className="relative">
            <ButtonComponent    
                isState={favoriteStateValues[0]} 
                setState={favoriteStateValues[1]} 
                styling={favoriteButtonStyle}
                stateValues={[true, false]}>
                <ImageComponent 
                    src={favoriteButtonSrc} 
                    alt={favoriteButtonAlt} />
            </ButtonComponent>
        </div>
    )
}

export default AddToFavoritesButton;