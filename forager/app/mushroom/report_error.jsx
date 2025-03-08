import React, { useState } from 'react';
import ButtonComponent from '../helperfunctions/button';
import ImageComponent from '../helperfunctions/image';

/*Report Error Button*/

export default function ReportErrorButton(errorState) {
    const errorStateStyling="bg-red-500 w-72 h-auto p-3 rounded-3xl"
    const reportAlt="A report error icon represented as a white arrow opening to the left"
    const reportSrc="icons/icon_forward_arrow.svg"
    const reportStyling="h-5"

    return (
    <div className="flex flex-row w-40 justify-between  h-auto bg-red-500 p-3 rounded-xl">
        <h1 className="font-nunito text-base font-bold text-white">
            Report Error
        </h1>

        <ButtonComponent    
                isState={errorState[0]} 
                setState={errorState[1]} 
                stateValues={[true, false]}>
                <ImageComponent 
                    styling={reportStyling}
                    src={reportSrc} 
                    alt={reportAlt} />
            </ButtonComponent>
    </div>
    );
}