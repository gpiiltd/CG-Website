import ship_asset from '../../assets/svgImages/ship_asset.svg';
import ship_asset2 from '../../assets/svgImages/ship_asset2.svg';
import ship_asset3 from '../../assets/svgImages/ship_asset3.svg';
import ship_asset4 from '../../assets/svgImages/ship_asset4.svg';
import bg_video from '../../assets/videos/CD_video.mp4';
import elmina_tour from '../../assets/videos/Guardian_of_Okwori.mp4';
import CPTL_SOLUTIONS from '../../assets/videos/CPTL_SOLUTIONS.mp4';



// export type FactSheet = {
//   yearBuild: string;
//   imo: string;
//   beam: string;
//   overallLength: string;
//   overallWidth: string;
//   vesselType: string;
//   vesselTypeDetailed: string;
//   navigationalStatus: string;
//   mmsi: string;
//   callSign: string;
//   grossTonnage: string;
// };

export type FactSheet = Record<string, string | undefined>;


export type Asset = {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl: string | null;
  factSheet: FactSheet;
  buttons: string[];
};

export const assets = [
  {
    id: 1,
    title: 'FPSO Tamara Nanaye',
    description:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    image: ship_asset,
    videoUrl: CPTL_SOLUTIONS,
    factSheet: {
      yearBuild: '1999',
      imo: '9164847',
      beam: '58',
      overallLength: '333 mtr',
      overallWidth: '58m',
      vesselType: 'Tanker',
      vesselTypeDetailed: 'Crude Oil Tanker',
      navigationalStatus: 'Active',
      mmsi: '370570000',
      callSign: '3FNX9',
      grossTonnage: '310137t',
    },
    buttons: ['View Asset Details', 'Watch The Tour'],
  },
  {
    id: 2,
    title: 'FPSO Tamara Tokoni',
    description:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    image: ship_asset2,
    videoUrl: bg_video,
    factSheet: {
      yearBuild: '1984',
      yearConverted: '2008',
      class: 'ABS',
      overallLength: '298m',
      overallWidth: '46m',
      accomodationCapacity: '87',
      hullType: 'Single hull width impact protection',
      mooringType: '12 point spread mooring (3 lines x 4 clusters)',
      offLoadingStation:
        'Portside tandem offloading system via 20 (line and 16) double tail hoses, fitted with Gall-Thomsor marine',
      HelideckSuitability: 'Super Puma AS332-LS',
      cranageAvailable: '2 nos x 27T @ 15m reach (deck)',
    },
    buttons: [],
  },
  {
    id: 3,
    title: 'FPSO Tamara Elmina',
    description:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    image: ship_asset3,
    videoUrl: elmina_tour,
    factSheet: {
      yearBuild: '1994',
      yearConverted: '2000',
      imo: '9164849',
      beam: '60',
      overallLength: '348.77 mtr',
      overallWidth: '46m',
      accomodationCapacity: '100',
      displacementFullyLoaded: '314,238',
      displacementLightShip: '41,836',
      shaftHPAvalaible: '32400 HP 23846 KW Steam Turbine',
      helideckSuitablity: 'Super puma AS332-L2',
      helideck: 'D value 19.5m, max-weight 9150kg',
      draught: '21.37 mtr',
      designSpeed: '16kn',
      fuelCapacity: '1200 m3',
      depthMoulded: '27.35 mtr',
      registeredBeam: '46m',
      deadeight: '274,333',
    },
    buttons: [],
  },
  {
    id: 4,
    title: 'FSO ELI AKASO',
    description:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    image: ship_asset4,
    videoUrl: null,
    factSheet: {

    },
    buttons: [],
  },
];
