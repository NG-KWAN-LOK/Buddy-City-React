import React from "react";

import { useTranslation } from "react-i18next";
import { Autocomplete, Box, TextField, Theme } from "@mui/material";
import {
  RailwayLineBackGroundColors,
  RailwayLineOption,
  railwayLines,
} from "../../../../../pageData/railwayRouteData";
import { getTextColor } from "../../../../../utils/getTextColor";

interface StationAutocompeteProps {
  handleValueChange: (station: string) => void;
  currentValue: string;
  disabledValue: string;
}

const StationAutocompete: React.FC<StationAutocompeteProps> = ({
  handleValueChange,
  currentValue,
  disabledValue,
}) => {
  const { t } = useTranslation();

  const getBackgroundColor = (theme: Theme, label: string, line: string) => {
    if (disabledValue === label) {
      return theme.palette.text.disabled;
    }
    return RailwayLineBackGroundColors[line];
  };

  const handleAutocompleteChange = (
    event: unknown,
    newValue: RailwayLineOption | null
  ) => {
    if (newValue === null) {
      handleValueChange("");
      return;
    }
    if (newValue.station === disabledValue) {
      return;
    }
    handleValueChange(newValue.station);
  };

  const getRailwayLineOptions = () => {
    const railwayLineOptions: RailwayLineOption[] = [];

    for (const [lineName, stations] of Object.entries(railwayLines)) {
      if (Array.isArray(stations)) {
        const optionsForLine = stations.map((station) => ({
          label: t(station),
          line: lineName,
          station,
        }));
        railwayLineOptions.push(...optionsForLine);
      }
    }
    return railwayLineOptions;
  };

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.station === value.station}
      disablePortal
      options={getRailwayLineOptions()}
      sx={{ width: 300 }}
      onChange={handleAutocompleteChange}
      componentsProps={{
        paper: {
          sx: {
            width: 350,
          },
        },
      }}
      renderOption={(props, option) => (
        <Box
          component='div'
          sx={(theme) => ({
            fontSize: 18,
            backgroundColor: getBackgroundColor(
              theme,
              option.station,
              option.line
            ),
            color: getTextColor(
              getBackgroundColor(theme, option.station, option.line)
            ),
            whiteSpace: "pre-wrap",
          })}
          {...props}
          key={`${option.line}${option.label}${Math.random()}`}
        >
          {`-- ${t(option.line)} --\n${t(option.label)}`}
        </Box>
      )}
      renderInput={(props) => {
        return (
          <TextField
            {...props}
            InputProps={{
              ...props.InputProps,
              style: { fontSize: 18 },
            }}
            inputProps={{
              ...props.inputProps,
              value: t(
                props.inputProps.value === t(disabledValue)
                  ? currentValue.toString()
                  : props.inputProps.value?.toString() ?? ""
              ),
            }}
          />
        );
      }}
    />
  );
};

export default StationAutocompete;
