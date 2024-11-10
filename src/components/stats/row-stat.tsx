import React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface RowStatProps {
  title: string;
  time: string;
  distance: number;
  elevation: number;
  speed: number;
}

const RowStat: React.FC<RowStatProps> = ({
  title,
  time,
  distance,
  elevation,
  speed,
}) => {
  return (
    <tr>
      <th align="center" scope="row">
        {title}
      </th>
      <td align="center">{time}</td>
      <td align="center">{formatInUnit(distance, Unit.DISTANCE)}</td>
      <td align="center">{formatInUnit(elevation, Unit.ELEVATION)}</td>
      <td align="center">{formatInUnit(speed, Unit.SPEED)}</td>
    </tr>
  );
};

export default RowStat;
