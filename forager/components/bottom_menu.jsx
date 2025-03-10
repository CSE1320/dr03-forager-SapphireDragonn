import React from "react";
import ButtonComponent from "./button";
import ImageComponent from "./image";

/*This displays the bottom menu bar (photo import, photo clicking button, and reverse camera button)*/

const PhotoBottomMenuPage = ({ isBadImage, setBadImage }) => {
    const photosSrc="icons/icon_photos.svg"
    const photosAlt="A photos icon represented as a white rectangular border with a white, filled in mountain at the bottom."

    const flipSrc="icons/icon_flip_camera.svg"
    const flipsAlt="A flip camera icon in white represented as a curved arrow oriented downward and to the left on top, another curved arrow oriented upwards and to the right, and a white circle in the center"


    return (
    <div className="bg-black bg-opacity-50 w-full h-28 flex items-center justify-between px-8">
        {/* photos icon */}
        <ImageComponent 
                    styling="w-9 h-9"
                    src={photosSrc} 
                    alt={photosAlt} />

        {/* take photo icon */}
        <ButtonComponent 
            isState={isBadImage}
            setState={setBadImage}
            styling="bg-gray-700 w-16 h-16 rounded-full border-4 border-white"
            stateValues={["bad", "good"]}/>

         {/*Camera flipping icon*/}
         <ImageComponent 
                    styling="w-9 h-9"
                    src={flipSrc} 
                    alt={flipsAlt} />
    </div>
  );
}

export default PhotoBottomMenuPage;
