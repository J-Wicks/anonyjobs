import React from 'react';
import { Link } from 'react-router';

export default function Login (props) {


  return (
  	<div className='login-container'>
    	<div className="row">
			<div className='col-xs-5 signup'>
			<h1 className="fancy-type form-title">Employer Log In</h1>

			<form onSubmit= {props.loginUser} >
	          <div className="signup-names">
	  			<p>Email</p>
	  			<input id="a1" type="text" className="form-control col-md-2" onChange={props.handleEmail} aria-describedby="basic-addon1" />
	          </div>
	          <div className="signup-names" id="last-name">
				<p>Password</p>
				<input id="a2" type="text" className="form-control col-md-2" onChange={props.handlePassword} aria-describedby="basic-addon1" />
	          </div>

				<span className="input-group-btn">
				   	<button className="btn btn-default login-btn" type="submit">Sign Up</button>
			    </span>
		    </form>
			</div>
		</div>
	</div>
  	)
}