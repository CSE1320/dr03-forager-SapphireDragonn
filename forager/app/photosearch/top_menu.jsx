import React from "react";
import ImageComponent from "../helperfunctions/image";

/*This displays the top menu bar (back button and flash button)*/

const PhotoTopMenuPage = () => {
    const backSrc="icons/icon_back_arrow.svg"
    const backAlt="A back icon represented as a white arrow opening to the right side."

    const flashSrc="icons/icon_flash.svg"
    const flashAlt="A flash icon represented as a white lightning bolt."

    return (
    <div className="bg-black bg-opacity-50 w-full h-28 flex items-center justify-between px-8">
         {/*Back Icon --> Currently not connected to a previous page*/}
         <ImageComponent 
                    styling="w-9 h-9"
                    src={backSrc} 
                    alt={backAlt} />

         {/*Flash icon*/}
         <ImageComponent 
                    styling="w-9 h-9"
                    src={flashSrc} 
                    alt={flashAlt} />
    </div>
  );
}

export default PhotoTopMenuPage;
