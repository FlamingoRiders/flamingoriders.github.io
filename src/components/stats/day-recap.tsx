import Step from "components/maps/step";
import { Day } from "models/day";
import * as React from "react";
import { Unit, formatInUnit } from "utils/unit";
import MoodBar from "./mood-bar";

interface DayRecapProps {
  day: Day;
}
const DayRecap: React.FC<DayRecapProps> = ({
  day: { distance, time, weather, mood, startPointName, endPointName },
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
        }}
      >
        <Step startPointName={startPointName} endPointName={endPointName} />
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
      {mood && <MoodBar mood={mood} />}
      <p>
        Retrouvez toutes les photos de la journée sur{" "}
        <a href={`https://www.polarsteps.com/FlamingoRiders/10709256-bike-trip-northern-europe`}>Polarsteps</a> !
      </p>
    </>
  );
};

export default DayRecap;
