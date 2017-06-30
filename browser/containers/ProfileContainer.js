import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';
import { Link } from 'react-router';

class UserProfile extends React.Component {

  constructor(props){
    super(props);
  //   this.state = {
  // //     positionTitle: '',
  // //     positionDescription: '',
  // //     educationField: '',
  // //     educationLevel: '',
  // //     experienceField: '',
  // //     experienceLevel: '',
  // <h1>Welcome, {this.props.user.firstName} {this.props.user.lastName}</h1>
  // //  };
 }

  render () {
    // console.log(this.props.loggedInUser)
    return (
      <div id="entire-container">
        <button><small>Create/Edit Profile</small></button>
        <UserApplications />
        <UserOpportunities />
      </div>
    )
  }
}
//
// const mapStateToProps = state => {
//   return ({
//     user: state.userReducer.loggedInUser
//   })
// }

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


export const UserProfileContainer = connect()(UserProfile);
