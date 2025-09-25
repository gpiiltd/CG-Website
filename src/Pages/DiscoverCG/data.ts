import ship_asset from '../../assets/svgImages/ship_asset.svg';
import ship_asset2 from '../../assets/svgImages/ship_asset2.svg';
import ship_asset3 from '../../assets/svgImages/ship_asset3.svg';
import ship_asset4 from '../../assets/svgImages/ship_asset4.svg';
import bg_video from '../../assets/videos/CD_video.mp4';

export type FactSheet = {
  yearBuild: string;
  imo: string;
  beam: string;
  overallLength: string;
  overallWidth: string;
  vesselType: string;
  vesselTypeDetailed: string;
  navigationalStatus: string;
  mmsi: string;
  callSign: string;
  grossTonnage: string;
};

export type Asset = {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  factSheet: FactSheet;
  buttons: string[];
};


export const assets = [
    {
      id: 1,
      title: "FPSO Tamara Nanaye",
      description: "From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.",
      image: ship_asset,
      videoUrl: bg_video, // Replace with actual video URL
      factSheet: {
        yearBuild: "1999",
        imo: "9164847",
        beam: "58",
        overallLength: "333 mtr",
        overallWidth: "58m",
        vesselType: "Tanker",
        vesselTypeDetailed: "Crude Oil Tanker",
        navigationalStatus: "Active",
        mmsi: "370570000",
        callSign: "3FNX9",
        grossTonnage: "310137t"
      },
      buttons: ["View Asset Details", "Watch The Tour"]
    },
    {
      id: 2,
      title: "FPSO Tamara Tokoni",
      description: "From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.",
      image: ship_asset2,
      videoUrl: bg_video,
      factSheet: {
        yearBuild: "2001",
        imo: "9164848",
        beam: "62",
        overallLength: "340 mtr",
        overallWidth: "62m",
        vesselType: "FPSO",
        vesselTypeDetailed: "Floating Production Storage",
        navigationalStatus: "Active",
        mmsi: "370570001",
        callSign: "3FNY1",
        grossTonnage: "315000t"
      },
      buttons: []
    },
    {
      id: 3,
      title: "FPSO Tamara Elmina",
      description: "From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.",
      image: ship_asset3,
      videoUrl:bg_video,
      factSheet: {
        yearBuild: "2003",
        imo: "9164849",
        beam: "60",
        overallLength: "350 mtr",
        overallWidth: "60m",
        vesselType: "FPSO",
        vesselTypeDetailed: "Floating Production Storage",
        navigationalStatus: "Active",
        mmsi: "370570002",
        callSign: "3FNZ2",
        grossTonnage: "320000t"
      },
      buttons: []
    },
    {
      id: 4,
      title: "FSO ELI AKASO",
      description: "From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.",
      image: ship_asset4,
      videoUrl: bg_video,
      factSheet: {
        yearBuild: "1999",
        imo: "9164847",
        beam: "58",
        overallLength: "333 mtr",
        overallWidth: "58m",
        vesselType: "Tanker",
        vesselTypeDetailed: "Crude Oil Tanker",
        navigationalStatus: "Active",
        mmsi: "370570000",
        callSign: "3FNX9",
        grossTonnage: "310137t"
      },
      buttons: []
    }
  ]
