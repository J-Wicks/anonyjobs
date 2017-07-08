import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {apply}from '../reducers/application'
import { hashHistory } from 'react-router';
import Posting from '../components/singlePosting'

class SinglePostingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      coverLetter: '',
      gender: '',
      orientation: '',
      race: ''
   };
   this.coverLetterHandler = this.coverLetterHandler.bind(this)
   this.applyHandler = this.applyHandler.bind(this)
   this.testHandler = this.testHandler.bind(this)
  }

  testHandler(){

    axios.post('/api/applications/test', {coverLetter: this.state.coverLetter})
    .then( result => result.data)
    .then(([gender, orientation, race]) => {
      this.setState({
        gender,
        orientation,
        race
      })
      console.log(this.state)
    })

  }

  applyHandler () {

    this.props.apply({
      postingId: this.props.posting.id,
      userId: this.props.user.id,
      coverLetter: this.state.coverLetter
    })
  }

  coverLetterHandler (event) {
    console.log(event.target.value)
    this.setState({
      coverLetter: event.target.value
    })
  }

  render () {
    return (
      <div id="entire-container">
      <Posting 
      posting={this.props.posting} 
      applyHandler={this.applyHandler} 
      coverLetter={this.state.coverLetter || this.props.user.summary} 
      testHandler={this.testHandler}
      coverLetterHandler={this.coverLetterHandler}
      predictedGender={this.state.gender}
      predictedRace={this.state.race}
      predictedOrientation={this.state.orientation} />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    posting: state.postingReducer.selectedPosting,
    user: state.userReducer.currentUser,
  })
}

const mapDispatchToProps = dispatch => {
  return {
      apply: (application) => {
      
      dispatch(apply(application))
      },

      getDemos: (coverLetter) =>{
        axios.post('/api/applications/test', {coverLetter: coverLetter})
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePostingContainer);
