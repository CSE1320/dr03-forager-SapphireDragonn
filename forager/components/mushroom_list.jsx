import React from "react";
import PolaroidMushroomMatch from "./polaroid_mushroom_match";


const MushroomList = ({ MushroomMatchesArray }) => {


    return (
        <div>
            <ul className="flex flex-wrap gap-6">
              {MushroomMatchesArray.map(mushroom => (
                <PolaroidMushroomMatch
                  key={mushroom.id}
                  mushroomSrc={mushroom.mushroomSrc}
                  mushroomTitle={mushroom.name}
                  percentage={mushroom.percentage}
                  backgroundStyling={mushroom.backgroundStyling}
                  isOnBorder={mushroom.isOnBorder}
                  mushroomSizing={mushroom.mushroomSizing}
                  cardSizing={mushroom.cardSizing}
                />
              ))}
            </ul>
        </div>
  );
}

export default MushroomList;
