import React, { Fragment } from "react";
import "./opd-visit-styles.css";
import "../form-setting/forms.styles.css";
import { Link } from "react-router-dom";
import PatientRegistrationForm from "./pat-registration-form.component";

const OpdVisit = () => {
	return (
		<Fragment>
			<div className="custom-table">
				<div className="cardHeader">
					<h3>Patient OPD visit</h3>
					<Link to="/all" className="btn">
						Add visit
					</Link>
				</div>
				<div className="pat-card">
					<div className="imgBx">
						<img src="img/img8.jpg" alt="" />
					</div>
					<div className="nameBox">
						<h4>Patient uID :</h4>
						<span>1221454GHGHGS45</span>
						<h4>Patient Name :</h4>
						<span>Rajeev Sharma</span>
						<h4>Gaurdian Name :</h4>
						<span>Anuradha Sharma</span>
						<h4>Age :</h4>
						<span>32 years</span>
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
						<tr>
							<td>05 March 2022</td>
							<td>Dr Deepak Pradhan</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>03 Feb 2022</td>
							<td>Dr Sanjeev Saxena</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>12 March 2022</td>
							<td>Dr Rajeev Gupta</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>01 January 2022</td>
							<td>Dr Deepak Pradhan</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>05 March 2022</td>
							<td>Dr Deepak Pradhan</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>03 Feb 2022</td>
							<td>Dr Sanjeev Saxena</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>12 March 2022</td>
							<td>Dr Rajeev Gupta</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
						<tr>
							<td>01 January 2022</td>
							<td>Dr Deepak Pradhan</td>
							<td>
								<span className="btn print">Print</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default OpdVisit;
