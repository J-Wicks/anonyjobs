import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {

	// const setERUser = function(){
	// 	console.log('employer')
	// }

	return(
		<div id='home' className='center'>
		<h1> Welcome to Anonyjob </h1>
		<h3> What you need, when you need it </h3>
		<Link to='/signup'>
		 <button className ="btn btn-info"onClick={props.setERUser}> Employers Sign Up Here </button>
		 </Link>
		<br />
		<a href="/api/auth/linkedin"><button className="btn btn-primary fa fa-linkedin-square" type="submit"> Login with LinkedIn</button></a>
		</div>
		)
}