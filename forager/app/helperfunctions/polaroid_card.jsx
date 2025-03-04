import react from "react";
import ImageComponent from "./image";
import PercentageMatchComponent from "./percentage_match";

/*Basic Polaroid Card with mushroom image and border*/
const PolaroidCard = ({mushroomSrc}) => {
    const mushroomAlt="An image of a death cap mushroom: a white, short mushroom with a wide, rounded rim and wide, ruffled stalk. The mushroom is surrounded by a pile of shriveled, brown leaves."
    const mushroomStyling="h-32 w-24"

    const warningStyling="w-3 h-3";
    const warningSrc="icons/icon_red_warning.svg";
    const warningAlt="A warning icon depicted as a red, fully-filled triangular icon with rounded corners with a white exclamation point inside.";
    
    return (
        <div className="bg-white w-32 h-40 shadow-md border">
            <div className="flex justify-center pt-5">
                <ImageComponent styling={mushroomStyling} src={mushroomSrc} alt={mushroomAlt}/>
            </div>      
            
                  
        </div>

    )
}

export default PolaroidCard;