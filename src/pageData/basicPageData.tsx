interface IBasicPageData {
  [index: string]: {
    pageTitle: string;
    pageSubtitle: string;
    contentName: string;
    contentData: {
      contentType: "title" | "text" | "table" | "musicPlayer";
      contentText?: string;
      tableTR?: {
        tableTD: {
          tableTDText: string;
        }[];
      }[];
    }[];
  };
}

const BasicPageData: IBasicPageData = {
  background: {
    pageTitle: "discover_content_atoppadding_background",
    pageSubtitle: "discover_content_apadding_background",
    contentName: "background",
    contentData: [
      {
        contentType: "title",
        contentText: "basic_background_title_1",
      },
      {
        contentType: "text",
        contentText: "basic_background_title_1_1",
      },
      {
        contentType: "title",
        contentText: "basic_background_title_2",
      },
      {
        contentType: "text",
        contentText: "basic_background_title_2_1",
      },
      {
        contentType: "table",
        tableTR: [
          {
            tableTD: [
              { tableTDText: "" },
              { tableTDText: "" },
              { tableTDText: "const_buddy_time_name" },
              { tableTDText: "" },
              { tableTDText: "" },
              { tableTDText: "const_real_time_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_secs_name" },
              { tableTDText: "0.0138 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_mins_name" },
              { tableTDText: "0.83 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_hour_name" },
              { tableTDText: "50 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_day_name" },
              { tableTDText: "20 " },
              { tableTDText: "" },
              { tableTDText: "const_mins_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_month_name" },
              { tableTDText: "10 " },
              { tableTDText: "" },
              { tableTDText: "const_hour_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_year" },
              { tableTDText: "121.75 " },
              { tableTDText: "" },
              { tableTDText: "const_hour_name" },
            ],
          },
        ],
      },
      {
        contentType: "table",
        tableTR: [
          {
            tableTD: [
              { tableTDText: "" },
              { tableTDText: "" },
              { tableTDText: "const_real_time_name" },
              { tableTDText: "" },
              { tableTDText: "" },
              { tableTDText: "const_buddy_time_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
              { tableTDText: "72 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_secs_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "10 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
              { tableTDText: "12 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_mins_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "50 " },
              { tableTDText: "" },
              { tableTDText: "const_secs_name" },
              { tableTDText: "1 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_hour_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_mins_name" },
              { tableTDText: "1.2 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_hour_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_hour_name" },
              { tableTDText: "3 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_day_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_day_name" },
              { tableTDText: "72 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_day_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_month_name" },
              { tableTDText: "72 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_month_name" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "1 " },
              { tableTDText: "" },
              { tableTDText: "const_year" },
              { tableTDText: "72 " },
              { tableTDText: "const_buddy_name" },
              { tableTDText: "const_year" },
            ],
          },
        ],
      },
      {
        contentType: "title",
        contentText: "basic_background_title_3",
      },
      {
        contentType: "text",
        contentText: "basic_background_title_3_1",
      },
      {
        contentType: "title",
        contentText: "basic_background_title_4",
      },
      {
        contentType: "text",
        contentText: "basic_background_title_4_1",
      },
      {
        contentType: "title",
        contentText: "basic_background_title_5",
      },
      {
        contentType: "text",
        contentText: "basic_background_title_5_1",
      },
    ],
  },
  "calendar-system-and-city-song": {
    pageTitle: "discover_content_atoppadding_calendar_system_city_song",
    pageSubtitle: "discover_content_apadding_calendar_system_city_song",
    contentName: "calendar-system-and-city-song",
    contentData: [
      {
        contentType: "title",
        contentText: "basic_calendar_system_title_1",
      },
      {
        contentType: "text",
        contentText: "basic_calendar_system_title_1_1",
      },
      {
        contentType: "title",
        contentText: "basic_city_song_title_1",
      },
      {
        contentType: "text",
        contentText: "basic_city_song_title_1_1",
      },
      {
        contentType: "musicPlayer",
        contentText: "basic_city_song_title_1_1",
      },
      {
        contentType: "text",
        contentText: "basic_city_song_lyrics_title_1_1",
      },
    ],
  },
  "legal-holiday": {
    pageTitle: "discover_content_atoppadding_legal_holiday",
    pageSubtitle: "discover_content_apadding_legal_holiday",
    contentName: "legal-holiday",
    contentData: [
      {
        contentType: "title",
        contentText: "basic_legal_holiday_title_1",
      },
      {
        contentType: "text",
        contentText: "basic_legal_holiday_title_1_1",
      },
      {
        contentType: "table",
        tableTR: [
          {
            tableTD: [
              { tableTDText: "1" },
              { tableTDText: "2" },
              { tableTDText: "holiday_1_1_name" },
              { tableTDText: "holiday_1_1_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "2" },
              { tableTDText: "1" },
              { tableTDText: "holiday_2_1_name" },
              { tableTDText: "holiday_2_1_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "2" },
              { tableTDText: "11" },
              { tableTDText: "holiday_2_11_name" },
              { tableTDText: "holiday_2_11_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "3" },
              { tableTDText: "8" },
              { tableTDText: "holiday_3_8_name" },
              { tableTDText: "holiday_3_8_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "4" },
              { tableTDText: "4" },
              { tableTDText: "holiday_4_4_name" },
              { tableTDText: "holiday_4_4_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "5" },
              { tableTDText: "1" },
              { tableTDText: "holiday_5_1_name" },
              { tableTDText: "holiday_5_1_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "5" },
              { tableTDText: "17" },
              { tableTDText: "holiday_5_17_name" },
              { tableTDText: "holiday_5_17_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "6" },
              { tableTDText: "21" },
              { tableTDText: "holiday_6_21_name" },
              { tableTDText: "holiday_6_21_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "7" },
              { tableTDText: "1" },
              { tableTDText: "holiday_7_1_name" },
              { tableTDText: "holiday_7_1_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "10" },
              { tableTDText: "10" },
              { tableTDText: "holiday_10_10_name" },
              { tableTDText: "holiday_10_10_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "11" },
              { tableTDText: "13" },
              { tableTDText: "holiday_11_13_name" },
              { tableTDText: "holiday_11_13_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "12" },
              { tableTDText: "24" },
              { tableTDText: "holiday_12_24_name" },
              { tableTDText: "holiday_12_24_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "12" },
              { tableTDText: "25" },
              { tableTDText: "holiday_12_25_name" },
              { tableTDText: "holiday_12_25_description" },
            ],
          },
          {
            tableTD: [
              { tableTDText: "12" },
              { tableTDText: "26" },
              { tableTDText: "holiday_12_26_name" },
              { tableTDText: "holiday_12_26_description" },
            ],
          },
        ],
      },
    ],
  },
};

export default BasicPageData;
