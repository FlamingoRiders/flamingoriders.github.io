import React from "react";

const GeoStats: React.FC = () => {
    return (
        <>
            <p>Les territoires que nous avons traversé au cours de notre parcours.</p>
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
