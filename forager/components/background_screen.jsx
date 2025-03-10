/*
Low Fidelity:
BASIC COMPONENTS: 
- Base Image
- Top Menu Bar of Icons
- Bottom Menu Bar of Icons
- Error messages

Uses: 
- Absolute and relative positioning due to needed overlap


MEDIUM FIDELITY:
- Currently, the top and bottom menu bars are separated out and state displays the focus-only element or the error message element
- another potential version would have the error message separated out as a separate component and call it based on state
- Or, the focus rectangle could be rendered as a default and state only controls whether the error message 
  appears or does not appear
*/

/* 
This page creates the camera page. By clicking on the camera icon, the error message is simulated. 
Clicking on the camera icon again reveals the default view.
*/


import NavBar from './NavBar';
import PhotoTopMenuPage from '@/components/top_menu';
import PhotoBottomMenuPage from '@/components/bottom_menu';
import ImageComponent from '@/components/image';
import React, { useState } from 'react';

const BackgroundScreen = () => {
  //State for if you click the image
  const[isBadImage, setBadImage] = useState("good");

  //image consts
  const imageClassName="w-full h-full object-cover"
  const imageSrc="image/mushroom_behind_camera.png" 
  const imageAlt="An image of a death cap mushroom in a pile of dirt and crumbled leaves. The mushroom has a white stalk and brown cap that is slightly peeling to reveal white skin below."

  //Error Message
  const badImage = () => {
    return (
      <div className="relative pt-8 pb-8 h-full w-full bg-gray-400 bg-opacity-75">
        <div className="flex flex-col">
          {/* 164px --> height of rectangle = 120px and text is 24 px above it */}
          <p className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nunito text-base font-bold text-white text-shadow-md">
            Mushroom Too close...
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {focusRectangle()}
          </div>
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nunito text-base font-bold text-white text-shadow-md">
            Move Back!
          </p>

        </div>
        
      </div>
    )
  }

  // Normal Focusing Rectangle
  const focusRectangle = () => {
    return (
      <div className="h-64 w-64 border-2 border-white border-solid">
      </div>
    )
  }


  return (
    <div className="relative bg-white h-full w-full">
      <ImageComponent styling={imageClassName} src={imageSrc} alt={imageAlt}/>

      <div className="absolute w-full top-0 left-0">
        <PhotoTopMenuPage/>
      </div>

      {isBadImage === "good" ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {focusRectangle()}
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full pt-32 pb-40 flex justify-center items-center">
          {badImage()}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full pb-10">
        <PhotoBottomMenuPage isBadImage={isBadImage} setBadImage={setBadImage}/>
      </div>

    </div>
    
  );
}


export default BackgroundScreen;
