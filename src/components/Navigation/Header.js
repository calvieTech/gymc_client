import React from "react";
import Logo from "../../media/logo-banner.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top"
				role="navigation">
				<div className="container">
					<NavLink
						to="/"
						className="navbar-brand">
						<img
							className=""
							src={Logo}
							width={350}
							height={75}
							alt="logo"
						/>
					</NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#nav__menu">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="nav__menu">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<NavLink
									to="/"
									className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/login"
									className="nav-link">
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/signup"
									className="nav-link">
									Signup
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
