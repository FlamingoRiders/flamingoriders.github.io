import React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface RowStatProps {
  title: string;
  titleShort?: string;
  time: string;
  distance: number;
  elevation: number;
  speed?: number;
}

const RowStat: React.FC<RowStatProps> = ({
  title,
  titleShort,
  time,
  distance,
  elevation,
  speed,
}) => {
  return (
    <tr>
      <th align="center" scope="row">
        <span className="d-desktop">{title}</span>
        <span className="d-mobile">{titleShort ? titleShort : title}</span>
      </th>
      <td align="center">{time}</td>
      <td align="center">{formatInUnit(distance, Unit.DISTANCE)}</td>
      <td align="center">{formatInUnit(elevation, Unit.ELEVATION)}</td>
      <td align="center">{speed ? formatInUnit(speed, Unit.SPEED) : "-"}</td>
    </tr>
  );
};

export default RowStat;
