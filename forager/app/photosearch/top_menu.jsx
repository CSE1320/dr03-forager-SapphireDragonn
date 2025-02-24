import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBolt } from "@fortawesome/free-solid-svg-icons";

const PhotoTopMenuPage = () => {

    return (
    <div className="bg-black bg-opacity-50 w-full h-[132px] flex items-center justify-between px-[31px]">
        <FontAwesomeIcon 
                  icon={faAngleLeft} 
                  style={{
                      color: '#FFFFFF', // Sets the icon color
                      width: '31px',
                      height: '62px'
                  }} 
        />
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
