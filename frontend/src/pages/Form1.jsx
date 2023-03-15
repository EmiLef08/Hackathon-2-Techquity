import React from "react";

export default function Form1() {
	return (
		<>
			<div>
				<form className='Formulaire'>
					<input type='text' placeholder='Marque' id='text' />
					<br />
					<input type='text' placeholder='Model' id='text' />
					<br />
					<input type='color' id='Color' />
					Couleur
					<br />
					<input
						type='number'
						required
						min='8'
						max='14'
						placeholder=' version Android min 8'
						id='number'
					/>
					<br />
					<input type='text' placeholder='Ram' id='text' />
					<br />
					<input type='text' placeholder='Mémoire' id='text' />
					<br />
					<input
						type='number'
						placeholder='Ecran min 4'
						step='0.1'
						id='number'
						name='inputNumber'
						required
						min='4'
						max='7'
					/>
					"<br />
					<input type='checkbox' id='checkbox' />
					Chargeur et cable
					<br />
				</form>
			</div>
			<div>
				<iframe
					title='Geekbench'
					src='https://www.phonescoop.com/'
					sandbox='allow-same-origin allow-scripts'
					width='100%'
					height='500px'
				/>
			</div>
		</>
	);
}
