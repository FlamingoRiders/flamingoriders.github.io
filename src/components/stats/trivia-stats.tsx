import React from "react";

const TriviaStats: React.FC = () => {

    return (<>
        <p>Retrouvez quelques infos et équivalences amusantes.</p>
        <table>
            <caption>Fun Facts</caption>
            <thead>
                <tr>
                    <th>Nombre de …</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Kilomètres</td>
                    <td>7200 kilomètres soit plus de 2 Tours de France complétés</td>
                </tr>
                <tr>
                    <td>Dénivelé positif</td>
                    <td>55 000 mètres soit plus de 6 fois l'Ascension de l'Everest</td>
                </tr>
                <tr>
                    <td>Heures sur la selle</td>
                    <td>420 heures soit presque 3 mois de travail en équivalent 35 heures</td>
                </tr>
                <tr>
                    <td>Jours sur la route</td>
                    <td>157 jours soit presque 4 aventures Koh Lanta</td>
                </tr>
                <tr>
                    <td>Mois entiers écoulés</td>
                    <td>5 mois soit un peu plus que le temps de gestation d'une chèvre</td>
                </tr>
                <tr>
                    <td>Monnaies utilisées</td>
                    <td>4 monnaies : euro <strong>(€)</strong>, couronne danoise <strong>(DKK)</strong>, couronne norvégienne <strong>(NOK)</strong>, couronne suédoise <strong>(SEK)</strong></td>
                </tr>
                <tr>
                    <td>Passages de frontière</td>
                    <td>18 passages</td>
                </tr>
                <tr>
                    <td>Présentations de passeport</td>
                    <td>0️⃣</td>
                </tr>
                <tr>
                    <td>Visites chez un un réparateur vélo</td>
                    <td>7 visites : 2 à Bergen, 1 à Reed, 1 à Trondheim, 1 à Tromsø, 1 à Luleå et 1 à Umeå</td>
                </tr>
                <tr>
                    <td>Crevaisons</td>
                    <td>0️⃣</td>
                </tr>
                <tr>
                    <td>Paquets de pâtes / riz mangés</td>
                    <td>💯</td>
                </tr>
                <tr>
                    <td>Tablettes de chocolat mangées</td>
                    <td>♾️</td>
                </tr>
            </tbody>
        </table></>
    );
}

export default TriviaStats;
