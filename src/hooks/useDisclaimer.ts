import { graphql, useStaticQuery } from "gatsby"

type DisclaimerData = {
  siteBuildMetadata: {
    buildTime: string
  }
  site: {
    siteMetadata: {
      author: {
        name: string
      }
    }
  }
}

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

  const buildTime = new Date(data.siteBuildMetadata.buildTime);
  const lastUpdate = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(buildTime);
  const copyright = `© ${data.site.siteMetadata.author.name}`;
  return { lastUpdate, copyright };
}