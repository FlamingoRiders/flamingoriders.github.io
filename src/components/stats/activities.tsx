import { Activity } from "models/stats";
import React from "react";
import { getDayOfWeek } from "utils/date";
import RowStat from "./row-stat";

interface ActivitiesProps {
  caption: string;
  activities: Array<Activity>;
}

const Activities: React.FC<ActivitiesProps> = ({ caption, activities }) => {
  return (
    <>
      <details className="collapsible">
        <summary>
          <span className="collapsible__icon">▶</span>
          <span className="collapsible__label">{caption}</span>
        </summary>
        <table className="collapsible__content">
          <caption>{caption}</caption>
          <thead>
            <tr>
              <th align="center" scope="col">
                <span className="d-desktop">Date</span>
                <span className="d-mobile">📅</span>
              </th>
              <th align="center" scope="col">
                <span className="d-desktop">Durée</span>
                <span className="d-mobile">⏳</span>
              </th>
              <th align="center" scope="col">
                <span className="d-desktop">Distance</span>
                <span className="d-mobile">🚴</span>
              </th>
              <th align="center" scope="col">
                <span className="d-desktop">Dénivelé positif</span>
                <span className="d-mobile">📈</span>
              </th>
              <th align="center" scope="col">
                <span className="d-desktop">Vitesse moyenne</span>
                <span className="d-mobile">⏱️</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {activities
              .filter((activity) => activity.distance && activity.time)
              .map((activity) => (
                <RowStat
                  key={activity.date}
                  title={getDayOfWeek(activity.date)}
                  time={activity.time}
                  distance={activity.distance}
                  elevation={activity.elevationGain}
                  speed={activity.averageSpeed}
                />
              ))}
          </tbody>
        </table>
      </details>
    </>
  );
};

export default Activities;
