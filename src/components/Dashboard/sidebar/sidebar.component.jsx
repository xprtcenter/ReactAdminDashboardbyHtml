import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/swami.png";
import "./sidebar.styles.css";

const Sidebar = () => {
	const [sidemenuactive, setSidemenuActive] = useState("");
	return (
		<Fragment>
			<ul>
				<li>
					<Link to="/">
						<span className="logo">
							<img src={logo} alt="" />
						</span>
						<span className="logo-title">VK BORL Hospital</span>
					</Link>
				</li>
				<li className={sidemenuactive === "Dashboard" ? "hovered" : null}>
					<Link
						to="/tempdashboard"
						onClick={() => {
							setSidemenuActive("Dashboard");
						}}
					>
						<span className="icon">
							<ion-icon name="home"></ion-icon>
						</span>
						<span className="title">Dashboard</span>
					</Link>
				</li>

				<li className={sidemenuactive === "OPD" ? "hovered" : null}>
					<Link
						to="/patientreg"
						onClick={() => {
							setSidemenuActive("OPD");
						}}
					>
						<span className="icon">
							<ion-icon name="chatbubbles"></ion-icon>
						</span>
						<span className="title">OPD</span>
					</Link>
				</li>
				<li className={sidemenuactive === "Help" ? "hovered" : null}>
					<Link
						to="/help"
						onClick={() => {
							setSidemenuActive("Help");
						}}
					>
						<span className="icon">
							<ion-icon name="help-circle"></ion-icon>
						</span>
						<span className="title">Help</span>
					</Link>
				</li>
				<li className={sidemenuactive === "User Setting" ? "hovered" : null}>
					<Link
						to="/usersetting"
						onClick={() => {
							setSidemenuActive("User Setting");
						}}
					>
						<span className="icon">
							<ion-icon name="settings"></ion-icon>
						</span>
						<span className="title">User Setting</span>
					</Link>
				</li>
				<li className={sidemenuactive === "Masters" ? "hovered" : null}>
					<Link
						to="/masters"
						onClick={() => {
							setSidemenuActive("Masters");
						}}
					>
						<span className="icon">
							<ion-icon name="lock"></ion-icon>
						</span>
						<span className="title">Masters</span>
					</Link>
				</li>

				<li className={sidemenuactive === "Sign Out" ? "hovered" : null}>
					<Link
						to="#"
						onClick={() => {
							setSidemenuActive("Sign Out");
						}}
					>
						<span className="icon">
							<ion-icon name="log-out"></ion-icon>
						</span>
						<span className="title">Sign Out</span>
					</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Sidebar;
