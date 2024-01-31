import CentralLine from "../image/subway/central_line.jpg";
import HangenLine from "../image/subway/hangen_line.jpg";
import FutaKeihanLine from "../image/subway/koyo_mizu_sha_Tin_Line.jpg";
import MidosujiLine from "../image/subway/mido_suji_line.jpg";
import AirportExpress from "../image/subway/air.jpg";
import Tram from "../image/subway/tram.jpg";
import ElevatedOne from "../image/subway/high1.jpg";
import ElevatedTwo from "../image/subway/high2.jpg";
import walking from "../image/subway/symbols-icons-walking.svg";

export interface RailwayLines {
  [key: string]: string[];
}

export const railwayLines: RailwayLines = {
  ert_route_line1_title: [
    "const_buddy_city_railway_terminus",
    "const_enderman",
    "const_dyings_home",
    "const_zombie_ground",
    "const_super_restaurant",
    "const_mok_ms_home",
    "const_buddy_city_train_terminus",
  ],
  ert_route_line2_title: [
    "const_buddy_city_railway_terminus",
    "const_buddy_city_sport_ground",
    "const_buddy_city_television_city",
  ],
  mst_route_central_line_title: [
    "const_tanimachi_yochome",
    "const_sha_tin",
    "const_central",
    "const_space_center_mae",
    "const_desert_tokyo",
    "const_hong_kong_island_causeway",
    "const_taipei_101",
    "const_nuclear_disaster_mea",
  ],
  mst_route_hangen_ryokuchi_line_title: [
    "const_osaka_business_park",
    "const_kiyo_mizu",
    "const_meguro_gawa",
    "const_buddy_hill",
    "const_sha_tin",
    "const_tsing_yi",
    "const_lcw",
    "const_taipei_101",
    "const_nuclear_disaster_mea",
  ],
  mst_route_futa_keihan_Line_title: [
    "const_tanimachi_yochome",
    "const_nanba",
    "const_higashi_umeda",
    "const_kyoto",
    "const_kiyo_mizu",
    "const_meguro_gawa",
    "const_desert_tokyo",
  ],
  mst_route_mido_suji_Line_title: [
    "const_tanimachi_yochome",
    "const_shinsaibashi",
    "const_nanba",
    "const_higashi_umeda",
    "const_yodoyabashi",
    "const_osaka_business_park",
  ],
  const_airport_express_local_service: [
    "const_tanimachi_yochome_air",
    "const_sha_tin_air",
    "const_central_air",
    "const_space_center_mae",
    "const_desert_tokyo_air",
    "const_buddy_city_international_airport_by_kai",
  ],
  const_airport_express_service: [
    "const_tanimachi_yochome_air",
    "const_central_air",
    "const_buddy_city_international_airport_by_kai",
  ],
  bct_route_tramways_title: [
    "const_buddy_city_train_terminus",
    "const_lcw_tram",
    "const_buddy_city_railway_terminus_tram",
    "const_supers_home",
    "const_buddy_city_sport_ground_tram",
    "const_tsing_yi_promenade",
    "const_tivoli_garden",
    "const_city_one",
    "const_former_kowloon_canton_railway_clock_tower",
    "const_buddy_road_basketball_court",
    "const_dyings_home_tram",
    "const_st_mok_m_church",
    "const_sawajiris_home",
    "const_the_dick",
    "const_osaka_castle_park",
    "const_ebisu_bridge",
    "const_dotonbori_shopping_street",
    "const_hep_five",
    "const_crystal_tower",
    "const_jacks_fighting_center",
    "const_kiyomizu_zaka",
    "const_yasaka_pagoda",
    "const_otowayama_kiyomizu_dera",
    "const_kiyomizu_temple_by_royho",
    "const_chuncwais_home",
    "const_meguro_gawa_tram",
    "const_buddy_city_fire_department_headquarters",
    "const_time_hourglass",
    "const_bank_of_china_hk_building",
    "const_hong_kong_central_library",
    "const_taipei_101_tram",
    "const_buddy_christianity_hospital",
    "const_buddy_city_nuclear_disaster",
    "const_tokyo_tower",
    "const_palette_town",
    "const_buddy_paradise",
  ],
};

const reserveTramStation = {
  bct_route_tramways_title1: [
    "const_hep_five",
    "const_crystal_tower",
    "const_jacks_fighting_center",
    "const_kiyomizu_zaka",
    "const_yasaka_pagoda",
    "const_otowayama_kiyomizu_dera",
    "const_kiyomizu_temple_by_royho",
    "const_chuncwais_home",
    "const_meguro_gawa_tram",
    "const_buddy_city_fire_department_headquarters",
    "const_time_hourglass",
    "const_bank_of_china_hk_building",
    "const_hong_kong_central_library",
    "const_taipei_101_tram",
    "const_buddy_christianity_hospital",
    "const_buddy_city_nuclear_disaster",
    "const_tokyo_tower",
    "const_palette_town",
    "const_buddy_paradise",
    "const_buddy_city_train_terminus",
    "const_lcw_tram",
    "const_buddy_city_railway_terminus_tram",
    "const_supers_home",
    "const_buddy_city_sport_ground_tram",
    "const_tsing_yi_promenade",
    "const_tivoli_garden",
    "const_city_one",
    "const_former_kowloon_canton_railway_clock_tower",
    "const_buddy_road_basketball_court",
    "const_dyings_home_tram",
    "const_st_mok_m_church",
    "const_sawajiris_home",
    "const_the_dick",
    "const_osaka_castle_park",
    "const_ebisu_bridge",
  ],
};

