import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';
import { Link } from 'react-router';
import UserProfile from '../components/users/UserProfile'


const mapStateToProps = state => {
  return ({
    user: state.userReducer.currentUser
  })
}



export default connect(mapStateToProps)(UserProfile);
