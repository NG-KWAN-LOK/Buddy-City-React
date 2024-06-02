import { useState } from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

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

const SwiperImageDisplay = ({
  districtid,
  buildingid,
  isDecoration,
}: {
  districtid: string;
  buildingid: string;
  isDecoration: boolean;
}) => {
  const { t } = useTranslation();
  const [errorNum, setErrorNum] = useState(3);

  const sideText = [
    t("const_front"),
    t("const_right"),
    t("const_back"),
    t("const_left"),
  ];

  return (
    <div className={styles.container}>
      {
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
          {Array.from(
            { length: isDecoration ? 10 - errorNum : 4 },
            (_, index) => {
              return (
                <SwiperSlide key={`${districtid}-${buildingid}-${index}`}>
                  {
                    <div
                      className={styles.pageContainer_TopContainer_banner_slide}
                    >
                      <img
                        className={
                          styles.pageContainer_TopContainer_banner_slide_img
                        }
                        src={
                          process.env.REACT_APP_ONLINE_LOCAL_MAP_SOURCE ===
                          "true"
                            ? `http://localhost:3000/building-list/${districtid}/${buildingid}/${index}.jpg`
                            : `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_STORAGE_BUCKET}/o/building-list%2F${districtid}%2F${buildingid}%2F${index}.jpg?alt=media`
                        }
                        onError={() => {
                          setErrorNum(errorNum + 1);
                        }}
                      />
                      <div
                        className={
                          styles.pageContainer_TopContainer_banner_slide_locationName
                        }
                      >
                        {index < 4 ? sideText[index] : t("const_interior")}
                      </div>
                    </div>
                  }
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      }
    </div>
  );
};

export default SwiperImageDisplay;