const interchangeStation = {
  walk_line_station_1: ["const_buddy_city_railway_terminus", "const_central"],
};

const discountedUnpaidInterchange = {
  walk_line_discounted_1: ["const_tokyo_tower", "const_desert_tokyo"],
  walk_line_discounted_2: ["const_taipei_101", "const_taipei_101_tram"],
  walk_line_discounted_3: ["const_sha_tin", "const_city_one"],
  walk_line_discounted_4: ["const_dyings_home", "const_dyings_home_tram"],
  walk_line_discounted_5: [
    "const_tanimachi_yochome",
    "const_osaka_castle_park",
  ],
  walk_line_discounted_6: ["const_kyoto", "const_yasaka_pagoda"],
  walk_line_discounted_7: ["const_tsing_yi", "const_buddy_city_sport_ground"],
  walk_line_discounted_8: [
    "const_tanimachi_yochome",
    "const_tanimachi_yochome_air",
  ],
  walk_line_discounted_9: ["const_sha_tin", "const_sha_tin_air"],
  walk_line_discounted_10: ["const_central", "const_central_air"],
  walk_line_discounted_11: ["const_desert_tokyo", "const_desert_tokyo_air"],
};

const unpaidInterchange = {
  walk_line_unpaid_1: ["const_meguro_gawa", "const_meguro_gawa_tram"],
  walk_line_unpaid_2: [
    "const_nuclear_disaster_mea",
    "const_buddy_city_nuclear_disaster",
  ],
  walk_line_unpaid_3: [
    "const_hong_kong_island_causeway",
    "const_hong_kong_central_library",
  ],
  walk_line_unpaid_4: ["const_osaka_business_park", "const_crystal_tower"],
  walk_line_unpaid_5: ["const_space_center_mae", "const_mok_ms_home"],
  walk_line_unpaid_6: ["const_kiyo_mizu", "const_jacks_fighting_center"],
  walk_line_unpaid_7: ["const_shinsaibashi", "const_dotonbori_shopping_street"],
  walk_line_unpaid_8: ["const_lcw", "const_lcw_tram"],
  walk_line_unpaid_9: ["const_sawajiris_home", "const_jacks_fighting_center"],
  walk_line_unpaid_10: [
    "const_hong_kong_central_library",
    "const_palette_town",
  ],
};

export interface RailwayLineOption {
  label: string;
  line: string;
  station: string;
}

export const CONST_INTERCHANGE_LINE = "const_interchange";
export const CONST_INTERCHANGE_WALK = "const_walk";
export const CONST_TRANSFER = "const_transfer";
export const WALK_LINE = "walk_line";

export enum SearchOption {
  BEST_ROUTE = "const_best_route",
  DISCOUNT_INTERCHANGE = "const_discounted_interchange",
  PAID_INTERCHANGE = "const_paid_interchange",
  LESS_WALK = "const_less_walk",
}

export enum RailwayLineBackGroundColors {
  ert_route_line1_title = "#00DBD5",
  ert_route_line2_title = "#FF00FF",
  mst_route_central_line_title = "#792AAC",
  mst_route_hangen_ryokuchi_line_title = "#70B919",
  mst_route_futa_keihan_Line_title = "#F8C627",
  mst_route_mido_suji_Line_title = "#E5171F",
  const_airport_express_local_service = "#0000ff",
  const_airport_express_service = "#0000ff",
  bct_route_tramways_title = "#000000",
  const_interchange = "#bbb",
}

export const RailwayLineImage = {
  ert_route_line1_title: ElevatedOne,
  ert_route_line2_title: ElevatedTwo,
  mst_route_central_line_title: CentralLine,
  mst_route_hangen_ryokuchi_line_title: HangenLine,
  mst_route_futa_keihan_Line_title: FutaKeihanLine,
  mst_route_mido_suji_Line_title: MidosujiLine,
  const_airport_express_local_service: AirportExpress,
  const_airport_express_service: AirportExpress,
  bct_route_tramways_title: Tram,
  const_interchange: walking,
};

export const getSubwayLine = (searchOption: SearchOption) => {
  // 最少步行次數
  let subwayLine = {
    ...railwayLines,
    ...reserveTramStation,
    ...interchangeStation,
  };

  // 同線站內轉乘，有站外轉乘，有跨線站內轉乘
  // 全站內轉乘，有站外轉乘
  // 只要全價轉乘
  const four = {
    ...subwayLine,
    ...unpaidInterchange,
  };

  // 同線站內轉乘，有站外轉乘，有優惠轉乘
  // 全站內轉乘，有優惠轉乘
  if (searchOption === SearchOption.DISCOUNT_INTERCHANGE) {
    return {
      ...subwayLine,
      ...discountedUnpaidInterchange,
    };
  }

  // 全站內轉乘，有優惠轉乘，有站外轉乘
  if (searchOption === SearchOption.BEST_ROUTE) {
    return {
      ...subwayLine,
      ...unpaidInterchange,
      ...discountedUnpaidInterchange,
    };
  }

  return subwayLine;
};
