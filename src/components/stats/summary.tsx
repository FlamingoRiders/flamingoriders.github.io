import { Summary as SummaryModel } from "models/stats";
import React from "react";

interface SummaryProps {
    caption: string;
    summary: SummaryModel;
}

const DaysActive: React.FC<SummaryProps> = ({ caption, summary }) => {
    return (<table>
        <caption>
            {caption}
        </caption>
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
                <td>{summary.activityRatio} %</td>
            </tr>
        </tbody>
    </table>
    );
}

const Statistics: React.FC<SummaryProps> = ({ caption, summary }) => {
    return (
        <table>
            <caption>
                {caption}
            </caption>
            <thead>
                <tr>
                    <th scope="col">Indicateur</th>
                    <th scope="col">Min.</th>
                    <th scope="col">Max.</th>
                    <th scope="col">Moyenne</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Durée</th>
                    <td>{summary.minTime}</td>
                    <td>{summary.maxTime}</td>
                    <td>{summary.averageTime}</td>
                    <td>{summary.totalTime}</td>
                </tr>
                <tr>
                    <th scope="row">Distance</th>
                    <td>{summary.minDistance}</td>
                    <td>{summary.maxDistance}</td>
                    <td>{summary.averageDistance}</td>
                    <td>{summary.totalDistance}</td>
                </tr>
                <tr>
                    <th scope="row">Dénivelé positif</th>
                    <td>{summary.minElevation}</td>
                    <td>{summary.maxElevation}</td>
                    <td>{summary.averageElevation}</td>
                    <td>{summary.totalElevation}</td>
                </tr>
                <tr>
                    <th scope="row">Vitesse</th>
                    <td>{summary.minSpeed}</td>
                    <td>{summary.maxSpeed}</td>
                    <td>{summary.averageSpeed}</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    );
}

interface DetailedSummaryProps {
    statisticsCaption: string;
    daysActiveCaption: string;
    summary: SummaryModel;
}
const Summary: React.FC<DetailedSummaryProps> = ({ statisticsCaption, daysActiveCaption, summary }) => {
    return <>
        <Statistics summary={summary} caption={statisticsCaption} />
        <DaysActive summary={summary} caption={daysActiveCaption} />
    </>
}

export default Summary;