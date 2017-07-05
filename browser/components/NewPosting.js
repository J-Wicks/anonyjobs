import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {
	const array99 = [];

	for(var i = 0; i < 99; i++){
		array99.push(i)
	}


	return(
		<div>
		<form onSubmit= {props.submitHandler} className="posting-form">
			<h1 id="job-posting-header">Add a Job Posting</h1>

			Job Title
			<input type='text' value={props.jobTitle} onChange={props.handleJobTitle} className="form-control"/>
			Job Description
			<textarea value={props.jobDescription} onChange={props.handleJobDescription} className="form-control" rows="15"></textarea>
			Education Level
			<select onChange = {props.handleEducationLevel} className="form-control">
			<option value={'Some High School'}> Some High School </option>
			<option value={'High School Diploma or Equivalent'}> High School Diploma or Equivalent</option>
			<option value={'Some College'}> Some College </option>
			<option value={'B.A.'}> B.A. </option>
			<option value={'B.S.'}> B.S. </option>
			<option value={'M.S.'}> M.S. </option>
			<option value={'Ph.D.'}> Ph.D. </option>
			</select>

			Education Field
			<select onChange={props.handleEducationField} className="form-control">
			<option value='Computer Science'> Computer Science </option>
			<option value='Education'> Education </option>
			<option value='Physics'> Physics </option>
			<option value='Media Studies'> Media Studies </option>
			</select>

			Experience Field
			<select onChange={props.handleExperienceField} className="form-control">
				<option value='Computer Science'> Computer Science </option>
				<option value='Education'> Education </option>
				<option value='Physics'> Physics </option>
			</select>

			Experience Level
			<select onChange={props.handleExperienceLevel} className="form-control">
			{
				array99.map( number => {
					return <option value={number} key={number}> {number} </option>
				})
			}

			</select>
			<button className="btn btn-default login-btn" type="submit">Submit</button>

		</form>
		</div>
		)
}
