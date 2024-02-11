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
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Durée</th>
          <th scope="col">Distance</th>
          <th scope="col">Dénivelé positif</th>
          <th scope="col">Moyenne</th>
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
  );
};

export default Activities;
