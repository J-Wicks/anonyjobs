import React, { Component } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import {connect} from 'react-redux';
import { loginUser } from '../action-creators';
import { hashHistory } from 'react-router';
import { modUser } from '../action-creators';
import Home from '../components/Home.js'

const mapStateToProps = function (state) {
	return {
		currentUser: state.userReducer.currentUser
		}
	}

const mapDispatchToProps = function (dispatch){
	return{
		setERUser: ()=>{
			dispatch(modUser('employer'))
		},
		setAppUser: ()=>{
			dispatch(modUser('applicant'))
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
