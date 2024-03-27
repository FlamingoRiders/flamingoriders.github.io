import React, { useCallback, useMemo, useState } from "react";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import { useStats } from "hooks/useStats";
import Activities from "components/stats/activities";
import Summary from "components/stats/summary";
import CategoryPicker from "components/stats/category-picker";
import { MonthStats } from "models/stats";
import { AppSections } from "routes/app-routes";

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      distance: number;
      time: string;
      averageSpeed: number;
      elevationGain: number;
    };
  }[];

  site: {
    siteMetadata: {
      title: string;
      social: {
        strava: string;
      };
    };
  };
};

const StatsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const stravaLink = data.site.siteMetadata.social.strava;
  const allStats = data.allStatsJson.nodes;
  const daysActiveCaption = "Jours pédalés";
  const stats = useStats(allStats);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const onSelectCategory = useCallback(
    (index: number) => {
      setSelectedCategoryIndex(index);
    },
    [setSelectedCategoryIndex],
  );

  const categories = [
    "Global",
    ...stats.monthStats.map((monthStat) => monthStat.month),
  ];

  const selectedMonthStat: MonthStats | undefined = useMemo(() => {
    if (selectedCategoryIndex === 0) {
      return undefined;
    }

    return stats.monthStats[selectedCategoryIndex - 1];
  }, [selectedCategoryIndex]);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={AppSections.STATS} />
      <h1>📈📉 Les stats</h1>
      <p>
        Pour les amoureux des chiffres, retrouvez toutes nos activités sportives
        sur <a href={`https://www.strava.com/athletes/${stravaLink}`}>Strava</a>
        .
      </p>
      <>
        <CategoryPicker
          onSelectCategory={onSelectCategory}
          categories={categories}
          selectedIndex={selectedCategoryIndex}
        />

        {selectedMonthStat ? (
          <>
            <Summary
              statisticsCaption={`Statistiques du mois`}
              daysActiveCaption={daysActiveCaption}
              summary={selectedMonthStat.summary}
            />
            <Activities
              activities={selectedMonthStat.activities}
              caption={`Détail des activités`}
            />
          </>
        ) : (
          <Summary
            statisticsCaption={`Statistiques globales`}
            daysActiveCaption={daysActiveCaption}
            summary={stats.summary}
          />
        )}
      </>
    </Layout>
  );
};

export default StatsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          strava
        }
      }
    }
    allStatsJson(sort: { date: DESC }) {
      nodes {
        date
        distance
        time
        averageSpeed
        elevationGain
      }
    }
  }
`;
