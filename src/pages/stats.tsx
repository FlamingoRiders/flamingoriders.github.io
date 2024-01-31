import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps, graphql } from "gatsby"
import { useStats } from "../hooks/useStats"

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      distance: number;
      time: string;
      averageSpeed: number;
      elevationGain: number;
    }
  }[]

  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const StatsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allStats = data.allStatsJson.nodes;

  const stats = useStats(allStats);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Stats Test" />
      <Bio />
      <h1>Stats Test</h1>
      <p>This is a dummy page to demonstrate usage of statsModule</p>
      <>
        {stats.monthStats.map((monthStat) => <><h3>{monthStat.month}</h3><p>Nombre de jours actifs: {monthStat.activities.length}</p>
          <table>
            <caption>
              Statistiques du mois de {monthStat.month}
            </caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Distance</th>
                <th scope="col">Durée</th>
                <th scope="col">Moyenne (en km/h)</th>
              </tr>
            </thead>
            <tbody>
              {monthStat.activities.map(dayActivity =>
                <tr>
                  <th scope="row">{dayActivity.date}</th>
                  <td>{dayActivity.distance}</td>
                  <td>{dayActivity.time}</td>
                  <td>{dayActivity.averageSpeed}</td>
                </tr>)}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan={4}>Bilan du mois</th>
              </tr>
              <tr>
                <th scope="row">Indicateur</th>
                <td>Min</td>
                <td>Max</td>
                <td>Moyenne</td>
              </tr>
              <tr>
                <tr>
                  <th scope="row">Durée</th>
                  <td>{monthStat.summary.minTime}</td>
                  <td>{monthStat.summary.maxTime}</td>
                  <td>{monthStat.summary.averageTime}</td>
                </tr>
                <th scope="row">Distance</th>
                <td>{monthStat.summary.minDistance}</td>
                <td>{monthStat.summary.maxDistance}</td>
                <td>{monthStat.summary.averageDistance}</td>
              </tr>
              <tr>
                <th scope="row">Dénivelé positif</th>
                <td>{monthStat.summary.minElevation}</td>
                <td>{monthStat.summary.maxElevation}</td>
                <td>{monthStat.summary.averageElevation}</td>
              </tr>
              <tr>
                <th scope="row">Vitesse</th>
                <td>{monthStat.summary.minSpeed}</td>
                <td>{monthStat.summary.maxSpeed}</td>
                <td>{monthStat.summary.averageSpeed}</td>
              </tr>
            </tfoot>
          </table>
        </>
        )
        }

        <>
          <h3>Global</h3>
          <table>
            <caption>
              Statistiques Globales
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
                <td>{stats.summary.minTime}</td>
                <td>{stats.summary.maxTime}</td>
                <td>{stats.summary.averageTime}</td>
                <td>{stats.summary.totalTime}</td>
              </tr>
              <tr>
                <th scope="row">Distance</th>
                <td>{stats.summary.minDistance}</td>
                <td>{stats.summary.maxDistance}</td>
                <td>{stats.summary.averageDistance}</td>
                <td>{stats.summary.totalDistance}</td>
              </tr>
              <tr>
                <th scope="row">Dénivelé positif</th>
                <td>{stats.summary.minElevation}</td>
                <td>{stats.summary.maxElevation}</td>
                <td>{stats.summary.averageElevation}</td>
                <td>{stats.summary.totalElevation}</td>
              </tr>
              <tr>
                <th scope="row">Vitesse moyenne</th>
                <td>{stats.summary.minSpeed}</td>
                <td>{stats.summary.maxSpeed}</td>
                <td>{stats.summary.averageSpeed}</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </>
      </>
    </Layout>
  )
}

export default StatsPage


export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allStatsJson(
    sort: {date: DESC}
  ) {
    nodes {
      date
     	distance
      time
      averageSpeed
      elevationGain
    }
  }
}
`