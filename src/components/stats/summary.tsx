import { Summary as SummaryModel } from "models/stats";
import React from "react";
import { toStringTime } from "utils/time";
import { Unit, formatInUnit } from "utils/unit";
import RowStat from "./row-stat";

interface SummaryProps {
  caption: string;
  summary: SummaryModel;
}

const DaysActive: React.FC<SummaryProps> = ({ caption, summary }) => {
  return (
    <>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Jours</th>
            <th scope="col">Actif</th>
            <th scope="col">Inactif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{summary.totalDays}</td>
            <td>{summary.daysActive}</td>
            <td>{summary.daysInactive}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>
              {" "}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>&nbsp;</span>
                <span>
                  {formatInUnit(summary.activityRatio, Unit.PERCENTAGE)}
                </span>
              </div>
              <progress
                max={100}
                value={summary.activityRatio}
                style={{ minWidth: "100%" }}
              ></progress>
            </th>
          </tr>
        </tfoot>
      </table>
    </>
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
          <th scope="col">Dénivelé</th>
          <th scope="col">Vitesse</th>
        </tr>
      </thead>
      <tbody>
        <RowStat
          key="minimums"
          title="Minimum"
          time={toStringTime(summary.minTime)}
          distance={summary.minDistance}
          elevation={summary.minElevation}
          speed={summary.minSpeed}
        />
        <RowStat
          key="maximums"
          title="Maximum"
          time={toStringTime(summary.maxTime)}
          distance={summary.maxDistance}
          elevation={summary.maxElevation}
          speed={summary.maxSpeed}
        />
        <RowStat
          key="moyennes"
          title="Moyenne"
          time={toStringTime(summary.averageTime)}
          distance={summary.averageDistance}
          elevation={summary.averageElevation}
          speed={summary.averageSpeed}
        />
      </tbody>
      <tfoot>
        <RowStat
          key="totaux"
          title="Total"
          time={toStringTime(summary.totalTime)}
          distance={summary.totalDistance}
          elevation={summary.totalElevation}
        />
      </tfoot>
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
