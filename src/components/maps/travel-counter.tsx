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
      <caption>Avancement</caption>
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Durée</th>
          <th scope="col">Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sur l'étape</th>
          <td>{displayedPositionMarker.time}</td>
          <td>
            {formatInUnit(displayedPositionMarker.distance, Unit.DISTANCE)}
          </td>
        </tr>
        <tr>
          <th scope="row">Depuis le départ</th>
          <td>{cumulatedPositionMarker.time}</td>
          <td>
            {formatInUnit(cumulatedPositionMarker.distance, Unit.DISTANCE)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TravelCounter;
