import React from "react";

/* 
Button component that takes in styling information and onClick values to store state changes
*/

const ButtonComponent = ({ isState, setState, styling, stateValues, children }) => {

    //Sets state of the button based on the array of possible values it can be (stateValues)
    const handleState = () => {
        if(isState === stateValues[0]){
            setState(stateValues[1]);
        } else if(isState === stateValues[1]){
            setState(stateValues[0]);
        }
        else{ //disabled button
            setState(stateValues[2])
        }

        console.log("Button clicked");
    }

    return (
        <button className={styling} onClick={handleState}>
            {children} {/* Allows inserting images inside */}
        </button>
  );
}

export default ButtonComponent;
