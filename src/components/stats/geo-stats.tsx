import { CountryStats } from "models/stats";
import React from "react";

const FRANCE = "France";
const BELGIUM = "Belgique";
const NETHERLANDS = "Pays-Bas";
const GERMANY = "Allemagne";
const DANMARK = "Danemark";
const NORWAY = "Norvège";
const FINLAND = "Finlande";
const SWEDEN = "Suède";

const FRANCE_FLAG = "🇫🇷";
const BELGIUM_FLAG = "🇧🇪";
const NETHERLANDS_FLAG = "🇳🇱";
const GERMANY_FLAG = "🇩🇪";
const DANMARK_FLAG = "🇩🇰";
const NORWAY_FLAG = "🇳🇴";
const FINLAND_FLAG = "🇫🇮";
const SWEDEN_FLAG = "🇸🇪";

interface GeoStatsProps {
  stats: Map<String, CountryStats>;
}

const GeoStats: React.FC<GeoStatsProps> = ({ stats }) => {
  return (
    <>
      <p>
        Retrouvez les territoires que nous avons traversés au cours de notre
        périple.
      </p>
      <table>
        <caption>Répartition jours et kilomètres par pays</caption>
        <thead>
          <tr>
            <th align="center" scope="col">
              <span>Pays</span>
            </th>
            <th align="center" scope="col">
              <span>Nombre de jours</span>
            </th>
            <th align="center" scope="col">
              <span>Kilomètres</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th align="center" scope="row">
              {FRANCE}
              <span className="d-mobile">&nbsp;{FRANCE_FLAG}</span>
            </th>
            <td align="center">{stats.get(FRANCE)?.days}</td>
            <td align="center">{stats.get(FRANCE)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {BELGIUM}
              <span className="d-mobile">&nbsp;{BELGIUM_FLAG}</span>
            </th>
            <td align="center">{stats.get(BELGIUM)?.days}</td>
            <td align="center">{stats.get(BELGIUM)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {NETHERLANDS}
              <span className="d-mobile">&nbsp;{NETHERLANDS_FLAG}</span>
            </th>
            <td align="center">{stats.get(NETHERLANDS)?.days}</td>
            <td align="center">{stats.get(NETHERLANDS)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {GERMANY}
              <span className="d-mobile">&nbsp;{GERMANY_FLAG}</span>
            </th>
            <td align="center">{stats.get(GERMANY)?.days}</td>
            <td align="center">{stats.get(GERMANY)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {DANMARK}
              <span className="d-mobile">&nbsp;{DANMARK_FLAG}</span>
            </th>
            <td align="center">{stats.get(DANMARK)?.days}</td>
            <td align="center">{stats.get(DANMARK)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {NORWAY}
              <span className="d-mobile">&nbsp;{NORWAY_FLAG}</span>
            </th>
            <td align="center">{stats.get(NORWAY)?.days}</td>
            <td align="center">{stats.get(NORWAY)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {FINLAND}
              <span className="d-mobile">&nbsp;{FINLAND_FLAG}</span>
            </th>
            <td align="center">{stats.get(FINLAND)?.days}</td>
            <td align="center">{stats.get(FINLAND)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {SWEDEN}
              <span className="d-mobile">&nbsp;{SWEDEN_FLAG}</span>
            </th>
            <td align="center">{stats.get(SWEDEN)?.days}</td>
            <td align="center">{stats.get(SWEDEN)?.distance}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>Lieux traversés</caption>
        <thead>
          <tr>
            <th align="center" scope="col">
              <span>Lieu</span>
            </th>
            <th align="center" scope="col">
              <span>Détail</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th align="center" scope="row">
              8 pays
            </th>
            <td align="center">
              <span className="d-desktop">
                France, Belgique, Pays-Bas, Allemagne, Danemark, Norvège,
                Finlande, Suède
              </span>
              <span className="d-mobile">
                France 🇨🇵, Belgique 🇧🇪, Pays-Bas 🇳🇱, Allemagne 🇩🇪, Danemark 🇩🇰,
                Norvège 🇧🇻, Finlande 🇫🇮, Suède 🇸🇪
              </span>
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              3 mers
            </th>
            <td align="center">mer du Nord, mer Baltique, mer de Norvège</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              7 départements français
            </th>
            <td align="center">
              Hauts-de-Seine (92), Paris (75), Seine-Saint-Denis (93), Seine et
              Marne (77), Oise(60), Aisne (02), Nord (59)
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              4 provinces belges
            </th>
            <td align="center">
              Hainaut, Brabant Wallon, Brabant flamand, Anvers
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              10 provinces néerlandaises
            </th>
            <td align="center">
              Brabant-Septentrional, Hollande-Méridionale, Utrecht,
              Hollande-Septentrionale, Flevoland, Gueldre, Overijssel, Frise,
              Drenthe, Groningue
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              4 länder allemands
            </th>
            <td align="center">
              Basse-Saxe, Brême, Hambourg, Schleswig-Holstein
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              4 régions danoises
            </th>
            <td align="center">
              Sjælland, Hovedstaden, Jutland central, Jutland du Nord
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              9 comtés norvégiens
            </th>
            <td align="center">
              Oslo, Akershus, Buskerud, Telemark, Vestland, Møre og Romsdal,
              Trøndelag, Nordland, Troms
            </td>
          </tr>
          <tr>
            <th align="center" scope="row">
              2 régions finlandaises
            </th>
            <td align="center">Laponie, Åland</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              7 comtés suédois
            </th>
            <td align="center">
              Norrbotten, Västerbotten, Västernorrland, Gävleborg, Uppsala,
              Stockholm, Scanie
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <p>
        Sur notre chemin, nous sommes égalements passés par les 7 sites suivants
        classés au patrimoine mondial de l'UNESCO :{" "}
      </p>
      <ul>
        <li>
          <a href="https://whc.unesco.org/fr/list/818/">
            les moulins à vent de Kinderdijk
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/1087/">
            l'hôtel de ville et la statue de Roland sur la place du marché de
            Brême
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/1467/">
            la Speicherstadt et le quartier Kontorhaus avec la Chilehaus à
            Hambourg
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/59/">
            le quartier de « Bryggen » dans la ville de Bergen
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/1195">
            les fjords de l'Ouest de la Norvège : le Geirangerfjord et le
            Nærøyfjord
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/762">
            la ville-église de Gammelstad à Luleå
          </a>
        </li>
        <li>
          <a href="https://whc.unesco.org/fr/list/898">
            la région de la Haute-Côte en Suède
          </a>
        </li>
      </ul>
    </>
  );
};

export default GeoStats;
