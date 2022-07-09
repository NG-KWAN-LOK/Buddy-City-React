import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import citySongLyrics from "../../pageData/citySongLyrics";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");
  const handleOnTimeUpdate = (e) => {
    setVideoCurrentTime(Math.floor(e.target.currentTime));
  };
  useEffect(() => {
    if (typeof citySongLyrics[videoCurrentTime] !== "undefined") {
      setSubtitle(citySongLyrics[videoCurrentTime].lyrics);
    }
  }, [videoCurrentTime]);
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_top_subtitle}>{subtitle}</div>
      </div>
      <video
        width="100%"
        height="50"
        controls
        controlsList="nodownload"
        onTimeUpdate={handleOnTimeUpdate}
      >
        <source src={src} />
      </video>
    </div>
  );
};

export default VideoPlayer;
