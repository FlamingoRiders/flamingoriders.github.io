import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Social: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            polarsteps
          }
        }
      }
    }
  `);

  const social = data.site.siteMetadata?.social;

  return (
    <div>
      Retrouvez-nous ici:
      <a
        href={`https://www.polarsteps.com/${social?.polarsteps || ``}`}
        className="social-logo"
      >
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/polarsteps-logo.png"
          width={32}
          height={32}
          quality={95}
          alt="Polarteps page"
        />
      </a>
    </div>
  );
};

export default Social;
