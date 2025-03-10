import react from "react";
import ImageComponent from './image';
import PercentageMatchComponent from "./percentage_match";
import PolaroidCard from "./mushroom_card";

/*Main Polaroid Card match for a given mushroom with mushroom image and border*/
const MainPolaroidComponent = ({mushroomSrc, percentage, backgroundStyling, isOnBorder, mushroomSizing, cardSizing}) => {
    
    const skullImageSrc="icons/icon_match_skull.svg"
    const skullImageAlt="A danger icon represented as a gray skull with darker gray eye sockets."
    const skullImageStyling="h-11"

    return (
        <div className="relative">
            <PolaroidCard 
                mushroomSrc={mushroomSrc} 
                mushroomSizing={mushroomSizing} 
                cardSizing={cardSizing}
                isOnBorder={isOnBorder}/>
            <div className="flex flex-row absolute w-full  pl-2 space-x-2 scale-50 origin-top-left top-2 left-4">
                <ImageComponent 
                    styling={skullImageStyling}
                    src={skullImageSrc}
                    alt={skullImageAlt}/>
                    <PercentageMatchComponent 
                        percentage={percentage} 
                        backgroundStyling={backgroundStyling} 
                        isOnBorder={isOnBorder}/> 
            </div>
        </div>
    )
}

export default MainPolaroidComponent;