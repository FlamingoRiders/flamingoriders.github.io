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
            <th align="center" scope="col">Jours</th>
            <th align="center" scope="col">✅</th>
            <th align="center" scope="col">🚳</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">{summary.totalDays}</td>
            <td align="center">{summary.daysActive}</td>
            <td align="center">{summary.daysInactive}</td>
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
                className="progress is-primary is-small mb-2"
                value={summary.activityRatio}
              >
                {summary.activityRatio}
              </progress>
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
          <th align="center" scope="col">&nbsp;</th>
          <th align="center" scope="col">
            <span className="d-desktop">Durée</span>
            <span className="d-mobile">⏳</span>
          </th>
          <th align="center" scope="col">
            <span className="d-desktop">Distance</span>
            <span className="d-mobile">🚴</span>
          </th>
          <th align="center" scope="col">
            <span className="d-desktop">Dénivelé positif</span>
            <span className="d-mobile">📈</span>
          </th>
          <th align="center" scope="col">
            <span className="d-desktop">Vitesse moyenne</span>
            <span className="d-mobile">⏱️</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <RowStat
          key="minimums"
          title="Minimum"
          titleShort="Min."
          time={toStringTime(summary.minTime)}
          distance={summary.minDistance}
          elevation={summary.minElevation}
          speed={summary.minSpeed}
        />
        <RowStat
          key="maximums"
          title="Maximum"
          titleShort="Max."
          time={toStringTime(summary.maxTime)}
          distance={summary.maxDistance}
          elevation={summary.maxElevation}
          speed={summary.maxSpeed}
        />
        <RowStat
          key="moyennes"
          title="Moyenne"
          titleShort="Moy."
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
