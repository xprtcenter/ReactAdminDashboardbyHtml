import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../form-setting/forms.styles.css";
import Moment from "moment";
import OpdVisit from "./opd-visit-component";
import http from "../http-common";
import Container from "./model-component/container.component";

const PatientRegistration = () => {
	const [patientList, setPatientList] = useState([
		{
			patientname: "",
			age: "",
			address: "",
			guardianname: "",
		},
	]);
	const [patientVisitList, setPatientVisitList] = useState([]);
	const getPatient = () => {
		http.get("/patreg").then((response) => {
			console.log(response.data);
			setPatientList(response.data);
		});
	};
	const getPatientVisit = () => {
		http.get("/patvisit").then((response) => {
			console.log(response.data);
			setPatientVisitList(response.data);
		});
	};
	useEffect(() => {
		getPatient();
	}, []);

	const addPatient = () => {
		http
			.post("/patreg/create", {
				patientname: patientList.patientname,
				age: patientList.age,
				address: patientList.address,
				guardianname: patientList.guardianname,
			})
			.then(() => {
				setPatientList([
					...patientList,
					{
						patientname: patientList.patientname,
						age: patientList.age,
						address: patientList.address,
						guardianname: patientList.guardianname,
					},
				]);
			});
	};
	return (
		<>
			<div className="table-box">
				<div className="custom-table">
					<div className="cardHeader">
						<h3>Patient Details</h3>
						<div className="search">
							<label>
								<input type="text" placeholder="search patient here" />
								<ion-icon name="search"></ion-icon>
							</label>
						</div>
						<Container triggerText="New Registration" />
					</div>
					<table>
						<thead>
							<tr>
								<th>Registration Date</th>
								<th>Patient Name</th>
								<th>Age</th>
								<th>Guardian Name</th>
								<th>Address</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{patientList.map((pat, idx) => {
								return (
									<tr key={idx}>
										<td>{Moment(pat.regDate).format("D MMM yyyy hh:mma")}</td>
										<td>{pat.patientname}</td>
										<td>{pat.age}</td>
										<td>{pat.guardianname}</td>
										<td>{pat.address}</td>

										<td>
											<span className="btn edit">Edit</span>
											<span
												className="btn view"
												onClick={() => {
													getPatientVisit();
												}}
											>
												View
											</span>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<OpdVisit />
			</div>
		</>
	);
};

export default PatientRegistration;
