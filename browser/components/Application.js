import React, {Component} from 'react'
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
class Application extends Component  {


  constructor(props) {
    super(props)
    this.state = {
      currentSummary: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      currentSummary: event.target.value
    })
  }
  render() {
    return (
      <div className="application">
        <h2>Application</h2>
          <form onSubmit={handleSubmit}>
            <label>Cover Letter: </label>
            <input
              className="form-control"
              name="coverLetter"
              type="textarea"
              wrap="hard"
              value={this.state.currentSummary || this.props.summary}
              onChange={this.handleChange}
              style={{height: '300px', width: '700px'}} />
            <label>Make sure your profile information is up to date before submitting your application.</label>
            <div>
              <button name="postingId" className="btn btn-default" value={this.selectedPosting} type="submit">Submit Application</button>
            </div>
          </form>
        </div>
    )
    }
  }

const mapState = state => {
  return {
    selectedPosting: state.selectedPosting,
    summary: state.userReducer.currentUser.summary
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit: function(event) {
      dispatch(applyAndSetPosting(event.target.coverLetter.value, event.target.postingId.value, ownProps.params.userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Application)
