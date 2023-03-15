import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/Navbar.scss";

import logo from "../assets/emmaus-connect-large.png";

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const activeStyle = ({ isActive }) => {
		if (isActive)
			return {
				color: "#ffffff",
				backgroundColor: "#00acb0",
				borderRadius: "1.5rem",
				padding: "7px 18px",
			};
	};

	const handleDropdownOpen = () => {
		setIsDropdownOpen(true);
	};

	const handleDropdownClose = () => {
		setIsDropdownOpen(false);
	};

	return (
		<header>
			<nav className='navbar'>
				<div className='top-bar' />
				<div className='tabs-container'>
					<NavLink to='/' className='navbar-brand'>
						<img src={logo} alt='logo' className='logo' />
					</NavLink>
					<div className='right-tabs'>
						<NavLink to='/' className='tab' style={activeStyle}>
							Tableau de bord
						</NavLink>
						<NavLink to='/faq' className='tab' style={activeStyle}>
							FAQ
						</NavLink>
						<NavLink
							to='/account'
							className={`tab ${isDropdownOpen ? "active" : ""}`}
							style={activeStyle}
							onMouseEnter={handleDropdownOpen}
							onMouseLeave={handleDropdownClose}
						>
							{isDropdownOpen ? (
								<div className='menu-container'>
									<div className='menu-trigger'>Account</div>
									<div className='menu-content'>
										<NavLink to='/profile'>Profil</NavLink>
										<NavLink to='/'>Déconnexion</NavLink>
									</div>
								</div>
							) : (
								"Account"
							)}
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
}
