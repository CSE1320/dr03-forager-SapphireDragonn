import react from "react";
import ImageComponent from '../helperfunctions/image';
import PercentageMatchComponent from "./percentage_match";
import PolaroidCard from "./basic_polaroid";

/*Main Polaroid Card match for a given mushroom with mushroom image and border*/
const MainPolaroidComponent = ({mushroomSrc, percentage, backgroundStyling, isOnBorder}) => {
    
    const skullImageSrc="icons/icon_match_skull.svg"
    const skullImageAlt="A danger icon represented as a gray skull with darker gray eye sockets."
    const skullImageStyling="h-11 pl-2 pr-4"

    return (
        <div className="relative">
            <PolaroidCard mushroomSrc={mushroomSrc}/>
            <div className="flex flex-row absolute top-2 left-4  origin-top-left scale-50">
                <ImageComponent 
                    styling={skullImageStyling}
                    src={skullImageSrc}
                    alt={skullImageAlt}/>
                <PercentageMatchComponent percentage={percentage} backgroundStyling={backgroundStyling} isOnBorder={isOnBorder}/> 
            </div>
        </div>
    )
}

export default MainPolaroidComponent;