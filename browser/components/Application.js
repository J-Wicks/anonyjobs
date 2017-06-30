import React from 'react'
import {connect} from 'react-redux'
import {applyAndSetPosting} from '../reducers/application'
import axios from 'axios'


function handleSubmit(event) {
  axios.post('/api/applications', {coverLetter: event.target.coverLetter.value})
  .then(res => res.data)
  .then(something => {
    return something
  })
}
export default function Application({selectedPosting})  {
  return (
    <div>
      <h2>Application</h2>
        <form on submit={handleSubmit}>
          <label>Cover Letter: </label>
          <input name="coverLetter" type="textarea" />
          <label>Make sure your profile information is up to date before submitting your application.</label>
          <button name="postingId" value={selectedPosting} type="submit">Submit Application</button>
        </form>
      </div>
  )
}
// const mapState = state => {
//   return {
//     selectedPosting: state.selectedPosting
//   }
// }
//
// const mapDispatch = (dispatch, ownProps) => {
//   return {
//     handleSubmit: function(event) {
//       dispatch(applyAndSetPosting(event.target.coverLetter.value, event.target.postingId.value, ownProps.params.userId))
//     }
//   }
// }
//
// export default connect(mapState, mapDispatch)(Application)
