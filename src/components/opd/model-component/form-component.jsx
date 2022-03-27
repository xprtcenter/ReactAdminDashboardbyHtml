import React from "react";
export const Form = ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<h3 className="form-title">Patient Registration Form</h3>
			<div className="form-group">
				<label htmlFor="regDate">Registration Date</label>
				<input type="date" className="form-control" id="regDate" />
			</div>
			<div className="form-group">
				<label htmlFor="patientname">Patient Name</label>
				<input className="form-control" id="patientname" />
			</div>
			<div className="form-group">
				<label htmlFor="age">Age</label>
				<input className="form-control" type="number" id="age" />
			</div>
			<div className="form-group">
				<label htmlFor="guardianname">Guardian Name</label>
				<input className="form-control" id="guardianname" />
			</div>
			<div className="form-group">
				<label htmlFor="address">Address</label>
				<input type="text" className="form-control" id="address" />
			</div>
			<div className="form-group">
				<button className="form-control btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};
export default Form;
