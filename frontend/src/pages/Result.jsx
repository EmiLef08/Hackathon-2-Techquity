import React from "react";

import "../styles/pages/Result.scss";

export default function Result() {
	const note = JSON.parse(localStorage.getItem("note"));

	console.log(note);
	return (
		<div className='container-result'>
			<div className='card-container-result'>
				<h1>Résultat de la catégorie :</h1>
				<div>Votre appareil est éligible a une mise en vente</div>
				<div className='note-container'>
					<p className='note'>{note}</p>
				</div>
				<table class='table'>
					<thead>
						<tr>
							<th>Valeur Totale Minimale</th>
							<th>Valeur Totale Maximale</th>
							<th className='categories'>Catégories</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>ー</td>
							<td>ー</td>
							<td className='category-1hc'>1 - HC</td>
						</tr>
						<tr>
							<td>90 €</td>
							<td>165 €</td>
							<td className='category-2c'>2 - C</td>
						</tr>
						<tr>
							<td>165 €</td>
							<td>255 €</td>
							<td className='category-3b'>3 - B</td>
						</tr>
						<tr>
							<td>255 €</td>
							<td>375 €</td>
							<td className='category-4a'>4 - A</td>
						</tr>
						<tr>
							<td>375 €</td>
							<td>ー</td>
							<td className='category-premium'>5 - Premium</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
