/*
Low Fidelity:
BASIC COMPONENTS: 
- Base Image
- Top Menu Bar of Icons
- Bottom Menu Bar of Icons
- Error messages

Uses: 
- Absolute and relative positioning due to needed overlap


MEDIUM FIDELITY:
- Currently, the top and bottom menu bars are separated out and state displays the focus-only element or the error message element
- another potential version would have the error message separated out as a separate component and call it based on state
- Or, the focus rectangle could be rendered as a default and state only controls whether the error message 
  appears or does not appear
*/

/* 
This page creates the camera page. By clicking on the camera icon, the error message is simulated. 
Clicking on the camera icon again reveals the default view.
*/



"use client";  // Add this line at the top of the file

import React, { useState } from 'react';
import BackgroundScreen from '@/components/background_screen';

const PhotoSearchPage = () => {
  return (
      <BackgroundScreen/>
    );
}


export default PhotoSearchPage;
