import React from "react";
import styles from "../styles/pages/Home.scss";
import { NavLink } from "react-router-dom"
import { DownloadOutline, CreateOutline, PersonCircleOutline } from 'react-ionicons';

export default function Home() {
	return (
	<div className={styles.board}>
		<div className={styles.stats}>
			<div className={styles["hello-user"]}>Bonjour User</div>
			<PersonCircleOutline color="#213ABE" height="50px" width="50px" />
			<div className={styles.stat}>7500 personnes/familles équipées</div>
			<div className={styles.stat}>24000 équipements collectées</div>
			<div className={styles.stat}>60 à 70% des employés en structure d'insertion retrouvent une situation stable</div>
		</div>
		<div className={styles.icons}>
				Nouvel appareil ?
				<NavLink to="/">
					<CreateOutline color="#489ED7" height="100px" width="100px" />
					Insérer des données
				</NavLink>
				<NavLink to="/">
					<DownloadOutline color="#E6334C" height="100px" width="100px" />
					Importer un fichier CSV
				</NavLink>
		</div>
		<div className={styles.actus}>
			Actualités
			<div className={styles.actu}>La téléphonie mobile entre morosité et innovations - CB NEWS</div>
			<div className={styles.actu}>Une énorme forfait de 200 Go ? C'est possible, mais on hésite encore sur le choix de l'opérateur... - Ariase</div>
			<div className={styles.actu}>Ameli : un nouveau service pour avoir la CPAM au téléphone, sans aucune attente - Actu.fr</div>
		</div>
		
	</div>
);
}
