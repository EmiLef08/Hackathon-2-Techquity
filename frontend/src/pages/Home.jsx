import React, { useState } from "react";
import "../styles/pages/Home.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { DownloadOutline, CreateOutline, PersonCircleOutline } from 'react-ionicons';

export default function Home() {
  const navigate = useNavigate();

  const csvData = localStorage.getItem('csvData');

  const handleFileUpload = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
	  const csvData = reader.result;
	  localStorage.setItem('csvData', csvData);
	  navigate('/visualisation');
	};
  };

const handleOnFileLoad = (data) => {
	const csvData = data.get('csvData');
	localStorage.setItem('csvData', csvData);
	navigate('/visualisation');
  };

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
        <NavLink to="/formulaire">
          <CreateOutline color="#FFFFFF" height="120px" width="120px" cssClasses="form" title="Insérer les données" />
        </NavLink>
        <p className="form-title">Insérer les données</p>
        <div>
          <label htmlFor="csv-upload">
            <DownloadOutline color="#FFFFFF" height="120px" width="120px" cssClasses="import" title="Importer un fichier CSV" />
          </label>
          <input id="csv-upload" type="file" accept=".csv" style={{ display: "none" }} onChange={handleFileUpload} />
        </div>
        <p className="import-title">Importer un fichier CSV</p>
      </div>
      <div className="actus">
			Actualités
			<a href="https://www.cbnews.fr/mobile/image-telephonie-mobile-entre-morosite-innovations-74876" className="actu">La téléphonie mobile entre morosité et innovations - CB NEWS</a>
			<a href="https://www.ariase.com/mobile/actualite/un-enorme-forfait-de-200-go-c-est-possible-mais-on-hesite-encore-sur-le-choix-de-l-operateur" className="actu">Un énorme forfait de 200 Go ? C'est possible, mais on hésite encore sur le choix de l'opérateur... - Ariase</a>
			<a href="https://actu.fr/societe/ameli-un-nouveau-service-pour-avoir-la-cpam-au-telephone-sans-aucune-attente_57945457.html" className="actu">Ameli : un nouveau service pour avoir la CPAM au téléphone, sans aucune attente - Actu.fr</a>
			<a href="https://www.iphon.fr/post/2022-iphone-domine-marche-telephones-portables" className="actu">En 2022, l'iPhone a clairement dominé le marché des téléphones portables - iPhon.fr</a>
			<a href="https://www.lardennais.fr/id464188/article/2023-03-11/le-succes-du-reconditionnement-et-de-la-reparation-des-telephones-portables" className="actu">Le succès du reconditionnement et de la réparation des téléphones portables à Charleville-Mézières - L'Ardennais</a>
		</div>
		
	</div>
);
}
