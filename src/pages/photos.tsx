import React from "react";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type QueryReturn = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const PhotosPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const polarsteps = data.site.siteMetadata.social.polarsteps;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Les photos" />
      <h1>📷 Les photos</h1>
      <p>
        Retrouvez toutes nos photos sur notre{" "}
        <a href={`https://www.polarsteps.com/${polarsteps}`}>Polarsteps</a>
      </p>
      <StaticImage
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
        src="../../static/site-icon.png"
        loading="lazy"
        width={300}
        height={300}
        quality={95}
        alt="Polarteps page"
      />
    </Layout>
  );
};

export default PhotosPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          polarsteps
        }
      }
    }
  }
`;
