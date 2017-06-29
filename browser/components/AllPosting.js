import React from 'react'
import {connect} from 'react-redux'

function AllPostings({allPostings}) {
  return (
    <div>
      {
        allPostings && allPostings.map(posting => {
          return (<h2 key ={posting.id}>{posting.name}</h2>)
        })
      }
    </div>
  )
}

const mapState = state => {
  return {
    allPostings: state.postings
  }
}

export default connect(mapState)(AllPostings)
