import React from "react";
import Bio from "components/layout/bio";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import { useMarkers } from "hooks/useMarkers";
import DatePicker from "components/maps/DatePicker";
import SimpleMap from "components/maps/SimpleMap";
import TravelCounter from "components/maps/TravelCounter";

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
      <Seo title="Maps Test" />
      <Bio />
      <h1>Maps Test</h1>
      <p>This is a dummy page to demonstrate usage of Google Maps</p>
      <DatePicker
        selectedDate={selectedDate}
        startDate={startDate}
        lastDate={lastDate}
        onChangeDate={onChangeDate}
      />
      <br />
      <br />
      <SimpleMap
        positionMarkers={allPositions}
        displayedPositionMarker={displayedPositionMarker}
      />
      <br />
      <br />
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
        distance
        time
      }
    }
  }
`;
