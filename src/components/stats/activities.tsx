import { Activity } from "models/stats";
import React from "react";
import { getDayOfWeek } from "utils/date";

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
          <th scope="col">Distance</th>
          <th scope="col">Durée</th>
          <th scope="col">Moyenne</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr key={activity.date}>
            <th scope="row">{getDayOfWeek(activity.date)}</th>
            <td>{activity.distance}</td>
            <td>{activity.time}</td>
            <td>{activity.averageSpeed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Activities;
