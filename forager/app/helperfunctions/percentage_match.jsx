import react from "react";
import ImageComponent from "./image";


const PercentageMatchComponent = ({percentage, backgroundStyling}) => {
    const iconStyling="w-3 h-3";
    const iconSrc="icons/icon_warning.svg";
    const iconAlt="A warning icon depicted as a white triangular icon with rounded corners with a white exclamation point inside.";

    const background="flex flex-col items-center justify-center w-32 pt-1 pb-1 h-auto rounded-full"
    const rectangleStyling= `${background} ${backgroundStyling}`;
    
    return (
        <div className={rectangleStyling}>
            <div className="flex flex-row align-center items-center">
                {/* warning icon */}
                <ImageComponent styling={iconStyling} src={iconSrc} alt={iconAlt}/>
                {/* percentage value */}
                <div className="flex flex-row align-center items-center pr-2 pl-2">
                    <h2 className="text-white font-nunito text-sm">
                        {percentage}
                    </h2>
                    <h2 className="text-white font-nunito text-sm">
                        %
                    </h2>
                </div>
                
                {/* "match" */}
                <h2 className="text-white font-nunito text-sm">
                    Match
                </h2>
                
            </div>
        </div>

    )
}

export default PercentageMatchComponent;