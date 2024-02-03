import { Day } from "models/day";
import * as React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface DayRecapProps {
  day: Day;
}
const DayRecap: React.FC<DayRecapProps> = ({
  day: { distance, time, weather, stepName },
}) => {
  return (
    <>
      <h3>Bilan du jour</h3>
      <table>
        <thead>
          <tr>
            <th align="center">Météo</th>
            <th align="center">Etape</th>
            <th align="center">Temps écoulé</th>
            <th align="center">Distance parcourue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">{weather || '-'}</td>
            <td align="center">🚩 {stepName || '-'}</td>
            <td align="center">⏳ {time}</td>
            <td align="center">🚲 {formatInUnit(distance, Unit.DISTANCE)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DayRecap;
