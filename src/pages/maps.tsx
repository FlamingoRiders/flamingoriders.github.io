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
import { getPostDate, getDayOfWeek } from "utils/date";
import { useCountryFlag } from "hooks/useFlag";

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      startPos: [number, number];
      endPos: [number, number];
      distance: number;
      time: string;
      endCountryName: string;
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

  const flag = useCountryFlag(displayedPositionMarker?.endCountryName);

  return (
    <Layout location={location} title={siteTitle}>
      <h1>🌍📍 {AppSections.MAPS}</h1>
      <DatePicker
        label="La position du jour"
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          lineHeight: "normal",
        }}
      >
        <Step
          startPointName={displayedPositionMarker?.startPointName}
          endPointName={displayedPositionMarker?.endPointName}
        />
        <span className="d-emoji" style={{ fontSize: "2rem" }}>{flag}</span>
      </div>
      {displayedPositionMarker && cumulatedPositionMarker && (
        <TravelCounter
          displayedPositionMarker={displayedPositionMarker}
          cumulatedPositionMarker={cumulatedPositionMarker}
        />
      )}
      {displayedPositionMarker &&
        <a href={`${siteUrl}/${getPostDate(displayedPositionMarker?.date)}`}>
          📝 Accéder au récit du {getDayOfWeek(displayedPositionMarker?.date)}
        </a>
      }
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
        endCountryName
      }
    }
  }
`;

export const Head = () => {
  return <SEO title={AppSections.MAPS} />;
};
