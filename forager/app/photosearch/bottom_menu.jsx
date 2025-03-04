import React from "react";
import ButtonComponent from "../helperfunctions/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBolt, faImage, faArrowsRotate} from "@fortawesome/free-solid-svg-icons"; //icons for page

/*This displays the bottom menu bar (photo import, photo clicking button, and reverse camera button)*/

const PhotoBottomMenuPage = ({ isBadImage, setBadImage }) => {

    //Sets state of whether the photo clicking button has been pressed to pass back to the parent
    const handleButtonClick = () => {
        if(isBadImage === "good"){
            setBadImage("bad");
        } else if(isBadImage === "bad") {
            setBadImage("good");
        }
    }

    return (
    <div className="bg-black bg-opacity-50 w-full h-[119px] flex items-center justify-between px-[31px]">
        <FontAwesomeIcon 
                  icon={faImage} 
                  style={{
                      color: '#FFFFFF', // Sets the icon color
                      width: '31px',
                      height: '62px'
                  }} 
        />

        {/* <div 

            
            onClick={handleButtonClick}
            className="h-[63px] w-[63px] bg-[#595959] border-[5px] border-[#FFFFFF] border-solid rounded-full">
        </div> */}

        <div>
            <ButtonComponent/>
        </div>

         {/*Camera flipping icon*/}
        <div className="transform scale-x-[-1] relative">
                <FontAwesomeIcon 
                        icon={faArrowsRotate} 
                        style={{
                            color: '#FFFFFF', // Sets the icon color
                            width: '30px',
                            height: '30px'
                        }} 
                />

             {/*Circle inside the rotation icon*/}
            {/*
                Formatting with top-1/2 and left-1/2 puts the top left of the rectangle in the middle 
                so translate moves it so that the center of the rectangle is in the center*/}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[10px] w-[10px] bg-[#595959] border-[5px] border-[#FFFFFF] border-solid rounded-full">
            </div>

        </div>
    </div>
  );
}

export default PhotoBottomMenuPage;
