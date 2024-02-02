/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Social from "./social";

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            people
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../../images/profile.png"
        width={50}
        height={50}
        quality={95}
        alt="Flamingo Riders profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Coucou ! Nous c'est <strong>{author.people}.</strong>
            {` `}
            On est les <strong>{author.name}</strong> et voici le{" "}
            {author?.summary || null}.{` `}

          </p>
          <Social />
        </div>
      )}
    </div>
  );
};

export default Bio;
