import react from "react";
import ImageComponent from '../helperfunctions/image';
import PercentageMatchComponent from "./percentage_match";
import PolaroidCard from "./basic_polaroid";

/*Main Polaroid Card match for a given mushroom with mushroom image and border*/
const PolaroidMushroomMatch = ({mushroomSrc, percentage, backgroundStyling, isOnBorder}) => {
    
    return (
        <div className="relative">
            <PolaroidCard mushroomSrc={mushroomSrc}/>
                <div className="absolute top-11 left-8  origin-top-left scale-50">
                    <PercentageMatchComponent percentage={percentage} backgroundStyling={backgroundStyling} isOnBorder={false}/> 
                </div>
        </div>
    )
}

export default PolaroidMushroomMatch;