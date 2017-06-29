import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import { Navbar } from '../components/Navbar';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';
import { Link } from 'react-router';

class UserDashboard extends React.Component {

  constructor(props){
    super(props);
  //   this.state = {
  //     positionTitle: '',
  //     positionDescription: '',
  //     educationField: '',
  //     educationLevel: '',
  //     experienceField: '',
  //     experienceLevel: '',
  //  };
 }

  render () {
    return (
      <div id="entire-container">
        <h1>Welcome, {this.props.user.firstName} {this.props.user.lastName}</h1>
        <button><small>Create/Edit Profile</small></button>
        <UserApplications />
        <UserOpportunities />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    user: state.userReducer.currentUser
  })
}

// const mapDispatchToProps = dispatch => {
//   return ({
//
//       addUser: (body) => {
//       dispatch(createAndSetUser(body))
//       }
//     }
//
//   )
// }


export const UserDashboardContainer = connect(mapStateToProps, null)(UserDashboard);
