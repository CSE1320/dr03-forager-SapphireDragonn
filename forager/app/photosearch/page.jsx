"use client";  // Add this line at the top of the file
// ISSUE WITH REACT RENDERING --> IS USE CLIENT CORRECT?

import NavBar from '../../components/NavBar';
import PhotoTopMenuPage from './top_menu';
import PhotoBottomMenuPage from './bottom_menu';
import React, { useState } from 'react';

const PhotoSearchPage = () => {
  //State for if you click the image
  const[isBadImage, setBadImage] = useState("good");

  //Error Message
  // NEED HELP WITH SHADOW
  const badImage = () => {
    return (
      <div className="relative h-[calc(100vh-163px-119px)] w-full bg-[#9E9E9E] bg-opacity-[75%]">
        <div className="flex flex-col">
          {/* 164px --> height of rectangle = 120px and text is 24 px above it */}
          <p className="absolute top-[calc(50%-164px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nunito text-base font-bold text-white text-shadow-md">
            Mushroom Too close...
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {focusRectangle()}
          </div>
          <p className="absolute top-[calc(50%+164px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nunito text-base font-bold text-white text-shadow-md">
            Move Back!
          </p>

        </div>
        
      </div>
    )
  }

  // Normal Focusing Rectangle
  const focusRectangle = () => {
    return (
      <div className="h-[248px] w-[248px] border-[2px] border-[#FFFFFF] border-solid">
      </div>
    )
  }


  return (
    <div className="relative bg-white h-full w-full">
      <img className="w-full h-full object-cover pb-[45px]" 
           src="image/mushroom_behind_camera.png" 
           alt="An image of a death cap mushroom in a pile of dirt and crumbled leaves. The mushroom has a white stalk and brown cap that is slightly peeling to reveal white skin below." />

      <div className="absolute top-0 left-0 w-full">
        <PhotoTopMenuPage/>
      </div>

      {isBadImage === "good" ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {focusRectangle()}
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-[45px] w-full">
          {badImage()}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full pb-[45px]">
        <PhotoBottomMenuPage isBadImage={isBadImage} setBadImage={setBadImage}/>
      </div>

    </div>
    
  );
}


export default PhotoSearchPage;
