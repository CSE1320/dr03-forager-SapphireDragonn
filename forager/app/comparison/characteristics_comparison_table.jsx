import react from "react";
import { DeathCapMushroom } from "@/data/development";
import ImageComponent from "../helperfunctions/image";

const ComparisonTable = () => {
    
    const DeathCapInfo=[DeathCapMushroom.characteristics.capShape,
                        DeathCapMushroom.characteristics.capColor,
                        DeathCapMushroom.characteristics.capTexture,
                        DeathCapMushroom.characteristics.gillsType,
                        DeathCapMushroom.characteristics.gillsColor,
                        DeathCapMushroom.characteristics.stemShape,
                        DeathCapMushroom.characteristics.stemColor,
                        DeathCapMushroom.characteristics.stemRing,
                        DeathCapMushroom.characteristics.habitat]

    const YourMushroomInfo=["Flat", "Brown", "Smooth", "Free", "White",
                            "Slender", "White", "Absent", "?"]
    
    const ComparisonCharacteristics=["Cap Shape", "Cap Color",
                                    "Cap Texture", "Gills Type",
                                    "Gills Color", "Stem Shape",
                                    "Stem Color", "Stem Ring", "Habitat"]

    // icon_comparison_bullet

    // <div className="border-t border-gray-300 w-full my-4"></div>
    
    const comparisonSrc="icons/icon_comparison_bullet.svg"
    const comparisonAlt="An icon to the left of each characteristic represented as a gray circle with a black x inside of it"
    const comparisonStyle="h-4 w-4"


    return (
        <div className="flex bg-white shadow-md border w-full">
            <div className="flex flex-row border-2 w-full">
                {/* Your Photo Characteristics */}
                <ul className="flex flex-col w-1/3 space-y-4 pl-2">
                    {YourMushroomInfo.map((characteristic, index) => (
                    <li key={index} className="flex flex-col w-full">
                        <div className="flex flex-row items-center space-x-3">
                            <ImageComponent 
                                src={comparisonSrc} 
                                alt={comparisonAlt} 
                                styling={comparisonStyle}
                            />
                            <span className="text-black font-nunito text-md font-bold">
                                {characteristic}
                            </span>
                        </div>
                        {/* Horizontal Line Below */}
                        <div className="border-t border-gray-700 w-5/6 mt-2"></div>
                    </li>
                    ))}
                </ul>

                {/* Vertical Line Between Columns */}
                <div className="border-l border-gray-700 h-full"></div>

                {/* Comparison Characteristics */}
                <ul className="flex flex-col w-1/3 space-y-4">
                    {ComparisonCharacteristics.map((characteristic, index) => (
                    <li key={index} className="flex flex-col items-center text-center w-full">
                        <span className="text-black font-nunito text-md font-bold mb-2">
                            {characteristic}
                        </span>
                    </li>
                    ))}
                </ul>

                {/* Vertical Line Between Columns */}
                <div className="border-l border-gray-700 h-full"></div>

                {/* Death Cap Characteristics */}
                <ul className="flex flex-col w-1/3 space-y-4">
                    {DeathCapInfo.map((characteristic, index) => (
                    <li key={index} className="flex flex-col text-center w-full">
                        {/* Icon + Title Row */}
                        <span className="text-black font-nunito text-md font-bold mb-2">
                            {characteristic}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ComparisonTable;