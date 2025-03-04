import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBolt } from "@fortawesome/free-solid-svg-icons"; //icons for page

/*This displays the top menu bar (back button and flash button)*/

const PhotoTopMenuPage = () => {

    return (
    <div className="bg-black bg-opacity-50 w-full h-[132px] flex items-center justify-between px-[31px]">
         {/*Back Icon --> Currently not connected to a previous page*/}
        <FontAwesomeIcon 
                  icon={faAngleLeft} 
                  style={{
                      color: '#FFFFFF', // Sets the icon color
                      width: '31px',
                      height: '62px'
                  }} 
        />
         {/*Flash icon*/}
        <FontAwesomeIcon 
                    icon={faBolt} 
                    style={{
                        color: '#FFFFFF', // Sets the icon color
                        width: '31px',
                        height: '62px'
                    }} 
          />
    </div>
  );
}

export default PhotoTopMenuPage;
