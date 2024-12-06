import React from "react";
import { Unit, formatInUnit } from "utils/unit";

interface SummaryStatProps {
  title: string;
  min: string;
  max: string;
  avg: string;
}

const SummaryStat: React.FC<SummaryStatProps> = ({ title, min, max, avg }) => {
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

export default SummaryStat;
