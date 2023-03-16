import React, { useState } from "react";

import "../styles/pages/Form1.scss";

export default function Form1() {
	const [brandValue, setBrandValue] = useState("");
	const [modelValue, setModelValue] = useState("");
	return (
		<div className='container1'>
			<div className='card-container1'>	
				<form className='form1'>
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
						onChange={(e) => setModelValue(e.target.value)}
					/>
					<input type='text' placeholder='Ram (2GO min)' id='ram' />
					<input type='text' placeholder='Mémoire (16GO min)' id='ram' />
					<input type='text' placeholder='État' id='etat' />
					<div className='checkbox-equipement'>
						<input type='checkbox' id='checkbox' />
						<p>Chargeur et cable</p>
					</div>
				</form>
			</div>
			{modelValue !== "" && (
				<div>
					<iframe
						title='Geekbench'
						src={`https://www.phonescoop.com/search/jump_search.php?q=${brandValue} ${modelValue}`}
						sandbox='allow-same-origin allow-scripts'
						width='150%'
						height='500px'
					/>
				</div>
			)}
		</div>
	);
}
