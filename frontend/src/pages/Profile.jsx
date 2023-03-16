import { useNavigate } from "react-router-dom";
import { Edit2, LogOut } from "react-feather";

import "../styles/pages/Profile.scss";

import pfp from "../assets/default-pfp.jpeg";

export default function Account() {
	const navigate = useNavigate();

	const onPressDisconnect = () => {
		navigate("/login");
	};
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
						<p className='title-form'>À propos de moi</p>
						<label>Nom</label>
						<input type='text' name='nom' id='nom' className='input' />
						<label>Prénom</label>
						<input type='text' name='prenom' id='prenom' className='input' />
						<label>E-mail</label>
						<input type='text' name='email' id='email' className='input' />
						<label>Téléphone</label>
						<input
							type='text'
							name='telephone'
							id='telephone'
							className='input'
						/>
					</form>
				</div>
				<div className='password'>
					<form className='password-form'>
						<p className='title-form'>Changer de mot de passe</p>
						<label>Ancien mot de passe</label>
						<input type='text' name='nom' id='nom' className='input' />
						<label>Nouveau mot de passe</label>
						<input type='text' name='nom' id='nom' className='input' />
						<label>Confirmer nouveau mot de passe</label>
						<input type='text' name='nom' id='nom' className='input' />
						<button type='button' className='btn'>
							Confirmer
						</button>
					</form>
				</div>
				<div className='platform'>
					<p className='platform-container'>Changer de plateforme</p>
					<button type='button' className='btn'>
						Ordinateur
					</button>
					<button type='button' className='btn'>
						Tablette
					</button>
				</div>
				<div className='disconnect'>
					<p className='platform-container'>Déconnexion</p>
					<button type='button' className='btn' onClick={onPressDisconnect}>
						<LogOut color='#000000' size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}
