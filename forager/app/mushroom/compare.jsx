import React, { useState } from 'react';
import ButtonComponent from '../helperfunctions/button';
import ImageComponent from '../helperfunctions/image';

/*Report Error Button*/

export default function CompareButton() {
    const compareAlt="A compare icon represented as a white arrow opening to the left"
    const compareSrc="icons/icon_forward_arrow_gray.svg"
    const compareStyling="h-5"

    return (
    <div className="flex flex-row flex-end items-center">
        <h1 className="font-nunito text-base text-gray-500">
            Compare
        </h1>
        <div className="pl-4">
            <ImageComponent 
                styling={compareStyling}
                src={compareSrc} 
                alt={compareAlt} />

        </div>
        
    </div>
    );
}