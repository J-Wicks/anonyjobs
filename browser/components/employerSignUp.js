import React from 'react';
import { Link } from 'react-router';

export default function employerLogin (props) {


return (
	<div className='center'>
			<h1 className="fancy-type form-title">Looking to Hire?</h1>
	  <h1 className="form-subtitle">Sign Up</h1>
			<form onSubmit= {props.signUpEmployer} >
	  <div className="signup-names">
		<p>Company</p>
			<input id="a1" type="text" className="form-control col-md-2" onChange={props.handleCompany} aria-describedby="basic-addon1" />
	  </div>
	  <div className="signup-names" id="last-name">
				<p>Industry</p>
					<input id="a2" type="text" className="form-control col-md-2" onChange={props.handleIndustry} aria-describedby="basic-addon1" />
	  </div>
				<p>HR Email</p>
					<input id="a1" type="text" className="form-control col-md-2" onChange={props.handleEmail} aria-describedby="basic-addon1" />
				<p>Password</p>
					<input id="a2" type="text" className="form-control col-md-2" onChange={props.handlePassword} aria-describedby="basic-addon1" />

				<span className="input-group-btn">
				   	<button className="btn btn-default login-btn" type="submit">Sign Up</button>
			    </span>
		    </form>
	</div>
	)

}