import React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface RowStatProps {
  title: string;
  min: string;
  max: string;
  avg: string;
}

const RowStat: React.FC<RowStatProps> = ({
  title,
  min,
  max,
  avg,
}) => {
  return (
    <tr>
      <th align="center" scope="row">
        {title}
      </th>
      <td align="center">{min}</td>
      <td align="center">{max}</td>
      <td align="center">{avg}</td>
    </tr>
  );
};

export default RowStat;
