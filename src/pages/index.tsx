import React from "react";
import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import { Link, PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AppRoutes, AppSections } from "routes/app-routes";

type QueryReturn = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const HomePage: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <h1>{AppSections.HOME}</h1>
      <p>
        <b>Bienvenue sur Flamingo Riders</b> - l'aventure de{" "}
        <Link to={AppRoutes.PRESENTATION}>Nana, Nico et Eduardo</Link> sur deux roues !
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
        Pendant plusieurs mois, nous avons pédalé à travers l'Europe du Nord, entre routes côtières, forêts profondes et villages inattendus.
        Chaque coup de pédale nous a offert de nouveaux paysages, des rencontres inoubliables… et parfois quelques belles averses et petites galères.
        Ici, vous pouvez revivre notre voyage étape par étape :
      </p>
      <ul>
        <li>
          <Link to={AppRoutes.PRESENTATION}><b>Qui sommes-nous ?</b></Link> Une petite présentation avant de grimper sur nos vélos.
        </li>
        <li>
          <Link to={AppRoutes.TRACE}><b>{AppSections.PREPARATION}</b></Link> :{" "}
          <Link to={AppRoutes.TRACE}>le tracé</Link> envisagé et{" "}
          <Link to={AppRoutes.EQUIPMENT}>l'équipement</Link> choisi.
        </li>
        <li>
          <Link to={AppRoutes.BLOG}><b>{AppSections.BLOG}</b></Link> : nos histoires de route, du départ à l'arrivée.
        </li>
        <li>
          <Link to={AppRoutes.MAPS}><b>{AppSections.MAPS}</b></Link> interactive pour
          voir notre trajet sur chaque étape et depuis le début.
        </li>
        <li>
          <Link to={AppRoutes.STATS}><b>{AppSections.STATS}</b></Link> : kilomètres avalés, pays traversés, et autres records personnels.
        </li>
        <li>
          <Link to={AppRoutes.PICTURES}><b>{AppSections.PICTURES}</b></Link> : pour prolonger le voyage en images.
        </li>
      </ul>
      <p>
        Le périple est terminé, mais l’aventure est encore là, au fil de ces pages !
      </p>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = () => {
  return <SEO title={AppSections.HOME} />;
};
