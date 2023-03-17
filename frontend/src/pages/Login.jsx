import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Login.scss";

export default function Login() {
	const navigate = useNavigate();

	const onPressConnect = () => {
		navigate("/");
	};
	return (
		<div className='container'>
			<div className='card-container-login'>
				<div className='connexion'>
					<p className='connect'>Connexion</p>
					<input
						type='text'
						name='username'
						placeholder='Username'
						className='input-login'
					/>
					<input
						type='password'
						name='password'
						placeholder='Mot de passe'
						className='input-login'
					/>
					<button
						type='button'
						className='btn-connect'
						onClick={onPressConnect}
					>
						Connexion
					</button>
					<p className='password-forgotten'>Mot de passe oublié ?</p>
				</div>
			</div>
		</div>
	);
}
