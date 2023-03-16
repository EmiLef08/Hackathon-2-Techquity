import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/pages/Form1.scss";

export default function Form1() {
	const [brandValue, setBrandValue] = useState("");
	const [modelValue, setModelValue] = useState("");

	const [ramValue, setRamValue] = useState("");
	const [stockageValue, setStockageValue] = useState("");
	const [tailleEcranValue, setTailleEcranValue] = useState("");
	const [reseauValue, setReseauValue] = useState("");
	const [indiceAntutuValue, setIndiceAntutuValue] = useState("");
	const [ponderationValue, setPonderationValue] = useState("");

	const [conditionValue, setConditionValue] = useState("");
	const [redirectRoute, setRedirectRoute] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (conditionValue === "bon") {
			setRedirectRoute("/resultat");
		} else if (conditionValue === "réparable") {
			setRedirectRoute("/recondition");
		} else {
			setRedirectRoute("/recyclable");
		}

		function calculerCategorie(
			ram,
			stockage,
			tailleEcran,
			reseau,
			indiceAntutu,
			ponderation
		) {
			let note =
				ram * 0.3 +
				stockage * 0.3 +
				tailleEcran * 0.1 +
				reseau * 0.2 +
				indiceAntutu * 0.001;

			note = note + note * (ponderation / 100);

			if (note < 30) {
				return "1 - HC";
			} else if (note >= 30 && note < 110) {
				return "2 - C";
			} else if (note >= 110 && note < 170) {
				return "3 - B";
			} else if (note >= 170 && note < 250) {
				return "4 - A";
			} else {
				return "Premium";
			}
		}

		const note = calculerCategorie(
			parseInt(ramValue),
			parseInt(stockageValue),
			parseInt(tailleEcranValue),
			parseInt(reseauValue),
			parseInt(indiceAntutuValue),
			parseInt(ponderationValue)
		);
	};

	if (redirectRoute) navigate(redirectRoute);

	return (
		<>
			<div className='container1'>
				<div className='card-container1'>
					<form className='form1' onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Marque'
							id='marque'
							onChange={(e) => setBrandValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Modèle'
							id='text'
							onChange={(e) => setModelValue(e.target.value.replace(" ", "-"))}
						/>
						<input
							type='text'
							placeholder='Ram (2GO min)'
							id='ram'
							value={ramValue}
							onChange={(e) => setRamValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Stockage (16GO min)'
							id='stockage'
							value={stockageValue}
							onChange={(e) => setStockageValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder={`Taille d'écran (4 pouces min)`}
							id='screen size'
							value={tailleEcranValue}
							onChange={(e) => setTailleEcranValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Réseau (4g min)'
							id='text'
							value={reseauValue}
							onChange={(e) => setReseauValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Indice AnTuTu'
							id='antutu'
							value={indiceAntutuValue}
							onChange={(e) => setIndiceAntutuValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Pondération (10% à -100%)'
							id='text'
							value={ponderationValue}
							onChange={(e) => setPonderationValue(e.target.value)}
						/>
						<input
							type='text'
							placeholder='État (bon, réparable)'
							id='etat'
							onChange={(e) => setConditionValue(e.target.value)}
						/>
						<div className='checkbox-equipement'>
							<input type='checkbox' id='checkbox' />
							<p>Chargeur et cable</p>
						</div>
						<button type='submit' className='btn-form'>
							Envoyer
						</button>
					</form>
				</div>
				{brandValue !== "" && modelValue !== "" && (
					<div>
						<iframe
							title='PhoneScoop'
							src={`https://www.phonescoop.com/search/jump_search.php?q=${brandValue} ${modelValue}`}
							sandbox='allow-same-origin allow-scripts'
							width='50%'
							height='460px'
						/>
						<div className='antutu-container'>
							<Link
								to={`https://www.kimovil.com/fr/ou-acheter-${brandValue}-${modelValue}`}
								className='antutu'
							>
								Consulter le score AnTuTu de l'appareil {brandValue}{" "}
								{modelValue}
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
