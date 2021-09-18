import React from "react";
import styles from "./style.module.scss";

import banner1 from "../../image/photo/001.jpg";
import banner2 from "../../image/photo/002.jpg";
import banner3 from "../../image/photo/003.jpg";
import banner4 from "../../image/photo/004.jpg";
import banner5 from "../../image/photo/005.jpg";
import banner6 from "../../image/photo/006.jpg";
import banner7 from "../../image/photo/007.jpg";
import banner8 from "../../image/photo/008.jpg";
import banner9 from "../../image/photo/009.jpg";
import banner10 from "../../image/photo/010.jpg";
import banner11 from "../../image/photo/011.jpg";
import banner12 from "../../image/photo/012.jpg";
import banner13 from "../../image/photo/013.jpg";
import banner14 from "../../image/photo/014.jpg";
import banner15 from "../../image/photo/015.jpg";
import banner16 from "../../image/photo/016.jpg";
import banner17 from "../../image/photo/017.jpg";
import banner18 from "../../image/photo/018.jpg";
import banner19 from "../../image/photo/019.jpg";
import banner20 from "../../image/photo/020.jpg";
import banner21 from "../../image/photo/021.jpg";
import banner22 from "../../image/photo/022.jpg";
import banner23 from "../../image/photo/023.jpg";
import banner24 from "../../image/photo/024.jpg";

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
  let bannerImgList = [
    {
      //url : "../../image/banner/1608418919930.jpg"
      url: banner1,
    },
    {
      url: banner2,
    },
    {
      url: banner3,
    },
    {
      url: banner4,
    },
    {
      url: banner5,
    },
    {
      url: banner6,
    },
    {
      url: banner7,
    },
    {
      url: banner8,
    },
    {
      url: banner9,
    },
    {
      url: banner10,
    },
    {
      url: banner11,
    },
    {
      url: banner12,
    },
    {
      url: banner13,
    },
    {
      url: banner14,
    },
    {
      url: banner15,
    },
    {
      url: banner16,
    },
    {
      url: banner17,
    },
    {
      url: banner18,
    },
    {
      url: banner19,
    },
    {
      url: banner20,
    },
    {
      url: banner21,
    },
    {
      url: banner22,
    },
    {
      url: banner23,
    },
    {
      url: banner24,
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
                  ></img>
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
