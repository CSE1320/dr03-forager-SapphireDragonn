// data/development.js
const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};


/* 
MUSHROOM INFO TO BE CAPTURED:
Names:
    - common Name
    - Scientific Name
isToxic
Image
Mushroom Characteristics
    - Cap Shape
    - Cap Color
    - Cap Texture
    - Gills Type
    - Gills Color
    - Stem Shape
    - Stem Color
    - Stem Ring
    - Habitat
    - General Description



Filters: (also track if they can be filtered)
    - Tags
        - Favorites
        - Recent
    - Regions
        - Texas
        - North America
        - South America
        - Asia
        - Europe
        - Africa
    -Category
        - Poisonous
        - Medicinal
        - Mythical
        - Good for Broths
*/

/*
OPTION 1:

MUSHROOM INFO TO BE CAPTURED:
Names:
    - common Name: String
    - Scientific Name: String
isToxic: Boolean
Image: String (path)
percentage_match_to_death_cap: float
Mushroom Characteristics
    - Cap Shape: String
    - Cap Color: String
    - Cap Texture: String
    - Gills Type: String
    - Gills Color: String
    - Stem Shape: String
    - Stem Color: String
    - Stem Ring: String
    - Habitat: String
    - General Description: String


Filters:
    - Filterable (list of filterable tags): Array of Booleans
    - Tags
        - is_Favorites: boolean
        - is_Recent: boolean
    - Regions
        - in_Texas: boolean
        - in_North America: boolean
        - in_South America: boolean
        - in_Asia: boolean
        - in_Europe: boolean
        - in_Africa: boolean
    -Category
        - is_Poisonous: boolean
        - is_Medicinal: boolean
        - is_Mythical: boolean
        - is_Good_for_Broths: boolean
*/

/* 
Option 2:
Names:
    - common Name: String
    - Scientific Name: String
isToxic: Boolean
Image: String (path)
percentage_match_to_death_cap: float
Mushroom Characteristics
    - Cap Shape: String
    - Cap Color: String
    - Cap Texture: String
    - Gills Type: String
    - Gills Color: String
    - Stem Shape: String
    - Stem Color: String
    - Stem Ring: String
    - Habitat: String
    - General Description: String


Filters:
    - Tags
        - is_Favorites: String
        - is_Recent: String
    - Regions
        - in_Texas: String
        - in_North America: String
        - in_South America: String
        - in_Asia: String
        - in_Europe: String
        - in_Africa: String
    -Category
        - is_Poisonous: String
        - is_Medicinal: String
        - is_Mythical: String
        - is_Good_for_Broths: String
*/

