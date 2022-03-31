import React, { useEffect, useState, Fragment } from "react";
import "../form-setting/forms.styles.css";
import Moment from "moment";
import OpdVisit from "./opd-visit-component";
import http from "../http-common";
import Container from "../model-component/container.component";
import PatientRegistrationAddForm from "./pat-registration-add-form.component";
import { confirm } from "react-confirm-box";

import PatientRegistrationEditForm from "./pat-registration-edit-form";

const PatientRegistration = () => {
	const [patientList, setPatientList] = useState([]);
	const fakedata = {};
	const [selectedPatient, setSelectedPatient] = useState(fakedata);
	const [serarchTerm, setSearchTerm] = useState("");
	const getPatientList = () => {
		http.get("/patreg").then((response) => {
			console.log(response.data);
			setPatientList(response.data);
		});
	};

	const patDelete = (id) => {
		http.delete(`/patreg/delete/${id}`).then((response) => {
			console.log(response.data);
			getPatientList();
		});
	};

	const onClickConfirm = async (id) => {
		const result = await confirm("Are you sure?");
		if (result) {
			console.log("You click yes!");
			patDelete(id);
			return;
		}
		console.log("You click No!");
	};

	const selectPatient = (id) => {
		http
			.get(`/patreg/${id}`)
			.then((response) => setSelectedPatient(response.data[0]));
	};

	useEffect(() => {
		getPatientList();
	}, []);

	return (
		<Fragment>
			<div className="table-box">
				<div className="custom-table">
					<div className="cardHeader">
						<h3>Patient Details</h3>
						<div className="search">
							<label>
								<input
									type="text"
									placeholder="search patient here"
									onChange={(e) => {
										setSearchTerm(e.target.value);
									}}
								/>
								<ion-icon name="search"></ion-icon>
							</label>
						</div>
						<Container
							Form={PatientRegistrationAddForm}
							triggerText="New Registration"
							btnstyle="btn"
						/>
					</div>
					<table id="opd-table">
						<thead>
							<tr>
								<th>Registration Date</th>
								<th>Patient Name</th>
								<th>Age</th>
								<th>Guardian Name</th>
								<th>Address</th>
								<th>Mobile No.</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{patientList
								.filter((pat) => {
									if (serarchTerm === "") {
										return pat;
									} else if (
										pat.patientname
											.toLowerCase()
											.includes(serarchTerm.toLowerCase()) ||
										pat.mobileno
											.toLowerCase()
											.includes(serarchTerm.toLowerCase())
									) {
										return pat;
									}
								})
								.map((pat, idx) => {
									return (
										<tr key={idx} onClick={() => selectPatient(pat.id)}>
											<td>{Moment(pat.regDate).format("D MMM yyyy hh:mma")}</td>
											<td>{pat.patientname}</td>
											<td>{pat.age}</td>
											<td>{pat.guardianname}</td>
											<td>{pat.address}</td>
											<td>{pat.mobileno}</td>

											<td>
												<Container
													Form={PatientRegistrationEditForm}
													triggerText="Edit"
													id={pat.id}
													btnstyle="btn edit"
												/>
												<ion-icon
													onClick={() => {
														onClickConfirm(pat.id);
													}}
													name="trash"
												></ion-icon>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
				<OpdVisit selectedPatent={selectedPatient} />
			</div>
		</Fragment>
	);
};

export default PatientRegistration;
