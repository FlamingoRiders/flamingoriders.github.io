import React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface RowStatProps {
  key?: React.Key;
  title: string;
  time: string;
  distance: number;
  elevation: number;
  speed?: number;
}

const RowStat: React.FC<RowStatProps> = ({
  key,
  title,
  time,
  distance,
  elevation,
  speed,
}) => {
  return (
    <tr key={key}>
      <th scope="row">{title}</th>
      <td>{time}</td>
      <td>{formatInUnit(distance, Unit.DISTANCE)}</td>
      <td>{formatInUnit(elevation, Unit.ELEVATION)}</td>
      <td>{speed ? formatInUnit(speed, Unit.SPEED) : "-"}</td>
    </tr>
  );
};

export default RowStat;
