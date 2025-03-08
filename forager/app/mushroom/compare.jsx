import React, { useState } from 'react';
import ButtonComponent from '../helperfunctions/button';
import ImageComponent from '../helperfunctions/image';

/*Report Error Button*/

export default function CompareButton() {
    const compareAlt="A compare icon represented as a white arrow opening to the left"
    const compareSrc="icons/icon_forward_arrow_gray.svg"
    const compareStyling="h-5"

    return (
    <div className="flex flex-row w-40 justify-between  h-auto p-3 rounded-xl">
        <h1 className="font-nunito text-base text-gray-500">
            Compare
        </h1>

        <ImageComponent 
            styling={compareStyling}
            src={compareSrc} 
            alt={compareAlt} />
    </div>
    );
}