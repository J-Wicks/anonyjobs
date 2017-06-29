import React from 'react'
import {connect} from 'react-redux'
export default function Application()  {

  return (
    <div>
      <h2>Application</h2>
        <form>
          <label>Cover Letter</label>
          <input type="text" />
          <label>Make sure your profile information is up to date before submitting your application.</label>
          <button type="submit">Submit Application</button>
        </form>
      </div>
  )
}

const mapState = state => {
  return {
    selectedPosting: state.selectedPosting
    // currentUser: state.currentUser
  }
}
