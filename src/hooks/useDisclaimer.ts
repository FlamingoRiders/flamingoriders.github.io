import { graphql, useStaticQuery } from "gatsby";
import { getFullDate } from "utils/date";

type DisclaimerData = {
  siteBuildMetadata: {
    buildTime: string;
  };
  site: {
    siteMetadata: {
      author: {
        name: string;
      };
    };
  };
};

export const useDisclaimer = () => {
  const data = useStaticQuery<DisclaimerData>(graphql`
    query DisclaimerQuery {
      siteBuildMetadata {
        buildTime
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const lastUpdate = getFullDate(data.siteBuildMetadata.buildTime);
  const copyright = `© ${data.site.siteMetadata.author.name}`;
  return { lastUpdate, copyright };
};
