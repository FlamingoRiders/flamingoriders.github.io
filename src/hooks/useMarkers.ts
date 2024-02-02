import { PositionMarker, CumulatedMarker } from "models/markers";
import { useState, useMemo } from "react";
import { toDecimalTime, toStringTime } from "utils/time";

export const useMarkers = (positionMarkers: Array<PositionMarker>) => {
  const startDate = positionMarkers[0].date;
  const lastDate = positionMarkers[positionMarkers.length - 1].date;
  const [selectedDate, setSelectedDate] = useState<string>(lastDate);

  const displayedPositionMarkerIndex: number = useMemo(() => {
    return positionMarkers.findIndex((p) => p.date === selectedDate);
  }, [positionMarkers, selectedDate]);

  const displayedPositionMarker: PositionMarker | undefined = useMemo(() => {
    if (displayedPositionMarkerIndex === -1) {
      return undefined;
    }
    return positionMarkers[displayedPositionMarkerIndex];
  }, [displayedPositionMarkerIndex]);

  const cumulatedPositionMarker: CumulatedMarker | undefined = useMemo(() => {
    if (displayedPositionMarkerIndex === -1) {
      return undefined;
    }
    const arrayCopy = positionMarkers.slice(
      0,
      displayedPositionMarkerIndex + 1,
    );

    const cumulatedPosition = arrayCopy
      .map((p) => ({ distance: p.distance, time: toDecimalTime(p.time) }))
      .reduce(
        (sum, element) => {
          return {
            distance: +(sum?.distance + element.distance).toFixed(2),
            time: +(sum?.time + element.time).toFixed(2),
          };
        },
        { distance: 0, time: 0 },
      );

    return {
      distance: +cumulatedPosition.distance.toFixed(2),
      time: toStringTime(cumulatedPosition.time),
    };
  }, [positionMarkers, displayedPositionMarkerIndex]);

  return {
    startDate,
    lastDate,
    selectedDate,
    displayedPositionMarker,
    cumulatedPositionMarker,
    onChangeDate: setSelectedDate,
  };
};
