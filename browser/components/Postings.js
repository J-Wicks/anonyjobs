import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

function Postings(props) {
  return (
    <div>
      <div className='col-sm-12 postings-div'>
      <h1 className="job-posting-header">Open Postings</h1>
      <ul className='list-group'>
      {	props.postings &&
        props.postings.length ?
        props.postings.map( posting => {
          return (
            <div key = {posting.id}>
            <li key={posting.id} className ='list-group-item justifycontent-between'>
              <Link to={`/postings/${posting.id}`}>
              <p className='positionTitle'>{posting.positionTitle} </p>
              </Link>
              <span className='positionDescription'>{posting.positionDescription} </span>
            </li>
            </div>
          )})
          : null
      }
      </ul>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    postings: state.postingReducer.postings
  }
}

export default connect(mapState)(Postings)
