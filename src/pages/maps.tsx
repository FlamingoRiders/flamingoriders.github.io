import React from "react";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import { useMarkers } from "hooks/useMarkers";
import DatePicker from "components/maps/date-picker";
import SimpleMap from "components/maps/simple-map";
import TravelCounter from "components/maps/travel-counter";
import Step from "components/maps/step";

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      startPos: [number, number];
      endPos: [number, number];
      distance: number;
      time: string;
    };
  }[];

  site: {
    siteMetadata: {
      title: string;
    };
  };
};
const MapsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const allPositions = data.allStatsJson.nodes;

  const {
    startDate,
    lastDate,
    selectedDate,
    displayedPositionMarker,
    cumulatedPositionMarker,
    onChangeDate,
  } = useMarkers(allPositions);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="La carte" />
      <h1>🌍📍 La carte</h1>
      <DatePicker
        selectedDate={selectedDate}
        startDate={startDate}
        lastDate={lastDate}
        onChangeDate={onChangeDate}
      />
      <br />
      {(!displayedPositionMarker || !cumulatedPositionMarker) && (
        <p>Pas de position connue pour ce jour.</p>
      )}
      <SimpleMap
        positionMarkers={allPositions}
        displayedPositionMarker={displayedPositionMarker}
      />
      <br />
      <Step
        startPointName={displayedPositionMarker?.startPointName}
        endPointName={displayedPositionMarker?.endPointName}
      />
      {displayedPositionMarker && cumulatedPositionMarker && (
        <TravelCounter
          displayedPositionMarker={displayedPositionMarker}
          cumulatedPositionMarker={cumulatedPositionMarker}
        />
      )}
    </Layout>
  );
};

export default MapsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStatsJson(sort: { date: ASC }) {
      nodes {
        date
        startPos
        endPos
        startPointName
        endPointName
        distance
        time
      }
    }
  }
`;
