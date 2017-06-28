import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {

	// const setERUser = function(){
	// 	console.log('employer')
	// }

	return(
		<div>
		<h1> Welcome to Anonyjob </h1>
		<h3> The most well named website on the internet </h3>
		<Link to='/signup'>
		 <button onClick={props.setERUser}> Employers Login Here </button>
		 </Link>
		<br />
		<Link to='/signup'>
		<button onClick={props.setAppUser}> Applicants Login Here </button>
		</Link>
		</div>
		)
}