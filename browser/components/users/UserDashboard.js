import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
// import { Navbar } from '../components/Navbar';
// import UserOpportunities from '../components/users/UserOpportunities';
// import UserApplications from '../components/users/UserApplications';
// import NavBar from '../components/Navbar';
import { Link } from 'react-router';

export default class UserDashboard extends React.Component{

  constructor(props){
    super(props);
 }

  render () {
    return (
      <div id="entire-container">
        <h1>Welcome, {this.props.user.firstName} {this.props.user.lastName}</h1>
        <div>
          <h1>Applications</h1>
        </div>
        <div>
          <h1>Saved Job Postings</h1>
        </div>

        <div>
          <Link to="viewProfile"><h2>View Profile</h2></Link>
        </div>
      </div>
    )
  }
}
