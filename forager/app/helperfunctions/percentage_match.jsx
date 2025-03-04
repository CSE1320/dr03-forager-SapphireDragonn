import react from "react";
import ImageComponent from "./image";

/* 
Low Fidelity Prototype 1:
    - pass in percentage and style similarly to a pill
    - separate percentage styling for the rectangular percentage match

    Pro: 
        - easier to implement as it separates the two types of styling
    
    Con:
        - repeated elements/styling

Low Fidelity Prototype 2:
    - boolean value to toggle styling types and selectively display elements
    - Common elements between the two: 
        - percentage value, background styling, warning symbol (different colors)
    - Differences:
        - shape of box
        - if the word "match" is included
        - if the warning symbol is in the box or not (and if it shows up to the left or right)


--> see if there is some way of reducing repeated code
*/


const PercentageMatchComponent = ({percentage, backgroundStyling, isOnBorder}) => {
    const iconStylingWhite="w-3 h-3";
    const iconSrcWhite="icons/icon_warning.svg";
    const iconAltWhite="A warning icon depicted as a white outlined triangular icon with rounded corners with a white exclamation point inside.";

    const iconStylingRed="w-7 h-7";
    const iconSrcRed="icons/icon_red_warning.svg";
    const iconAltRed="A warning icon depicted as a solid red triangular icon with rounded corners with a white exclamation point inside.";

    const background="flex flex-col items-center justify-center w-32 pt-1 pb-1 h-auto rounded-full"
    const pillStyling= `${background} ${backgroundStyling}`;

    const backgroundRect="flex flex-col items-center justify-center w-10 h-auto pt-1 pb-1 rounded-lg"
    const rectangleStyling= `${backgroundRect} ${backgroundStyling}`;
    
    return (
        <div className="flex flex-row items-center">
            {isOnBorder ? (
                // This block renders when isOnBorder is true
                <div className={pillStyling}>
                    <div className="flex flex-row align-center items-center">
                        {/* warning icon */}
                        <ImageComponent styling={iconStylingWhite} src={iconSrcWhite} alt={iconAltWhite} />
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
            ) : (
                // This block renders when isOnBorder is false
                <div className={rectangleStyling}>
                    <div className="flex flex-row align-center items-center">
                        {/* percentage value */}
                        <div className="flex flex-row align-center items-center pr-2 pl-2">
                            <h2 className="text-white font-nunito text-sm">
                                {percentage}
                            </h2>
                            <h2 className="text-white font-nunito text-sm">
                                %
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            {/* warning icon */}
            <div className="pl-2">
                <ImageComponent styling={iconStylingRed} src={iconSrcRed} alt={iconAltRed} />
            </div>
        </div>
    );
};

export default PercentageMatchComponent;