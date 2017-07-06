import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {
	const array99 = [];

	for(var i = 0; i < 99; i++){
		array99.push(i)
	}

	const postingsWithApps = props.postings.map( posting =>{
		let matchingApplications = props.applications.filter(application => {
			return application.postingId === posting.id
		})
		return Object.assign(posting, {applications: matchingApplications})
	})


	return (
		<div>
			<div className='col-sm-6 postings-div'>
			<h1 className="job-posting-header">Your Open Postings</h1>
			<ul className='list-group'>
			{	props.postings &&
				props.postings.map( posting => {
					return (
						<div>
						<li key={posting.id} className ='list-group-item justifycontent-between'>
							<p className='positionTitle'>{posting.positionTitle} </p>
							<a href='#' className=' badge badge-default badge-pill' onClick={props.handleApps}>
							{posting.applications.length}
							</a>
							<span className='positionDescription'>{posting.positionDescription} </span>
						</li>

		                {	props.showApps &&
	                    	posting.applications.map(application =>{
	                    		let experiences = application.User.experiences
	                    		let educations = application.User.education
	                    		return (
									<li className ='list-group-item justifycontent-between' key={application.id}>
									<div className='education'>
									<p className='label'>Education</p>

										{
											educations.map(education =>{
												return (
													<div>
													<p className='schoolName'>{education.schoolName} </p>
													<p> {`${education.degreeName} ${education.degree}`}</p>
													<p> {`Year Graduated: ${education.yearGraduated}`}</p>
													<p> {`GPA: ${education.finalGPA}`} </p>
													</div>
													)
											})
										}

									</div>
									<div className='experience'>
									<p className='label'>Experience</p>

										{
											experiences.map(experience =>{
												return (
													<div>
													<p>{experience.role} </p>
													<p> {experience.companyName}</p>
													<p> {`${experience.startYear} - ${experience.endYear}`}</p>
													<p> {experience.responsibilities} </p>
													</div>
													)
											})
										}

									</div>
									<div className='coverLetter'>
										<p className='label'>Cover Letter</p>
										<p>{application.coverLetter } </p>
									</div>
									</li>
	                    			)
	                    	})
		                }
		                </div>
						)
				})
			}
			</ul>
			</div>

			<div className='col-sm-6'>
			<form onSubmit= {props.submitHandler} className="posting-form">
				<h1 className="job-posting-header">Add a Job Posting</h1>

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
		</div>
		)
}
