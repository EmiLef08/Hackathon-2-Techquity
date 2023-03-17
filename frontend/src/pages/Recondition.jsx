import React from "react";

import "../styles/pages/Recondition.scss";

export default function Recondition() {
	return (
		<div className='recon-form'>
			<div className='recon-bloctexte'>
				<div className='recon-title'>Téléphone à reconditionner</div>
				<p className='recon-texte'>
					Le téléphone indiqué présente les éléments nécessaires pour être
					ajouter à la liste des appareils à reconditionner.
				</p>
			</div>
			<input
				className='recon-button'
				type='button'
				value='Ajout à la liste de reconditionnement'
			/>
			<div className='absolute'>
				<div className='half-arc3' style={{ "--percentage": "100%" }}>
					<span className='label3'>100%</span>
				</div>
			</div>
		</div>
	);
}
