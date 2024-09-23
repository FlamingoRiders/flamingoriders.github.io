import React from "react";

const TriviaStats: React.FC = () => {

    return (<>
        <p>Retrouvez quelques infos et équivalences amusantes.</p>
        <table>
            <caption>Fun Facts</caption>
            <thead>
                <tr>
                    <th align="center" scope="col">Nombre de …</th>
                    <th align="center" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center">Kilomètres</td>
                    <td align="center">7200 kilomètres soit plus de 2 Tours de France complétés</td>
                </tr>
                <tr>
                    <td align="center">Dénivelé positif</td>
                    <td align="center">55 000 mètres soit plus de 6 fois l'Ascension de l'Everest</td>
                </tr>
                <tr>
                    <td align="center">Heures sur la selle</td>
                    <td align="center">420 heures soit presque 3 mois de travail en équivalent 35 heures</td>
                </tr>
                <tr>
                    <td align="center">Jours sur la route</td>
                    <td align="center">157 jours soit presque 4 aventures Koh Lanta</td>
                </tr>
                <tr>
                    <td align="center">Mois entiers écoulés</td>
                    <td align="center">5 mois soit un peu plus que le temps de gestation d'une chèvre</td>
                </tr>
                <tr>
                    <td align="center">Monnaies utilisées</td>
                    <td align="center">4 monnaies : euro <strong>(€)</strong>, couronne danoise <strong>(DKK)</strong>, couronne norvégienne <strong>(NOK)</strong>, couronne suédoise <strong>(SEK)</strong></td>
                </tr>
                <tr>
                    <td align="center">Passages de frontière</td>
                    <td align="center">18 passages</td>
                </tr>
                <tr>
                    <td align="center">Présentations de passeport</td>
                    <td align="center">0️⃣</td>
                </tr>
                <tr>
                    <td align="center">Visites chez un un réparateur vélo</td>
                    <td align="center">7 visites : 2 à Bergen, 1 à Reed, 1 à Trondheim, 1 à Tromsø, 1 à Luleå et 1 à Umeå</td>
                </tr>
                <tr>
                    <td align="center">Crevaisons</td>
                    <td align="center">0️⃣</td>
                </tr>
                <tr>
                    <td align="center">Paquets de pâtes / riz mangés</td>
                    <td align="center">💯</td>
                </tr>
                <tr>
                    <td align="center">Tablettes de chocolat mangées</td>
                    <td align="center">♾️</td>
                </tr>
            </tbody>
        </table></>
    );
}

export default TriviaStats;
