import { CumulatedMarker, PositionMarker } from "models/markers";
import React from "react";
import { formatInUnit, Unit } from "utils/unit";

interface TravelCounterProps {
  displayedPositionMarker: PositionMarker;
  cumulatedPositionMarker: CumulatedMarker;
}
const TravelCounter: React.FC<TravelCounterProps> = ({
  displayedPositionMarker,
  cumulatedPositionMarker,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th align="center" scope="col">
            🦩
          </th>
          <th align="center" scope="col">
            Durée
          </th>
          <th align="center" scope="col">
            Distance
          </th>
        </tr>
      </thead>
      <tbody>
        {displayedPositionMarker.time && displayedPositionMarker.distance && (
          <tr>
            <th align="center" scope="row">
              Sur l'étape
            </th>
            <td align="center">{displayedPositionMarker.time}</td>
            <td align="center">
              {formatInUnit(displayedPositionMarker.distance, Unit.DISTANCE)}
            </td>
          </tr>
        )}
        <tr>
          <th align="center" scope="row">
            Depuis le départ
          </th>
          <td align="center">{cumulatedPositionMarker.time}</td>
          <td align="center">
            {formatInUnit(cumulatedPositionMarker.distance, Unit.DISTANCE)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TravelCounter;
