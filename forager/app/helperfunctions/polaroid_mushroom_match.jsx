import react from "react";
import ImageComponent from '../helperfunctions/image';
import PercentageMatchComponent from "./percentage_match";
import PolaroidCard from "./basic_polaroid";

/*Main Polaroid Card match for a given mushroom with mushroom image and border*/
const PolaroidMushroomMatch = ({mushroomSrc, mushroomTitle, percentage, backgroundStyling, isOnBorder, mushroomSizing, cardSizing}) => {
    
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <PolaroidCard 
                    mushroomSrc={mushroomSrc} 
                    mushroomSizing={mushroomSizing} 
                    cardSizing={cardSizing}
                    isOnBorder={isOnBorder}/>
                    <div className="absolute top-8 left-5  origin-top-left scale-50">
                        <PercentageMatchComponent 
                            percentage={percentage} 
                            backgroundStyling={backgroundStyling} 
                            isOnBorder={isOnBorder}/> 
                    </div>
            </div>

            <div className="pt-2">
                <h1 className="text-black font-nunito text-md font-bold">
                    {mushroomTitle}
                </h1>
            </div>
        </div>
        
    )
}

export default PolaroidMushroomMatch;