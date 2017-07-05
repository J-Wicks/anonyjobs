import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { loginUser, modUser } from '../action-creators';
import { browserHistory } from 'react-router';
import Login from '../components/Login.js'


class LoginContainer extends Component{
	constructor(props){
		super(props)
		this.state ={
			email:'',
			password:'',
		}
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.loginUser = this.loginUser.bind(this)
	}

	handleEmail (event) {
		const value = event.target.value;
		this.setState({
			email: value
		})
	}

	handlePassword (event) {
		const value = event.target.value;
		this.setState({
			password: value
		})
	}

	loginUser () {
		event.preventDefault()
		this.props.loginUser({email: this.state.email, password: this.state.password})
		browserHistory.push('/home');
	}

	render () {
		return(
		<div>
		 <Login
		 handleEmail={this.handleEmail}
		 handlePassword={this.handlePassword}
		 loginUser={this.loginUser}/>
		</div>
		)
	}

}
const mapStateToProps = function (state) {
	return {
		state: 'state'
		}
	}

const mapDispatchToProps = function (dispatch){
	return{
		loginUser: (user) => {
			axios.post('/api/login/',{
				email:user.email,
				password:user.password
			})
			.then((result) => {
				return dispatch(loginUser(result.data))
			})
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
