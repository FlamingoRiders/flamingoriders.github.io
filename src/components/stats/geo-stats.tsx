import { Country, Flag } from "models/countries";
import { CountryStats } from "models/stats";
import React from "react";

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
              {Country.France}
              <span className="d-mobile">&nbsp;{Flag.France}</span>
            </th>
            <td align="center">{stats.get(Country.France)?.days}</td>
            <td align="center">{stats.get(Country.France)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Belgium}
              <span className="d-mobile">&nbsp;{Flag.Belgium}</span>
            </th>
            <td align="center">{stats.get(Country.Belgium)?.days}</td>
            <td align="center">{stats.get(Country.Belgium)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Netherlands}
              <span className="d-mobile">&nbsp;{Flag.Netherlands}</span>
            </th>
            <td align="center">{stats.get(Country.Netherlands)?.days}</td>
            <td align="center">{stats.get(Country.Netherlands)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Germany}
              <span className="d-mobile">&nbsp;{Flag.Germany}</span>
            </th>
            <td align="center">{stats.get(Country.Germany)?.days}</td>
            <td align="center">{stats.get(Country.Germany)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Danmark}
              <span className="d-mobile">&nbsp;{Flag.Danmark}</span>
            </th>
            <td align="center">{stats.get(Country.Danmark)?.days}</td>
            <td align="center">{stats.get(Country.Danmark)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Norway}
              <span className="d-mobile">&nbsp;{Flag.Norway}</span>
            </th>
            <td align="center">{stats.get(Country.Norway)?.days}</td>
            <td align="center">{stats.get(Country.Norway)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Finland}
              <span className="d-mobile">&nbsp;{Flag.Finland}</span>
            </th>
            <td align="center">{stats.get(Country.Finland)?.days}</td>
            <td align="center">{stats.get(Country.Finland)?.distance}</td>
          </tr>
          <tr>
            <th align="center" scope="row">
              {Country.Sweden}
              <span className="d-mobile">&nbsp;{Flag.Sweden}</span>
            </th>
            <td align="center">{stats.get(Country.Sweden)?.days}</td>
            <td align="center">{stats.get(Country.Sweden)?.distance}</td>
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