/*
Option 2 offers a better representation for the filters as it alows for Y, N, and disabled 
without a separate array being needed

Update: A "My collection" boolean was also added to 
*/

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';
var DeathCapMushroom = {
    names: {
      commonName: "Death Cap",
      scientificName: "Amanita phalloides",
    },
    isToxic: true,
    image: "image/death_cap.png",
    percentageMatchToDeathCap: 1.0,
    inMyCollection: false,
    characteristics: {
      capShape: "Flat",
      capDiameter: "5-15",
      capColor: "Yellow",
      capTexture: "Smooth",
      gillsType: "Free",
      gillsColor: "White",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Present",
      habitat: "Near Oak, Beech",
      generalDescription: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis nascetur nam ullamcorper, imperdiet facilisi et parturient. Ullamcorper lacinia suspendisse laoreet enim, imperdiet integer. Arcu mus natoque; placerat facilisis ultricies sodales phasellus. Non hac lacinia neque blandit accumsan. Accumsan senectus accumsan blandit facilisi augue aptent. Massa commodo convallis; urna varius aliquet diam. Felis facilisi mi varius aliquet himenaeos nunc sociosqu habitant. Risus a a tempus habitant vel egestas ante id felis."
    },
    filters: {
      tags: {
        isFavorites: "",
        isRecent: "",
      },
      regions: {
        inTexas: "Yes",
        inNorthAmerica: "Yes",
        inSouthAmerica: "No",
        inAsia: "Yes",
        inEurope: "Yes",
        inAfrica: "No",
      },
      category: {
        isPoisonous: "Yes",
        isMedicinal: "No",
        isMythical: "No",
        isGoodForBroths: "No",
      },
    },
  };

  
  var PaddyStrawMushroom = {
    names: {
      commonName: "Paddy Straw",
      scientificName: "Volvariella volvacea",
    },
    isToxic: false,
    image: "image/paddy_straw.png",
    percentageMatchToDeathCap: 0.9,
    inMyCollection: false,
    characteristics: {
      capShape: "Round",
      capDiameter: "4-12",
      capColor: "Brown",
      capTexture: "Smooth",
      gillsType: "Free",
      gillsColor: "Pink",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Absent",
      habitat: "Decaying Straw",
      generalDescription: 
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta euismod nibh venenatis fermentum purus potenti. Vitae eleifend eu arcu orci arcu. Sollicitudin vulputate nisi vestibulum fusce dictumst; montes etiam venenatis? Curabitur suscipit justo hac placerat lectus nostra! Sem penatibus cubilia commodo habitant maecenas elit praesent ante. Orci ultrices vitae purus nisi dictum. Ultrices ultrices sodales parturient egestas interdum."
    },
    filters: {
      tags: {
        isFavorites: "Yes",
        isRecent: "No",
      },
      regions: {
        inTexas: "No",
        inNorthAmerica: "No",
        inSouthAmerica: "Yes",
        inAsia: "Yes",
        inEurope: "No",
        inAfrica: "Yes",
      },
      category: {
        isPoisonous: "No",
        isMedicinal: "Yes",
        isMythical: "No",
        isGoodForBroths: "Yes",
      },
    },
  };
  
  var DestroyingAngelMushroom = {
    names: {
      commonName: "Destroying Angel",
      scientificName: "Amanita bisporigera",
    },
    isToxic: true,
    image: "image/destroying_angel.png",
    percentageMatchToDeathCap: 0.8,
    inMyCollection: false,
    characteristics: {
      capShape: "Flat",
      capDiameter: "5-12",
      capColor: "White",
      capTexture: "Smooth",
      gillsType: "Free",
      gillsColor: "White",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Present",
      habitat: "Oak, beech, and maple trees",
      generalDescription: 
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Nullam tellus primis dolor taciti proin lacinia erat. Non et diam montes nulla leo curae. Congue sed taciti risus nostra odio sociosqu. Mattis mus facilisis nascetur nisi quam ornare volutpat taciti. Congue sodales vel consectetur mus nostra suscipit. Maecenas ex imperdiet sem praesent quis fames laoreet porta enim. Ante sapien nisl rutrum vulputate mattis primis. Ridiculus venenatis viverra sapien ultricies eu."
    },
    filters: {
      tags: {
        isFavorites: "No",
        isRecent: "Yes",
      },
      regions: {
        inTexas: "Yes",
        inNorthAmerica: "Yes",
        inSouthAmerica: "No",
        inAsia: "Yes",
        inEurope: "Yes",
        inAfrica: "No",
      },
      category: {
        isPoisonous: "Yes",
        isMedicinal: "No",
        isMythical: "No",
        isGoodForBroths: "No",
      },
    },
  };
  
  var FalseDeathCapMushroom = {
    names: {
      commonName: "False Death Cap",
      scientificName: "Amanita citrina",
    },
    isToxic: false,
    image: "image/false_death_cap.png",
    percentageMatchToDeathCap: 0.7,
    inMyCollection: false,
    characteristics: {
      capShape: "Flat",
      capDiameter: "5-15",
      capColor: "Yellow",
      capTexture: "Smooth",
      gillsType: "Free",
      gillsColor: "White",
      stemShape: "Slender",
      stemColor: "White",
      stemRing: "Present",
      habitat: "Oak, beech, and pine trees",
      generalDescription: 
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum vivamus ultrices felis commodo vivamus natoque tincidunt aptent. Pulvinar nam ligula sodales feugiat mollis. Eleifend semper natoque mauris maecenas gravida etiam ultrices. Sed turpis phasellus quis gravida iaculis morbi dui ullamcorper. Mi etiam fames tristique odio duis est ac himenaeos. Cursus dapibus turpis mauris neque natoque ac primis. Habitant id potenti ad arcu diam lorem nascetur. Class erat suspendisse faucibus ridiculus quisque."
    },
    filters: {
      tags: {
        isFavorites: "No",
        isRecent: "No",
      },
      regions: {
        inTexas: "No",
        inNorthAmerica: "Yes",
        inSouthAmerica: "No",
        inAsia: "Yes",
        inEurope: "Yes",
        inAfrica: "No",
      },
      category: {
        isPoisonous: "No",
        isMedicinal: "No",
        isMythical: "No",
        isGoodForBroths: "No",
      },
    },
  };
  
  var PuffballMushroom = {
    names: {
      commonName: "Puffball",
      scientificName: "Lycoperdon perlatum",
    },
    isToxic: false,
    image: "image/puffball.png",
    percentageMatchToDeathCap: 0.6,
    inMyCollection: false,
    characteristics: {
      capShape: "Round",
      capDiameter: "5-15",
      capColor: "White",
      capTexture: "Smooth",
      gillsType: "N/A",  
      gillsColor: "N/A",
      stemShape: "Cylindrical",
      stemColor: "White",
      stemRing: "Absent",
      habitat: "Grasslands, forests, and fields",
      generalDescription: 
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque etiam et sit dui sem quam. Pulvinar senectus dictum aliquam viverra nam ex. Velit odio justo torquent massa viverra rhoncus curae etiam. Phasellus integer netus nostra congue vehicula libero ridiculus. Cursus malesuada amet fusce leo mollis a quisque. Viverra id volutpat eu scelerisque ad."
    },
    filters: {
      tags: {
        isFavorites: "Yes",
        isRecent: "No",
      },
      regions: {
        inTexas: "Yes",
        inNorthAmerica: "Yes",
        inSouthAmerica: "No",
        inAsia: "Yes",
        inEurope: "Yes",
        inAfrica: "No",
      },
      category: {
        isPoisonous: "No",
        isMedicinal: "Yes",
        isMythical: "No",
        isGoodForBroths: "Yes",
      },
    },
  };
  

// More than one export.
export {warningMessage, DeathCapMushroom, PaddyStrawMushroom, DestroyingAngelMushroom, FalseDeathCapMushroom, PuffballMushroom}; // Requires import {warningMessage, dummyData} from './data/development.js';
