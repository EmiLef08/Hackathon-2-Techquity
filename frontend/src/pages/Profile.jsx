import { Edit2 } from "react-feather";

import "../styles/pages/Profile.scss";

import pfp from "../assets/default-pfp.jpeg";

export default function Account() {
	return (
		<div className='container'>
			<div className='card-container'>
				<img
					src={pfp}
					alt='default profile picture'
					className='profile-picture'
				/>
				<div className='pencil'>
					<Edit2 color='#b2b2b2' size={20} />
				</div>
				<div className='about'>
					<form className='about-form'>
						<label for='name'>Nom</label>
						<input type='text' name='nom' id='nom' className='input' />
						<label for='email'>Prénom</label>
						<input type='text' name='prenom' id='prenom' className='input' />
						<label for='email'>E-mail</label>
						<input type='text' name='email' id='email' className='input' />
						<label for='email'>Téléphone</label>
						<input
							type='text'
							name='telephone'
							id='telephone'
							className='input'
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
