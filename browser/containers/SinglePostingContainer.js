import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {apply}from '../reducers/application'
import { hashHistory } from 'react-router';
import Posting from '../components/singlePosting'

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


export default connect(mapStateToProps, mapDispatchToProps)(Posting);
