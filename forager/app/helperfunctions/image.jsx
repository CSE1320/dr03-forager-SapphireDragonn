
import React from "react";

/* 
I was inspired by Bryan Badgero to create an image component
Image component that takes in styling information, src information, and an alt description and returns an image constructed
from it.
*/

const ImageComponent = ({ styling, src, alt }) => {

    return (
    <div>
        <img className={styling} 
           src={src}
           alt={alt}/>
    </div>
  );
}

export default ImageComponent;