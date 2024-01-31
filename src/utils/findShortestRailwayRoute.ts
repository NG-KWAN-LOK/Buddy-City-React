import { RecommendRoute } from "../interface/RecommendRoute";
import {
  CONST_INTERCHANGE_LINE,
  RailwayLines,
  WALK_LINE,
} from "../pageData/railwayRouteData";

interface Queue {
  station: string;
  line: string;
  path: RecommendRoute[];
  interchange: boolean;
  showLine: boolean;
}

export const findRoute = (
  subwayLines: RailwayLines,
  startStation: string,
  endStation: string
) => {
  let visited = new Set();
  let queue: Queue[] = [];

  // 初始化隊列，包含起始站的所有可能路線
  Object.keys(subwayLines).forEach((line) => {
    if (subwayLines[line].includes(startStation)) {
      queue.push({
        station: startStation,
        line: line,
        path: [],
        interchange: false,
        showLine: false,
      });
    }
  });

  while (queue.length > 0) {
    const shiftQueue = queue.shift();
    if (shiftQueue === undefined) {
      continue;
    }
    let { station, line, path, interchange, showLine } = shiftQueue;

    if (station === startStation) {
      showLine = true;
    }

    if (station === endStation) {
      path = path.map((item, index) => {
        if (item.line === CONST_INTERCHANGE_LINE) {
          path[index - 1].interchange = true;
        }
        if (item.line[item.line.length - 1] === "1") {
          item.line = item.line.slice(0, item.line.length - 1);
        }
        return item;
      });

      path = path.filter((item, index) => {
        if (item.line.includes(WALK_LINE) && index !== 0) {
          return false;
        }
        return true;
      });

      path = path.filter((item, index) => {
        if (
          item.line === CONST_INTERCHANGE_LINE &&
          path[index - 1].line === CONST_INTERCHANGE_LINE
        ) {
          return false;
        }
        return true;
      });

      if (path.length > 1) {
        if (path[1].line === CONST_INTERCHANGE_LINE) {
          path[1].station = WALK_LINE;
        }

        if (path[path.length - 1].line === CONST_INTERCHANGE_LINE) {
          path[path.length - 1].station = WALK_LINE;
        }
      }

      // if path length is 1, concat one walk line
      if (path.length === 1) {
        path = path.concat({
          station: WALK_LINE,
          line: CONST_INTERCHANGE_LINE,
          interchange: true,
          showLine: false,
        });
      }

      return path.concat({ station, line, interchange, showLine });
    }

    let currentPath = path.concat({ station, line, interchange, showLine });
    let currentLineStations = subwayLines[line];
    let stationIndex = currentLineStations.indexOf(station);

    // 檢查下一站點
    if (stationIndex < currentLineStations.length - 1) {
      let nextStation = currentLineStations[stationIndex + 1];
      let nextKey = `${nextStation}-${line}`;
      if (!visited.has(nextKey)) {
        visited.add(nextKey);
        queue.push({
          station: nextStation,
          line,
          path: currentPath,
          interchange: false,
          showLine: false,
        });
      }
    }

    // 檢查前一站點
    if (stationIndex > 0) {
      let prevStation = currentLineStations[stationIndex - 1];
      let prevKey = `${prevStation}-${line}`;
      if (!visited.has(prevKey)) {
        visited.add(prevKey);
        queue.push({
          station: prevStation,
          line,
          path: currentPath,
          interchange: false,
          showLine: false,
        });
      }
    }

    // 檢查所有其他路線是否需要轉線
    Object.keys(subwayLines).forEach((otherLine) => {
      if (otherLine !== line && subwayLines[otherLine].includes(station)) {
        let nextStation = station;
        let nextKey = `${nextStation}-${otherLine}`;
        if (!visited.has(nextKey)) {
          visited.add(nextKey);
          // 在轉換前加入“走路”的記錄
          let interchangePath = currentPath.concat({
            station: otherLine,
            line: CONST_INTERCHANGE_LINE,
            interchange: true,
            showLine: false,
          });

          queue.push({
            station: nextStation,
            line: otherLine,
            path: interchangePath,
            interchange: true,
            showLine: true,
          });
        }
      }
    });
  }

  return [];
};
