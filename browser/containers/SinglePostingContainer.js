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
      coverLetter: ''
   };
   this.coverLetterHandler = this.coverLetterHandler.bind(this)
   this.applyHandler = this.applyHandler.bind(this)
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
      coverLetterHandler={this.coverLetterHandler} />
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
  return ({

      apply: (application) => {
      dispatch(apply(application))
      }
    }

  )
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePostingContainer);
