import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps, graphql } from "gatsby"
import SimpleMap from "../components/simple-map"


type QueryReturn = {
  allStatsJson: {
    nodes: {
      date: string;
      endPos: [number, number];
    }
  }[]

  site: {
    siteMetadata: {
      title: string;
    }
  }
}
const MapsPage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const allPositions = data.allStatsJson.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Maps Test" />
            <Bio />
            <h1>Maps Test</h1>
            <p>This is a dummy page to demonstrate usage of Google Maps</p>
            <SimpleMap positionMarkers={allPositions}/>
        </Layout>
    )
}

export default MapsPage


export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allStatsJson(
    sort: {date: DESC}
  ) {
    nodes {
      date
      endPos
    }
  }
}
`