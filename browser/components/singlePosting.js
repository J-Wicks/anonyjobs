import React from 'react'
import {connect} from 'react-redux'

export default function SinglePosting(props) {

  return (
    <div className='single-posting col-sm-8'>
    
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
	    <button onClick={props.applyHandler}className='btn btn-success'> Apply Now! </button>
	</div>
  )
}
