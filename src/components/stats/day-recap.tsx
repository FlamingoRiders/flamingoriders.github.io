import { Day } from "models/day";
import * as React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface DayRecapProps {
  day: Day;
}
const DayRecap: React.FC<DayRecapProps> = ({
  day: { distance, time, weather, startPointName, endPointName },
}) => {
  return (
    <>
      <h3>Bilan du jour</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          lineHeight: "normal",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        }}
      >
        <div style={{ fontSize: "1rem" }}>
          {startPointName && <div>🚩 {startPointName}</div>}
          {startPointName && endPointName && <div>&#10247;</div>}
          {endPointName && <div>🏁 {endPointName}</div>}
        </div>
        {weather && <div style={{ fontSize: "3rem" }}>{weather}</div>}
      </div>

      <table>
        <thead>
          <tr>
            <th align="center">Temps écoulé</th>
            <th align="center">Distance parcourue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">⏳ {time}</td>
            <td align="center">🚲 {formatInUnit(distance, Unit.DISTANCE)}</td>
          </tr>
        </tbody>
      </table>
      <h6>L'humeur</h6>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>&nbsp;</span>
        <span>😤</span>
        <span>😩</span>
        <span>🤔</span>
        <span>😃</span>
        <span>😍</span>
      </div>
      <progress id="mood-bar" max="5" value="4" style={{ minWidth: "100%" }}>
        70%
      </progress>
    </>
  );
};

export default DayRecap;
