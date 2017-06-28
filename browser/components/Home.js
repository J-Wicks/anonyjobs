import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {

	return(
		<div>
		<h1> Welcome to Anonyjob </h1>
		<h3> The most well named website on the internet </h3>
		<Link to='/employerdashboard'> Employers Login Here </Link>
		<br />
		<Link to='#'>Applicants Login Here</Link>
		</div>
		)
}