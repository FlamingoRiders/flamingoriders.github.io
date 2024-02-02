import { graphql, useStaticQuery } from "gatsby";

type QueryReturn = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    };
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<QueryReturn>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
