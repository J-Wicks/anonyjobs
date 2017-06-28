import React, { Component } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import {connect} from 'react-redux';
import { loginUser } from '../action-creators';
import { hashHistory } from 'react-router';
import Home from '../components/Home.js'

const mapStateToProps = function (state) {
	return {
		state: 'state'
		}
	}

export default connect(mapStateToProps)(Home)