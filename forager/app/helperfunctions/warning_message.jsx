import React from "react";
import ImageComponent from "./image";
import ButtonComponent from "./button";

/*
Message component that can be displayed on mushroom page

Low Fidelity Prototypes based on the information they can display:

Prototype 1:
    - Separate pop ups and other messages
    - 1 component for general messages
        (message Heading, message Body, hasIcon, icon info) 
    - 1 component for warning messages
        (message Heading, message Body, hasIcon, icon info)

    Pro:
        - separate handling due to need for button to close message
    
    Con:
        - a lot of information is being repeated between the two

Prototype 2:
    - separate warning messages from other message blocks
    - warning message block
        (message Heading, styling, message Body, icon info, isClosable (handle button info))
    - other message blocks
        (heading, subsequent info, styling)

Prototype 2 will be chosen here since it reduces the amount of repeated information and groups by similarity of purpose

isClosable:
    T/F
    getter --> returns value (string) --> can set to null if not closeable
    setter --> returns function       --> can set to null if not closeable

*/

/* 
Warning message component for closeable popups and general warnings
*/

const WarningMessage = ({msgHeading, msgBody, closable}) => {
    const iconStyling="w-5 h-5";
    const iconSrc="icons/icon_warning.svg";
    const iconAlt="A warning icon depicted as a white triangular icon with rounded corners with a white exclamation point inside.";
    const iconStyling2="w-5 h-5";
    const iconSrc2="image/close_icon.png";
    const iconAlt2="A close icon depicted as a white x-shaped icon.";

    
    return (
        <div className="flex flex-col justify-center bg-red-500 w-72 h-auto p-3 rounded-lg">
            <div className="flex flex-row align-center items-center justify-between">
                <div className="flex flex-row align-center items-center">
                    {/* warning icon */}
                    <ImageComponent styling={iconStyling} src={iconSrc} alt={iconAlt}/>
                    {/* message header */}
                    <h1 className="font-bold text-white font-nunito text-md pl-3">
                        {msgHeading}
                    </h1>
                </div>
                <div>
                    {/* closing icon */}
                    {/* Only render the closing button and closing logic if the component has been labeled as closeable. */}
                    {closable[0] && (
                        <div>
                            <ButtonComponent    isState={closable[1]} 
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
                <p className="text-white font-nunito text-sm">
                    {msgBody}
                </p>
            </div>

        </div>

    )
}

export default WarningMessage;