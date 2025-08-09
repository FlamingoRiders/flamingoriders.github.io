import React from "react";
import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import DatePicker from "components/maps/date-picker";
import Step from "components/maps/step";
import { AppSections } from "routes/app-routes";
import { usePictures } from "hooks/usePictures";
import { getDayOfWeek, getPostDate } from "utils/date";
import Slideshow from "components/slideshow/slideshow";
import { Country, countryFlagMap } from "models/countries";
import { useCountryFlag } from "hooks/useFlag";

type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      pictures: Array<string>;
      startPointName: string;
      endPointName: string;
      endCountryName: string;
    };
  }[];

  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      picturesUrl: string;
    };
  };
};
const PicturesPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const allPictures = data.allStatsJson.nodes;
  const siteUrl = data.site.siteMetadata.siteUrl;

  const {
    startDate,
    lastDate,
    selectedDate,
    selectedDatePictures,
    hasPicturesForDay,
    onChangeDate,
  } = usePictures(allPictures);

  const flag = useCountryFlag(selectedDatePictures?.endCountryName);

  return (
    <Layout location={location} title={siteTitle}>
      <h1>📷 {AppSections.PICTURES}</h1>
      <DatePicker
        label="Photos du jour"
        selectedDate={selectedDate}
        startDate={startDate}
        lastDate={lastDate}
        onChangeDate={onChangeDate}
      />
      <br />
      {!hasPicturesForDay && (
        <p>Pas de photos pour ce jour.</p>
      )}
      {hasPicturesForDay && selectedDatePictures?.pictures && <>
        <Slideshow
          key={selectedDatePictures.date}
          picturesUrl={data.site.siteMetadata.picturesUrl}
          pictureIds={selectedDatePictures.pictures}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            lineHeight: "normal",
          }}
        >
          <Step
            startPointName={selectedDatePictures?.startPointName}
            endPointName={selectedDatePictures?.endPointName}
          />
          <span className="d-mobile" style={{ fontSize: "2rem" }}>{flag}</span>
        </div>
        <br />
      </>
      }
      {selectedDatePictures &&
        <a
          href={`${siteUrl}/${getPostDate(selectedDatePictures?.date)}`}
        >
          📝 Accéder au récit du {getDayOfWeek(selectedDatePictures?.date)}
        </a>
      }
    </Layout>
  );
};

export default PicturesPage;

export const pageQuery = graphql`
      query {
        site {
        siteMetadata {
        title
        siteUrl
      picturesUrl
      }
    }
      allStatsJson(sort: {date: ASC }) {
        nodes {
        date
        pictures
      startPointName
      endPointName
      endCountryName
      }
    }
  }
      `;

export const Head = () => {
  return <SEO title={AppSections.MAPS} />;
};
