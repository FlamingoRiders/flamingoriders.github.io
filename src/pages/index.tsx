import React from "react";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";
import { Link, PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AppRoutes, AppSections } from "routes/app-routes";

type QueryReturn = {
  site: {
    siteMetadata: {
      title: string;
      social: {
        polarsteps: string;
      };
    };
  };
};

const HomePage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const polarsteps = data.site.siteMetadata.social.polarsteps;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={AppSections.HOME} />
      <h1>{AppSections.HOME}</h1>
      <p>
        Bienvenue sur Flamingo Riders, le blog de{" "}
        <Link to={AppRoutes.PRESENTATION}>Nana, Nico et Eduardo</Link> ! Nous
        partons pour un voyage à vélo à travers l'Europe du Nord sur plusieurs
        mois.
      </p>
      <div className="mx-auto my-4 profile-picture-container">
        <StaticImage
          className="profile-picture"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../static/site-icon.png"
          loading="lazy"
          width={300}
          height={300}
          quality={95}
          alt="Flamingo riders image"
        />
      </div>
      <p>
        Nous partageons sur cette espace notre aventure et avons prévu
        d’enrichir le contenu de ce site quotidiennement. Ici, vous trouverez
        notamment :
      </p>
      <ul>
        <li>
          <Link to={AppRoutes.PRESENTATION}>Une présentation</Link> rapide de
          nous.
        </li>
        <li>
          La préparation de notre projet avec{" "}
          <Link to={AppRoutes.TRACE}>le tracé</Link> envisagé et{" "}
          <Link to={AppRoutes.EQUIPMENT}>l'équipement</Link> prévu.
        </li>
        <li>
          <Link to={AppRoutes.BLOG}>{AppSections.BLOG}</Link> de notre périple.
        </li>
        <li>
          <Link to={AppRoutes.MAPS}>{AppSections.MAPS}</Link> interactive pour
          voir notre trajet sur chaque étape et depuis le début.
        </li>
        <li>
          <Link to={AppRoutes.STATS}>{AppSections.STATS}</Link> pour une idée
          plus concrète de nos journées à vélo.
        </li>
      </ul>
      <p>
        Retrouvez également toutes nos photos sur notre{" "}
        <a href={`https://www.polarsteps.com/${polarsteps}`}>Polarsteps</a> !
      </p>
      <p>N'hésitez pas à rafraîchir les pages si le contenu ne vous semble pas à jour, nous publions tous les jours. </p>
    </Layout>
  );
};

export default HomePage;

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
