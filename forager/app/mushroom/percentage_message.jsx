import React from "react";
import ImageComponent from "../helperfunctions/image";
import ButtonComponent from "../helperfunctions/button";

const PercentageMessage = ({ msgBody, closable }) => {
    const iconStyling2="w-7 h-7";
    const iconSrc2="image/close_icon.png";
    const iconAlt2="A close icon depicted as a white x-shaped icon.";


    return (
        <div className="flex flex-col justify-center safetyGreen w-5/6 h-auto p-5 rounded-3xl">
            <div className="flex justify-end">
                <div>
                    {/* closing icon */}
                    {/* Only render the closing button and closing logic if the component has been labeled as closeable. */}
                    {closable[0] && (
                        <div>
                            <ButtonComponent    
                                isState={closable[1]} 
                                setState={closable[2]} 
                                styling={iconStyling2}
                                stateValues={["open", "close"]}>
                                <ImageComponent 
                                    src={iconSrc2} 
                                    alt={iconAlt2} />
                            </ButtonComponent>
                            
                        </div>
                    )}
                </div>
                
            </div>
            <div className="pt-1">
                {/* message body */}
                <p className="text-white font-nunito text-l">
                    {msgBody}
                </p>
            </div>

        </div>

    )
}

export default PercentageMessage;