import react from "react";
import ImageComponent from '../helperfunctions/image';
import PercentageMatchComponent from "./percentage_match";

/*Basic Polaroid Card with mushroom image and border*/
const PolaroidCard = ({mushroomSrc, mushroomSizing, cardSizing, isOnBorder}) => {
    const mushroomAlt="An image of a death cap mushroom: a white, short mushroom with a wide, rounded rim and wide, ruffled stalk. The mushroom is surrounded by a pile of shriveled, brown leaves."

    const warningStyling="w-3 h-3";
    const warningSrc="icons/icon_red_warning.svg";
    const warningAlt="A warning icon depicted as a red, fully-filled triangular icon with rounded corners with a white exclamation point inside.";

    const cardStyling=`bg-white shadow-md border ${cardSizing}`

    const topPadding = isOnBorder ? "pt-9" : "pt-4"

    const backgroundStyling=`flex justify-center ${topPadding}`

    return (
        <div className={cardStyling}>
            <div className={backgroundStyling}>
                <ImageComponent styling={mushroomSizing} src={mushroomSrc} alt={mushroomAlt}/>
            </div>      
            
                  
        </div>

    )
}

export default PolaroidCard;