import React from "react";
import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import { useMarkers } from "hooks/useMarkers";
import DatePicker from "components/maps/date-picker";
import SimpleMap from "components/maps/simple-map";
import TravelCounter from "components/maps/travel-counter";
import Step from "components/maps/step";
import { AppSections } from "routes/app-routes";

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
      siteUrl: string;
    };
  };
};
const MapsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const allPositions = data.allStatsJson.nodes;
  const siteUrl = data.site.siteMetadata.siteUrl;

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
      <h1>🌍📍 {AppSections.MAPS}</h1>
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
        siteUrl={siteUrl}
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
        siteUrl
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

export const Head = () => {
  return <SEO title={AppSections.MAPS} />;
};
