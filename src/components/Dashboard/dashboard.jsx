import React, { useState, useEffect } from "react";
import "./dashboard.styles.css";
import http from "../http-common.js";

const Dashboard = () => {
	const [patientCount, setPatientCount] = useState([]);
	const getPatientCount = () => {
		http.get("/patreg/count").then((response) => {
			console.log(response.data);
			setPatientCount(response.data[0].count);
		});
	};

	useEffect(() => {
		getPatientCount();
	}, []);
	return (
		<React.Fragment>
			<div className="cardBox">
				<div className="card">
					<div>
						<div className="numbers">{patientCount}</div>
						<div className="cardName">Total Patient</div>
					</div>
					<div className="iconBox">
						<ion-icon name="eye"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">80</div>
						<div className="cardName">This Month Patient</div>
					</div>
					<div className="iconBox">
						<ion-icon name="cart"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">254</div>
						<div className="cardName">Today Patient</div>
					</div>
					<div className="iconBox">
						<ion-icon name="chatbubbles"></ion-icon>
					</div>
				</div>
				<div className="card">
					<div>
						<div className="numbers">$2,542</div>
						<div className="cardName">Earning today</div>
					</div>
					<div className="iconBox">
						<ion-icon name="cash"></ion-icon>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
