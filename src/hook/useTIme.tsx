import { useState, useEffect } from "react";

const useTime = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => {
      var localCurrentDate = new Date();
      var currentUTC =
        localCurrentDate.getTime() +
        localCurrentDate.getTimezoneOffset() * 60000;
      setTodayDate(new Date(currentUTC + 3600000 * 8));
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const today = {
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate(),
    hour: todayDate.getHours(),
    minute: todayDate.getMinutes(),
    second: todayDate.getSeconds(),
    timestamp: todayDate.getTime(),
  };

  const gameToday = {
    minute: Math.floor(
      (((((((((today.hour * 3600 + today.minute * 60 + today.second) * 72) /
        3600 /
        24) %
        24) %
        1) *
        24) %
        24) %
        1) *
        60) %
        60
    ),
    hour: Math.floor(
      ((((((today.hour * 3600 + today.minute * 60 + today.second) * 72) /
        3600 /
        24) %
        24) %
        1) *
        24) %
        24
    ),
    day: Math.floor(
      ((today.hour * 3600 + today.minute * 60 + today.second) * 72) / 3600 / 24
    ),
  };
  return { gameToday, today };
};

export default useTime;
