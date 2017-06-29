import React from 'react';
import { Link } from 'react-router';

export default function employerLogin (props) {


return (
	<div className='col-xs-5 signup'>
			<h1 className="fancy-type form-title">Looking for a Job?</h1>
	  <h1 className="form-subtitle">Sign Up</h1>
			<form onSubmit= {props.signUpUser} >
		<div className="signup-names">
				<p>Email</p>
					<input id="a1" type="text" className="form-control col-md-2" onChange={props.handleEmail} aria-describedby="basic-addon1" />
				<p>Password</p>
					<input id="a2" type="text" className="form-control col-md-2" onChange={props.handlePassword} aria-describedby="basic-addon1" />

				<span className="input-group-btn">
				   	<button className="btn btn-default login-btn" type="submit">Sign Up</button>
			    </span>
		</div>
		    </form>
	</div>
	)

}