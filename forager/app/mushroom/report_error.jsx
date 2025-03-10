import React, { useState } from 'react';
import ButtonComponent from '../../components/button';
import ImageComponent from '../../components/image';

/*Report Error Button*/

export default function ReportErrorButton(errorState) {
    const reportAlt="A report error icon represented as a white arrow opening to the left"
    const reportSrc="icons/icon_forward_arrow.svg"
    const reportStyling="h-5"

    return (
    <div className="flex flex-row w-40 justify-between h-auto warningRed p-3 rounded-xl">
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