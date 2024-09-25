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
    <><nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-0">Durée</p>
          <p className="title">{toStringTime(summary.totalTime)}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-0">Distance</p>
          <p className="title">{formatInUnit(summary.totalDistance, Unit.DISTANCE)}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-0">Dénivelé positif</p>
          <p className="title">{formatInUnit(summary.totalElevation, Unit.ELEVATION)}</p>
        </div>
      </div>
    </nav>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th align="center" scope="col">&nbsp;</th>
            <th align="center" scope="col">
              <span className="d-desktop">Minimum</span>
              <span className="d-mobile">Min.</span>
            </th>
            <th align="center" scope="col">
              <span className="d-desktop">Maximum</span>
              <span className="d-mobile">Max.</span>
            </th>
            <th align="center" scope="col">
              <span className="d-desktop">Moyenne</span>
              <span className="d-mobile">Moy.</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <RowStat
            key="duree"
            title="Durée ⏳"
            min={toStringTime(summary.minTime)}
            max={toStringTime(summary.maxTime)}
            avg={toStringTime(summary.averageTime)}
          />
          <RowStat
            key="distance"
            title="Distance 🚴"
            min={formatInUnit(summary.minDistance, Unit.DISTANCE)}
            max={formatInUnit(summary.maxDistance, Unit.DISTANCE)}
            avg={formatInUnit(summary.averageDistance, Unit.DISTANCE)}
          />
          <RowStat
            key="elevation"
            title="Dénivelé positif 📈"
            min={formatInUnit(summary.minElevation, Unit.ELEVATION)}
            max={formatInUnit(summary.maxElevation, Unit.ELEVATION)}
            avg={formatInUnit(summary.averageElevation, Unit.ELEVATION)}
          />
          <RowStat
            key="vitesse"
            title="Vitesse moyenne ⏱️"
            min={formatInUnit(summary.minSpeed, Unit.SPEED)}
            max={formatInUnit(summary.maxSpeed, Unit.SPEED)}
            avg={formatInUnit(summary.averageSpeed, Unit.SPEED)}
          />
        </tbody>
      </table>
    </>
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
