import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import banner0 from "../../../image/photo/000.jpg";
import banner1 from "../../../image/photo/001.jpg";
import banner2 from "../../../image/photo/002.jpg";
import banner3 from "../../../image/photo/003.jpg";
import banner4 from "../../../image/photo/004.jpg";
import banner5 from "../../../image/photo/005.jpg";
import banner6 from "../../../image/photo/006.jpg";
import banner7 from "../../../image/photo/007.jpg";
import banner8 from "../../../image/photo/008.jpg";
import banner9 from "../../../image/photo/009.jpg";
import banner10 from "../../../image/photo/010.jpg";
import banner11 from "../../../image/photo/011.jpg";
import banner12 from "../../../image/photo/012.jpg";
import banner13 from "../../../image/photo/013.jpg";
import banner14 from "../../../image/photo/014.jpg";
import banner15 from "../../../image/photo/015.jpg";
import banner16 from "../../../image/photo/016.jpg";
import banner17 from "../../../image/photo/017.jpg";
import banner18 from "../../../image/photo/018.jpg";
import banner19 from "../../../image/photo/019.jpg";
import banner20 from "../../../image/photo/020.jpg";
import banner21 from "../../../image/photo/021.jpg";
import banner22 from "../../../image/photo/022.jpg";
import banner23 from "../../../image/photo/023.jpg";
import banner24 from "../../../image/photo/024.jpg";
import banner25 from "../../../image/photo/025.jpg";
import banner26 from "../../../image/photo/026.jpg";
import banner27 from "../../../image/photo/027.jpg";
import banner28 from "../../../image/photo/028.jpg";
import banner29 from "../../../image/photo/029.jpg";
import banner30 from "../../../image/photo/030.jpg";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperBanner: React.FC = () => {
  const { t } = useTranslation();
  let bannerImgList = [
    {
      url: banner1,
      place: "",
    },
    {
      url: banner2,
      place: "reality_project_osaka_castle_park",
    },
    {
      url: banner28,
      place: "reality_project_dotonbori",
    },
    {
      url: banner25,
      place: "reality_project_Otowayama_Kiyomizu_Dera",
    },
    {
      url: banner27,
      place: "reality_project_Hokanji_Temple",
    },
    {
      url: banner3,
      place: "reality_project_Tokyo_Tower",
    },
    {
      url: banner4,
      place: "reality_project_Bank_of_China_(HK)_Building",
    },
    {
      url: banner5,
      place: "reality_project_Teipei_101",
    },
    {
      url: banner6,
      place: "reality_project_paletteTown",
    },
    {
      url: banner26,
      place: "reality_project_Kiyomizu_Zaka",
    },
    {
      url: banner7,
      place: "reality_project_Megurogawa",
    },
    {
      url: banner8,
      place: "reality_project_Kiyomizu_Temple_by_RoyHo",
    },
    {
      url: banner9,
      place: "reality_project_Tsing_Ma_Bridge",
    },
    {
      url: banner10,
      place: "reality_project_Buddy_City_Sport_Ground",
    },
    {
      url: banner11,
      place: "reality_project_LCW",
    },
    {
      url: banner12,
      place: "reality_project_Hong_Kong_Central_Library",
    },
    {
      url: banner13,
      place: "reality_project_Buddy_City_Government_Office",
    },
    {
      url: banner14,
      place: "reality_project_Buddy_Christianity_Hospital",
    },
    {
      url: banner15,
      place: "reality_project_Buddy_City_Police_Department_Headquarters",
    },
    {
      url: banner16,
      place: "reality_project_Buddy_City_Fire_Department_Headquarters",
    },
    {
      url: banner17,
      place: "reality_project_Buddy_City_Pier",
    },
    {
      url: banner18,
      place: "reality_project_City_One",
    },
    {
      url: banner19,
      place: "reality_project_Buddy_City_Nuclear_Disaster",
    },
    {
      url: banner20,
      place: "reality_project_Former_Kowloon-Canton_Railway_Clock_Tower",
    },
    {
      url: banner21,
      place: "reality_project_Gallant_Garden",
    },
    {
      url: banner22,
      place: "reality_project_Buddy_City_Space_Center",
    },
    {
      url: banner23,
      place: "reality_project_Tivoli_Garden",
    },
    {
      url: banner24,
      place: "reality_project_Tsing_Yi_Municipal_Services_Building",
    },
    {
      url: banner29,
      place: "reality_project_Hep_Five",
    },
    {
      url: banner30,
      place: "reality_project_Crystal_Tower",
    },
    {
      url: banner0,
      place: "",
    },
  ];
  return (
    <div className={styles.container}>
      <Swiper
        style={{ height: "100%" }}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className={styles.pageContainer_TopContainer_banner_content}
      >
        {bannerImgList.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              {
                <div className={styles.pageContainer_TopContainer_banner_slide}>
                  <img
                    className={
                      styles.pageContainer_TopContainer_banner_slide_img
                    }
                    src={data.url}
                  />
                  <div
                    className={
                      styles.pageContainer_TopContainer_banner_slide_locationName
                    }
                  >
                    {t(data.place)}
                  </div>
                </div>
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
