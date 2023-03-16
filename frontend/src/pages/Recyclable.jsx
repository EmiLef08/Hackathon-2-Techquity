import React from "react";

import { Link } from "react-router-dom";

import "../styles/pages/Recyclable.scss";

export default function Recyclable() {
	return (
		<div className='container'>
			<div className='card-container-recyclable'>
				<div className='recyclable-card'>
					<p className='recycling'>Recyclage</p>
					<div className='not-eligible'>
						<p className='recycling-content'>
							Le téléphone en question n'est pas admissible a la donation, vous
							trouverez ci-dessous l'ensemble des points de collectes afin de
							procéder au recyclage de l'appareil si vous le souhaitez :
						</p>
						<Link
							to='https://www.ecosystem.eco/fr/recherche-point-de-collecte?profil=0&action=rid&equipment-part=364'
							className='recycling-link'
						>
							https://www.ecosystem.eco/fr/recherche-point-de-collecte?profil=0&action=rid&equipment-part=364
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
