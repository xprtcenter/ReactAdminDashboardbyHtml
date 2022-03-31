import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PatientRegistration from "./components/opd/patientRegistration.component";
import Sidebar from "./components/Dashboard/sidebar/sidebar.component";
import Topbar from "./components/Dashboard/topbar/topbar.component";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
	const [sidebarstate, setSidebarState] = useState(false);
	const toggle = () => setSidebarState(!sidebarstate);
	console.log(sidebarstate);
	return (
		<div className="container">
			<div className={sidebarstate ? `navigation active` : `navigation`}>
				<Sidebar />
			</div>
			<div className={sidebarstate ? `main active` : `main`}>
				<Topbar toggle={toggle} />
				<hr />

				<Routes>
					<Route path="/patientreg" element={<PatientRegistration />} />
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
