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

const PresentationPage: React.FC<PageProps<QueryReturn>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Qui sommes-nous ?" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1>Qui sommes-nous?</h1>
        </header>
        <section itemProp="articleBody">
          <p>
            Jeunes trentenaires en quête d'aventures, nous nous sommes lancés
            dans un projet de voyage à vélo vers l'Europe du Nord. Le but
            initial est de rallier la Norvège en partant de Paris. C'est aussi
            et surtout un moyen de nous pousser à la découverte, à nous
            recentrer sur nous-mêmes et le présent. Nous espérons ainsi aller
            voir au delà de nos frontières physiques et dépasser nos barrières
            mentales.
          </p>
          <StaticImage
            formats={["auto", "webp", "avif"]}
            src="../images/velos.jpg"
            alt="Les vélos"
          />
          <h3>Nana 🚴</h3>
          <p>
            Grande rêveuse dans l'âme, je regarde encore le monde à travers mes
            yeux d'enfant. Toujours partante pour partir à l'aventure, pour
            relever des défis encore toujours plus fous ou tout simplement
            découvrir des merveilles culinaires (<strong>#BouffeIsLife</strong>,
            you know).
          </p>
          <p>
            A travers ce voyage, je souhaite réaliser un rêve en accord avec mes
            convictions : partage, plaisir, dépassement de soi, fous-rires,
            respecteuse de l'environnement. Bref, vous l'aurez compris, je suis
            une bisounours (<strong>#MêmeTailleMêmeBoule</strong>).
          </p>
          <p>
            A présent, place à l'inconnu ! Comme on dit chez nous{" "}
            <em>“La route fait partie du voyage”</em>; et je compte donc bien en
            profiter! On ne vit qu'une fois <strong>#LaVidaLoca</strong>.
          </p>
          <table>
            <thead>
              <tr>
                <th>En quelques mots…</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Mon profil cycliste</strong>
                </td>
                <td>Baroudeuse 🏃‍♀️</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma monture</strong>
                </td>
                <td>Pino 🚲</td>
              </tr>
              <tr>
                <td>
                  <strong>Ce que j'aime dans le vélo</strong>
                </td>
                <td>Les paysages 🏞️</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma hantise</strong>
                </td>
                <td>Le vent glacial 🌬️🥶</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma nourriture préférée</strong>
                </td>
                <td>🍦🍰</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma citation favorite</strong>
                </td>
                <td>
                  <em>“On est pas venu pour se faire des potes”</em>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Nico 🚴‍♀️</h3>
          <p>
            Passionné et curieux de nombreux domaines, j'aime ce qui commence
            par une page blanche et où tout est à constuire. À mon sens,
            l'épanouissement personnel ne vient pas de nos accomplissements mais
            plutôt de l'intensité de ce que nous vivons et la pleine conscience
            du chemin parcouru. C'est en parti ce qui me motive dans ce projet
            de vélo. L'histoire de ce voyage, c'est un long cheminement qui,
            bien que faisant sens, fut difficile à appréhender pour ma part.
            Quand on en a parlé initialement, j'ai trouvé l'idée géniale sans
            pour autant être prêt à la concrétiser. Puis un beau jour, cela est
            devenu un projet qui s'était imposé à moi comme une évidence. C'est
            un moment que l'on ne pouvait laisser passer.
          </p>
          <table>
            <thead>
              <tr>
                <th>En quelques mots…</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Mon profil cycliste</strong>
                </td>
                <td>Grimpeur 🚵🏽</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma monture</strong>
                </td>
                <td>Hino 🚲</td>
              </tr>
              <tr>
                <td>
                  <strong>Ce que j'aime dans le vélo</strong>
                </td>
                <td>Le dépassement 💪</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma hantise</strong>
                </td>
                <td>Les fortes chaleurs 🥵</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma nourriture préférée</strong>
                </td>
                <td>🍝🍕</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma citation favorite</strong>
                </td>
                <td>
                  <em>“Champion !”</em>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Eduardo 🦩</h3>
          <p>
            Spécimen unique de Camargue doté de parole, Eduardo est un jeune
            flamant rose qui a décidé un beau jour de s'aventurer plus au Nord
            que ses congénères. Eduardo a beaucoup de facettes: il est beau
            gosse (selon ses parents), rêveur, farceur, gonflable et parfois
            même un peu gonflant ! C'est d'ailleurs à travers son oeil que notre
            voyage sera raconté. Et là on sent les sceptiques:
          </p>
          <p>
            <em>
              “Quoi mais un flamant rose en bouée qui parle ça n'existe pas !”
            </em>{" "}
            Si si, bien sûr que si ! Il suffit pour celà de gonfler sa bouée à
            précisément <strong>1,618033988749 bars</strong>. Ça ne s'invente
            pas ! Mais faites le test chez vous et vous verrez 😉
          </p>
          <p>
            <em>
              “Tu es sûr que tu ne serais pas juste une excuse pour que Nana et
              Nico puissent se cacher derrière tes mots et trimballer une
              mascotte lors de leur voyage?”
            </em>{" "}
            En voilà une bien drôle d'idée, vous avez décidément beaucoup
            d'imagination. 🤨
          </p>
          <p>
            <em>
              “Mais ça veut dire que tu parles de toi à la 3eme personne depuis
              le début ? Ça va les chevilles ?”
            </em>{" "}
            Ça va parfaitement,{" "}
            <a href="https://www.slate.fr/story/146073/flamands-roses-stables-jambe">
              voyez par vous-mêmes
            </a>{" "}
            🤓
          </p>
          <table>
            <thead>
              <tr>
                <th>En quelques mots…</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Mon profil cycliste</strong>
                </td>
                <td>Glandeur 🛋️</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma monture</strong>
                </td>
                <td>Le porte-bagages 🛄</td>
              </tr>
              <tr>
                <td>
                  <strong>Ce que j'aime dans le vélo</strong>
                </td>
                <td>Le voir à la télé 📺</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma hantise</strong>
                </td>
                <td>Devoir pédaler ! 🚲</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma nourriture préférée</strong>
                </td>
                <td>🦐🍤</td>
              </tr>
              <tr>
                <td>
                  <strong>Ma citation favorite</strong>
                </td>
                <td>
                  <em>“Dur, mais juste”</em>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Pourquoi ce projet ?</h3>
          <p>
            Pour un millier de raisons ! Le défi, le dépassement de soi,
            l'aventure, le fun, le partage, la découverte… Un peu de tout ça
            mais surtout tout le reste ! Tout ce que nous n'avons pas encore en
            tête et qui nous tombera dessus et que nous découvrirons au cours de
            notre voyage 😃
          </p>
          <h3>Notre parcours sportif</h3>
          <p>
            Amateurs de défis sportifs en tout genre, à notre actif plusieurs
            riches aventures et souvenirs mémorables :
          </p>
          <ul>
            <li>
              De la course à pied : des 10km, des semis, des trails et des
              marathons. On me dit dans l'oreillette{" "}
              <em>
                “Nana aurait fait le marathon Harry Potter sur deux jours!”
              </em>
              .
            </li>
            <li>
              Du triathlon : du format S au format L, dans des cadres très
              sympathiques : Versailles, Carcans, Annecy, Alpe d'Huez.
            </li>
            <li>
              Des randos en autonomie : Le Mare e Monti en Corse (2020), le tour
              de la Vanoise (2022) et la Ruta de Pedra en Sec à Majorque (2023).
            </li>
          </ul>
          <blockquote>
            <p>
              On aime bien tout ce qui exige des <strong>jambes</strong> , de la{" "}
              <strong>tête</strong> et du <strong>coeur</strong> !
            </p>
          </blockquote>
        </section>
      </article>
    </Layout>
  );
};

export default PresentationPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
