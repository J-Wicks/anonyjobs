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
 }

  render () {
    return (
      <div id="entire-container">
        <h1>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h1>
        {this.props.currentUser.headline ?
          <h2>{this.props.currentUser.headline}</h2> : null

        }
        {this.props.currentUser.location ?
          <h2>{this.props.currentUser.location}</h2> : null

        }
        {this.props.currentUser.education ?
      (

        <div>
        <h2>Education</h2>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Subject</th>
              <th>Degree</th>
              <th>Year of Graudation</th>
              <th>Final GPA</th>
            </tr>
          </thead>
        <tbody>
        {
          this.props.currentUser.education.map((education, index) => { return (
          <tr key={index}>
            <th>{education.schoolName}</th>
            <th>{education.degreeName}</th>
            <th>{education.degree}</th>
            <th>{education.yearGraduated}</th>
            <th>{education.finalGPA}</th>
          </tr>
          )
        }
        )}

        </tbody>
        </table>
        </div>
  ) : null}


  {this.props.currentUser.experiences ?
    (

      <div>
      <h2>Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Start</th>
            <th>End</th>
            <th>Responsibilities</th>
          </tr>
        </thead>
      <tbody>
      {
        this.props.currentUser.experiences.map((experience, index) => { return (
        <tr key={index}>
          <th>{experience.companyName}</th>
          <th>{experience.role}</th>
          <th>{experience.startYear}</th>
          <th>{experience.endYear}</th>
          <th>{experience.responsibilities}</th>
        </tr>
        )
      }
      )}

      </tbody>
      </table>
      </div>
    ) : null}
        <div>
          <Link to="createProfile"><h2>Edit Profile</h2></Link>
          <Link to={`userdashboard/${this.props.currentUser.id}`}><h2>View Dashboard</h2></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.userReducer.currentUser
  })
}



export const UserProfileContainer = connect(mapStateToProps)(UserProfile);
