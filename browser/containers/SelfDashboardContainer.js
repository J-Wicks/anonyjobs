import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import { Navbar } from '../components/Navbar';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';
import { Link } from 'react-router';
import UserDashboard from '../components/users/UserDashboard'

const mapStateToProps = state => {
  return ({
    user: state.userReducer.currentUser
  })
}

export const SelfDashboardContainer = connect(mapStateToProps, null)(UserDashboard);
