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
          <span className="collapsible__label">&nbsp;{caption}</span>
        </summary>
        <table className="collapsible__content">
          <caption>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">📅</th>
              <th scope="col">⏳</th>
              <th scope="col">🚲</th>
              <th scope="col">📈</th>
              <th scope="col">⏱️</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
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
