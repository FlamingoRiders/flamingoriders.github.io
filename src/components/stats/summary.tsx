import { Summary as SummaryModel } from "models/stats";
import React from "react";
import { toStringTime } from "utils/time";
import { Unit, formatInUnit } from "utils/unit";

interface SummaryProps {
  caption: string;
  summary: SummaryModel;
}

const DaysActive: React.FC<SummaryProps> = ({ caption, summary }) => {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Jours</th>
          <th scope="col">Actif</th>
          <th scope="col">Inactif</th>
          <th scope="col">Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{summary.totalDays}</td>
          <td>{summary.daysActive}</td>
          <td>{summary.daysInactive}</td>
          <td>{formatInUnit(summary.activityRatio, Unit.PERCENTAGE)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics: React.FC<SummaryProps> = ({ caption, summary }) => {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Durée</th>
          <th scope="col">Distance</th>
          <th scope="col">Dénivelé positif</th>
          <th scope="col">Vitesse</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Minimum</th>
          <td>{toStringTime(summary.minTime)}</td>
          <td>{formatInUnit(summary.minDistance, Unit.DISTANCE)}</td>
          <td>{formatInUnit(summary.minElevation, Unit.ELEVATION)}</td>
          <td>{formatInUnit(summary.minSpeed, Unit.SPEED)}</td>
        </tr>
        <tr>
          <th scope="row">Maximum</th>
          <td>{toStringTime(summary.maxTime)}</td>
          <td>{formatInUnit(summary.maxDistance, Unit.DISTANCE)}</td>
          <td>{formatInUnit(summary.maxElevation, Unit.ELEVATION)}</td>
          <td>{formatInUnit(summary.maxSpeed, Unit.SPEED)}</td>
        </tr>
        <tr>
          <th scope="row">Moyenne</th>
          <td>{toStringTime(summary.averageTime)}</td>
          <td>{formatInUnit(summary.averageDistance, Unit.DISTANCE)}</td>
          <td>{formatInUnit(summary.averageElevation, Unit.ELEVATION)}</td>
          <td>{formatInUnit(summary.averageSpeed, Unit.SPEED)}</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>{toStringTime(summary.totalTime)}</td>
          <td>{formatInUnit(summary.totalDistance, Unit.DISTANCE)}</td>
          <td>{formatInUnit(summary.totalElevation, Unit.ELEVATION)}</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  );
};

interface DetailedSummaryProps {
  statisticsCaption: string;
  daysActiveCaption: string;
  summary: SummaryModel;
}
const Summary: React.FC<DetailedSummaryProps> = ({
  statisticsCaption,
  daysActiveCaption,
  summary,
}) => {
  return (
    <>
      <Statistics summary={summary} caption={statisticsCaption} />
      <DaysActive summary={summary} caption={daysActiveCaption} />
    </>
  );
};

export default Summary;
