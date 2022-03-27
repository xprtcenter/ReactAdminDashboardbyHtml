import React from "react";
import userimg from "../../../assets/user.jpg";
import "./topbar.styles.css";
const Topbar = ({ toggle }) => {
	return (
		<div className="topbar">
			<div className="toggle" onClick={toggle}>
				<ion-icon name="menu"></ion-icon>
			</div>

			<div className="user">
				<img src={userimg} alt="" />
			</div>
		</div>
	);
};

export default Topbar;
