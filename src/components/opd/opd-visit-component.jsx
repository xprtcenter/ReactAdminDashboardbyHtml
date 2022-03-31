import React, { Fragment, useState, useEffect } from "react";
import "./opd-visit-styles.css";
import "../form-setting/forms.styles.css";
import Container from "../model-component/container.component";
import PatientVisitAddForm from "./pat-visit-add-form.component";
import http from "../http-common";
import Moment from "moment";

const OpdVisit = (selectedPatent) => {
	console.log("Patient from OPDVisit", selectedPatent);
	const [data, setData] = useState({});
	const [patientVisitList, setPatientVisitList] = useState([]);

	console.log("Patient from data", data);

	useEffect(() => {
		setData(selectedPatent.selectedPatent);
		getPatientVisitList(data.id);
	}, [selectedPatent, data]);

	const getPatientVisitList = (id) => {
		http.get(`/patvisit/${id}`).then((response) => {
			console.log("patient visit details recive from server", response.data);
			setPatientVisitList(response.data);
		});
	};

	return (
		<Fragment>
			<div className="custom-table">
				<div className="cardHeader">
					<h3>Patient OPD visit</h3>
					<Container
						Form={PatientVisitAddForm}
						triggerText="Add Visit"
						btnstyle="btn add"
						id={data}
					/>
				</div>
				<div className="pat-card">
					<div className="imgBx">
						<img src="img/img8.jpg" alt="" />
					</div>
					<div className="nameBox">
						<h4>Patient Name :</h4>
						<span>{data.patientname}</span>
						<h4>Gaurdian Name :</h4>
						<span>{data.guardianname}</span>
						<h4>Age :</h4>
						<span>{data.age}</span>
					</div>
				</div>

				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Doctor Name</th>
							<th>Prescription</th>
						</tr>
					</thead>
					<tbody>
						{patientVisitList.map((visit) => {
							return (
								<tr key={visit.id}>
									<td>{Moment(visit.visitDate).format("D MMM yyyy hh:mma")}</td>
									<td>{visit.doc_name}</td>
									<td>
										<span className="btn print">Print</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default OpdVisit;
