import React from 'react'
import {connect} from 'react-redux'

export default function SinglePosting(props) {

	let applyHandler = function () {
		console.log('in apply handler')
		props.apply({
			postingId: props.posting.id,
			userId: props.user.id,
			coverLetter: props.user.summary
		})
	}
  return (
    <div>
	    <strong>Title </strong>
	    <p>{props.posting && props.posting.positionTitle}</p>
	    <strong> Company </strong>
	    <p>Placeholder for company</p>
	    <strong>Description </strong>
	    <p>{props.posting && props.posting.positionDescription}</p>
	    <strong> Education Required </strong>
	    <p>{ props.posting && props.posting.educationField}</p>
	    <p>{props.posting && `${props.posting.educationLevel}`}</p>
	    <strong>Experience Required </strong>
	    <p>{props.posting && props.posting.experienceField}</p>
	    <p>{props.posting && `${props.posting.experienceLevel}+ years`}</p>
	    <strong> Your Cover Letter </strong>
	    <textarea type='textarea' value={props.user.summary} />
	    <button onClick={applyHandler}className='btn btn-success'> Apply Now! </button>
	</div>
  )
}
