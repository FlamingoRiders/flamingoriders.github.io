import { CumulatedMarker, PositionMarker } from "models/markers";
import React from "react";

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
      <caption>Détail de l'avancement</caption>
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Sur l'étape</th>
          <th scope="col">Sur l'ensemble du trajet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Distance parcourue</th>
          <td>{displayedPositionMarker.distance}</td>
          <td>{cumulatedPositionMarker.distance}</td>
        </tr>
        <tr>
          <th scope="row">Durée écoulée</th>
          <td>{displayedPositionMarker.time}</td>
          <td>{cumulatedPositionMarker.time}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TravelCounter;
