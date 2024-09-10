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
            <p>Retrouvez les territoires que nous avons traversés au cours de notre périple.</p>
            <table>
                <caption>Répartition jours et kilomètres par pays</caption>
                <thead>
                    <tr>
                        <th scope="col">
                            <span>Pays</span>
                        </th>
                        <th scope="col">
                            <span>Nombre de jours</span>
                        </th>
                        <th scope="col">
                            <span>Kilomètres</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            {FRANCE}<span className="d-mobile">&nbsp;{FRANCE_FLAG}</span>
                        </th>
                        <td>{stats.get(FRANCE)?.days}</td>
                        <td>{stats.get(FRANCE)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {BELGIUM}<span className="d-mobile">&nbsp;{BELGIUM_FLAG}</span>
                        </th>
                        <td>{stats.get(BELGIUM)?.days}</td>
                        <td>{stats.get(BELGIUM)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {NETHERLANDS}<span className="d-mobile">&nbsp;{NETHERLANDS_FLAG}</span>
                        </th>
                        <td>{stats.get(NETHERLANDS)?.days}</td>
                        <td>{stats.get(NETHERLANDS)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {GERMANY}<span className="d-mobile">&nbsp;{GERMANY_FLAG}</span>
                        </th>
                        <td>{stats.get(GERMANY)?.days}</td>
                        <td>{stats.get(GERMANY)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {DANMARK}<span className="d-mobile">&nbsp;{DANMARK_FLAG}</span>
                        </th>
                        <td>{stats.get(DANMARK)?.days}</td>
                        <td>{stats.get(DANMARK)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {NORWAY}<span className="d-mobile">&nbsp;{NORWAY_FLAG}</span>
                        </th>
                        <td>{stats.get(NORWAY)?.days}</td>
                        <td>{stats.get(NORWAY)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {FINLAND}<span className="d-mobile">&nbsp;{FINLAND_FLAG}</span>
                        </th>
                        <td>{stats.get(FINLAND)?.days}</td>
                        <td>{stats.get(FINLAND)?.distance}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            {SWEDEN}<span className="d-mobile">&nbsp;{SWEDEN_FLAG}</span>
                        </th>
                        <td>{stats.get(SWEDEN)?.days}</td>
                        <td>{stats.get(SWEDEN)?.distance}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Lieux traversés</caption>
                <thead>
                    <tr>
                        <th scope="col">
                            <span>Lieu</span>
                        </th>
                        <th scope="col">
                            <span>Détail</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            8 pays
                        </th>
                        <td><span className="d-desktop">France, Belgique, Pays-Bas, Allemagne, Danemark, Norvège, Finlande, Suède</span>
                            <span className="d-mobile">France 🇨🇵, Belgique 🇧🇪, Pays-Bas 🇳🇱, Allemagne 🇩🇪, Danemark 🇩🇰, Norvège 🇧🇻, Finlande 🇫🇮, Suède 🇸🇪</span></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3 mers
                        </th>
                        <td>mer du Nord, mer Baltique, mer de Norvège</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            7 départements français
                        </th>
                        <td>Hauts-de-Seine (92), Paris (75), Seine-Saint-Denis (93), Seine et Marne (77), Oise(60), Aisne (02), Nord (59)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            4 provinces belges
                        </th>
                        <td>Hainaut, Brabant Wallon, Brabant flamand, Anvers</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            10 provinces néerlandaises
                        </th>
                        <td>Brabant-Septentrional, Hollande-Méridionale, Utrecht, Hollande-Septentrionale, Flevoland, Gueldre, Overijssel, Frise, Drenthe, Groningue</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            4 länder allemands
                        </th>
                        <td>Basse-Saxe, Brême, Hambourg, Schleswig-Holstein</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            4 régions danoises
                        </th>
                        <td>Sjælland, Hovedstaden, Jutland central, Jutland du Nord</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            9 comtés norvégiens
                        </th>
                        <td>Oslo, Akershus, Buskerud, Telemark, Vestland, Møre og Romsdal, Trøndelag, Nordland, Troms</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2 régions finlandaises
                        </th>
                        <td>Laponie, Åland</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            7 comtés suédois
                        </th>
                        <td>Norrbotten, Västerbotten, Västernorrland, Gävleborg, Uppsala, Stockholm, Scanie</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default GeoStats;
