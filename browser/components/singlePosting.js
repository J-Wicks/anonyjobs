import React from 'react'
import {connect} from 'react-redux'

export default function SinglePosting(props) {

  return (
  	<div>
	    <div className='single-posting col-sm-6'>
		    <strong className='label'>Title </strong>
		    <p>{props.posting && props.posting.positionTitle}</p>
		    <strong className='label'> Company </strong>
		    <p> Hooli </p>
		    <strong className='label'> Description </strong>
		    <p>{props.posting && props.posting.positionDescription}</p>
		    <strong className='label'> Education Required </strong>
		    <p>{props.posting && `${props.posting.educationLevel} ${props.posting.educationField}`}</p>
		    <strong className='label'>Experience Required </strong>
		    <p>{props.posting && ` ${props.posting.experienceField} ${props.posting.experienceLevel}+ years`}</p>
		    <p className='label'> Your Cover Letter </p>
		    <br/>
		    <textarea type='textarea' value={props.coverLetter} onChange={props.coverLetterHandler}/>
		    <br/>
		    <div>
		    <button onClick={props.applyHandler}className='btn btn-success'> Apply Now! </button>
		    </div>
		    <div>
		    <button onClick={props.testHandler}className='btn btn-success'> Test </button>
		    </div>
		</div>
		<div className='analysis col-sm-4'>

		    	<div>
		    	<p className='label'>Prediction:</p>
		    	<p>{`Gender: ${props.predictedGender} ${props.genderWidth}`}</p> 
		    	<span className='fullbar'> </span> 
		    	<span id='genderbar' className={`confidence ${props.genderWidth > 55? 'danger' : null}`} style={{width: props.genderWidth}}> </span> 
		    	<p>{` Orientation: ${props.predictedOrientation} ${props.orientationWidth}`} </p>
		    	<span className='fullbar'> </span>
		    	<span id='orientationbar' className={`confidence ${props.orientationWidth == '64%'? 'danger' : null}`}  style={{width: props.orientationWidth}}> </span> 
		    	<p>{` Race: ${props.predictedRace} ${props.raceWidth}`}</p>
		    	<span className='fullbar'> </span>
		    	<span id='racebar' className={`confidence ${props.raceWidth == '68%'? 'caution' : null}`} style={{width: props.raceWidth}}> </span> 
		    	</div>
		    
		</div>
	</div>
  )
}
