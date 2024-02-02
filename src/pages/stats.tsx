import React from "react"
import Bio from "components/bio"
import Layout from "components/layout"
import Seo from "components/seo"
import { PageProps, graphql } from "gatsby"
import { useStats } from "hooks/useStats"
import Activities from "components/stats/activities"
import Summary from "components/stats/summary"

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
        {stats.monthStats.map((monthStat) => <>
          <h3>{monthStat.month}</h3>
          <Activities activities={monthStat.activities} caption={`Détail du mois de ${monthStat.month}`}/>
          <Summary statisticsCaption={`Statistiques du mois de ${monthStat.month}`} 
          daysActiveCaption="Jours d'activité"
          summary={monthStat.summary} />
        </>)}
        <>
          <h3>Global</h3>
          <Summary statisticsCaption={`Statistiques globales`} 
          daysActiveCaption="Jours d'activité"
          summary={stats.summary} />
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