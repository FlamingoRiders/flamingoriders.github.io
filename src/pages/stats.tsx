import React, { useCallback, useState } from "react";
import { PageProps, graphql } from "gatsby";
import { useCountryStats, useStats } from "hooks/useStats";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { AppSections } from "routes/app-routes";
import BikeStats from "components/stats/bike-stats";
import GeoStats from "components/stats/geo-stats";
import TriviaStats from "components/stats/trivia-stats";

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      distance: number;
      time: string;
      averageSpeed: number;
      elevationGain: number;
      endCountryName: string;
    };
  }[];

  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const StatsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const allStats = data.allStatsJson.nodes;
  const bikeStats = useStats(allStats);
  const geoStats = useCountryStats(allStats);

  const [selectedStatTab, setSelectedStatTab] = useState<number>(0);

  const onSelectTab = useCallback(
    (index: number) => {
      setSelectedStatTab(index);
    },
    [setSelectedStatTab],
  );

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={AppSections.STATS} />
      <h1>📈📉 {AppSections.STATS}</h1>
      <p>Notre voyage en quelques chiffres clés !</p>
      <div className="tabs is-centered">
        <ul className="mb-0">
          <li className={`is-clickable ${selectedStatTab === 0 ? 'is-active' : ''}`}><a onClick={() => onSelectTab(0)}>🚲 Trajet</a></li>
          <li className={`is-clickable ${selectedStatTab === 1 ? 'is-active' : ''}`}><a onClick={() => onSelectTab(1)}>🌎 Lieux</a></li>
          <li className={`is-clickable ${selectedStatTab === 2 ? 'is-active' : ''}`}><a onClick={() => onSelectTab(2)}>🎉 Fun Facts</a></li>
        </ul>
      </div>
      {selectedStatTab === 0 && <BikeStats stats={bikeStats} />}
      {selectedStatTab === 1 && <GeoStats stats={geoStats} />}
      {selectedStatTab === 2 && <TriviaStats />}
    </Layout>
  );
};

export default StatsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStatsJson(sort: { date: DESC }) {
      nodes {
        date
        distance
        time
        averageSpeed
        elevationGain
        endCountryName
      }
    }
  }
`;
