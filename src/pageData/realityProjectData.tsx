import image11 from "../image/photo/compress/002.jpg";
import image12 from "../image/photo/big/002.png";
import image21 from "../image/photo/compress/003.jpg";
import image22 from "../image/photo/big/003.png";
import image31 from "../image/photo/compress/004.jpg";
import image32 from "../image/photo/big/004.png";
import image41 from "../image/photo/compress/005.jpg";
import image42 from "../image/photo/big/005.png";
import image51 from "../image/photo/compress/006.jpg";
import image52 from "../image/photo/big/006.png";
import image61 from "../image/photo/compress/007.jpg";
import image62 from "../image/photo/big/007.png";
import image71 from "../image/photo/compress/008.jpg";
import image72 from "../image/photo/big/008.png";
import image81 from "../image/photo/compress/009.jpg";
import image82 from "../image/photo/big/009.png";
import image91 from "../image/photo/compress/010.jpg";
import image92 from "../image/photo/big/010.png";
import image101 from "../image/photo/compress/014.jpg";
import image102 from "../image/photo/big/014.png";
import image111 from "../image/photo/compress/012.jpg";
import image112 from "../image/photo/big/012.png";
import image121 from "../image/photo/compress/013.jpg";
import image122 from "../image/photo/big/013.png";
import image131 from "../image/photo/compress/011.jpg";
import image132 from "../image/photo/big/011.png";
import image141 from "../image/photo/compress/015.jpg";
import image142 from "../image/photo/big/015.png";
import image151 from "../image/photo/compress/016.jpg";
import image152 from "../image/photo/big/016.png";
import image161 from "../image/photo/compress/017.jpg";
import image162 from "../image/photo/big/017.png";
import image171 from "../image/photo/compress/018.jpg";
import image172 from "../image/photo/big/018.png";
import image181 from "../image/photo/compress/019.jpg";
import image182 from "../image/photo/big/019.png";
import image191 from "../image/photo/compress/020.jpg";
import image192 from "../image/photo/big/020.png";
import image201 from "../image/photo/compress/021.jpg";
import image202 from "../image/photo/big/021.png";
import image211 from "../image/photo/compress/022.jpg";
import image212 from "../image/photo/big/022.png";
import image221 from "../image/photo/compress/023.jpg";
import image222 from "../image/photo/big/023.png";
import image231 from "../image/photo/compress/024.jpg";
import image232 from "../image/photo/big/024.png";

interface IRealityProjectData {
  pageTitle: string;
  imgData: (
    | {
        title: string;
        title2: null;
        image1: string;
        image2: string;
      }
    | {
        title: string;
        title2: string;
        image1: string;
        image2: string;
      }
  )[];
}

const realityProjectData: IRealityProjectData = {
  pageTitle: "reality_project_title",
  imgData: [
    {
      title: "reality_project_osaka_castle_park",
      title2: null,
      image1: image11,
      image2: image12,
    },
    {
      title: "reality_project_Tokyo_Tower",
      title2: null,
      image1: image21,
      image2: image22,
    },
    {
      title: "reality_project_Bank_of_China_(HK)_Building",
      title2: null,
      image1: image31,
      image2: image32,
    },
    {
      title: "reality_project_Teipei_101",
      title2: null,
      image1: image41,
      image2: image42,
    },
    {
      title: "reality_project_paletteTown",
      title2: null,
      image1: image51,
      image2: image52,
    },
    {
      title: "reality_project_Megurogawa",
      title2: null,
      image1: image61,
      image2: image62,
    },
    {
      title: "reality_project_Kiyomizu_Temple_by_RoyHo",
      title2: null,
      image1: image71,
      image2: image72,
    },
    {
      title: "reality_project_Tsing_Ma_Bridge",
      title2: null,
      image1: image81,
      image2: image82,
    },
    {
      title: "reality_project_Buddy_City_Sport_Ground",
      title2: "reality_project_Buddy_City_Sport_Ground_sub",
      image1: image91,
      image2: image92,
    },
    {
      title: "reality_project_Buddy_Christianity_Hospital",
      title2: "reality_project_Buddy_Christianity_Hospital_sub",
      image1: image101,
      image2: image102,
    },
    {
      title: "reality_project_Hong_Kong_Central_Library",
      title2: null,
      image1: image111,
      image2: image112,
    },
    {
      title: "reality_project_Buddy_City_Government_Office",
      title2: "reality_project_Buddy_City_Government_Office_sub",
      image1: image121,
      image2: image122,
    },
    {
      title: "reality_project_LCW",
      title2: null,
      image1: image131,
      image2: image132,
    },
    {
      title: "reality_project_Buddy_City_Police_Department_Headquarters",
      title2: "reality_project_Buddy_City_Police_Department_Headquarters_sub",
      image1: image141,
      image2: image142,
    },
    {
      title: "reality_project_Buddy_City_Fire_Department_Headquarters",
      title2: "reality_project_Buddy_City_Fire_Department_Headquarters_sub",
      image1: image151,
      image2: image152,
    },
    {
      title: "reality_project_Buddy_City_Pier",
      title2: "reality_project_Buddy_City_Pier_sub",
      image1: image161,
      image2: image162,
    },
    {
      title: "reality_project_City_One",
      title2: null,
      image1: image171,
      image2: image172,
    },
    {
      title: "reality_project_Buddy_City_Nuclear_Disaster",
      title2: "reality_project_Buddy_City_Nuclear_Disaster_sub",
      image1: image181,
      image2: image182,
    },
    {
      title: "reality_project_Former_Kowloon-Canton_Railway_Clock_Tower",
      title2: null,
      image1: image191,
      image2: image192,
    },
    {
      title: "reality_project_Gallant_Garden",
      title2: null,
      image1: image201,
      image2: image202,
    },
    {
      title: "reality_project_Buddy_City_Space_Center",
      title2: "reality_project_Buddy_City_Space_Center_sub",
      image1: image211,
      image2: image212,
    },
    {
      title: "reality_project_Tivoli_Garden",
      title2: null,
      image1: image221,
      image2: image222,
    },
    {
      title: "reality_project_Tsing_Yi_Municipal_Services_Building",
      title2: null,
      image1: image231,
      image2: image232,
    },
  ],
};

export default realityProjectData;
