import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import { Navbar } from '../components/Navbar';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';

export default class UserDashboardContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      positionTitle: '',
      positionDescription: '',
      educationField: '',
      educationLevel: '',
      experienceField: '',
      experienceLevel: '',
   };
 }

  render () {
    return (
      <div id="entire-container">
        <button><small>Create/Edit Profile</small></button>
        <UserApplications />
        <UserOpportunities />
      </div>
    )
  }
}
