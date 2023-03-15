import React from "react";
import "../styles/pages/Home.scss";
import { NavLink } from "react-router-dom"
import { DownloadOutline, CreateOutline, PersonCircleOutline } from 'react-ionicons';

export default function Home() {
	return (
	<div className="board">
		<div className="stats">
			<div className="hello-user">Bonjour User !</div>
			<PersonCircleOutline color="#FFFFFF" height="100px" width="100px" />
			<div className="stat">7500 personnes/familles équipées</div>
			<div className="stat">24000 équipements collectées</div>
			<div className="stat">60 à 70% des employés en structure d'insertion retrouvent une situation stable</div>
		</div>
		<div className="icons">
				Nouvel appareil ?
				<NavLink to="/">
					<CreateOutline color="#FFFFFF" height="120px" width="120px" cssClasses="form" title="Insérer les données" />
				</NavLink>
				<p className="form-title">Insérer les données</p>
				<NavLink to="/">
					<DownloadOutline color="#FFFFFF" height="120px" width="120px" cssClasses="import" title="Importer un fichier CSV" />
				</NavLink>
				<p className="import-title">Importer un fichier CSV</p>
		</div>
		<div className="actus">
			Actualités
			<div className="actu">La téléphonie mobile entre morosité et innovations - CB NEWS</div>
			<div className="actu">Une énorme forfait de 200 Go ? C'est possible, mais on hésite encore sur le choix de l'opérateur... - Ariase</div>
			<div className="actu">Ameli : un nouveau service pour avoir la CPAM au téléphone, sans aucune attente - Actu.fr</div>
			<div className="actu">En 2022, l'iPhone a clairement dominé le marché des téléphones portables - iPhon.fr</div>
			<div className="actu">Le succès du reconditionnement et de la réparation des téléphones portables à Charleville-Mézières - L'Ardennais</div>
		</div>
		
	</div>
);
}
