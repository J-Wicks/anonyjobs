import React, { Component } from 'react';
import axios from 'axios';
import EmployerSignUp from '../components/employerSignUp';
import ApplicantSignUp from '../components/ApplicantSignUp';
import {connect} from 'react-redux';
import { loginUser } from '../action-creators';
import { browserHistory } from 'react-router'


class SignUpContainer extends Component{
	constructor(props){
		super(props)
		this.state ={
			email:'',
			password:'',
			firstName:'',
			lastName:'',
			companyName:'',
			industry:''
		}
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.signUpUser = this.signUpUser.bind(this);
		this.signUpEmployer = this.signUpEmployer.bind(this);
		this.handleCompany = this.handleCompany.bind(this);
		this.handleIndustry = this.handleIndustry.bind(this);
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

	handleFirst (event) {
		const value = event.target.value;
		this.setState({
			firstName: value
		})
	}

	handleLast (event) {
		const value = event.target.value;
		this.setState({
			lastName: value
		})
	}

	handleCompany (event) {
		const value = event.target.value
		this.setState({
			companyName: value
		})
	}

	handleIndustry (event) {
		const value = event.target.value
		this.setState({
			industry: value
		})
	}

	signUpUser (event) {
		event.preventDefault()
		this.props.signUpUser({email: this.state.email, password: this.state.password})
		browserHistory.push('/home')
	}

	signUpEmployer (event) {
		event.preventDefault()
		this.props.signUpEmployer({HRemail: this.state.email, companyName: this.state.companyName, industry: this.state.industry, password: this.state.password})
		browserHistory.push('/home')
	}

	render () {
		return(
		<div>

		<span> {this.props.userType} </span>
			<EmployerSignUp
			handleCompany={this.handleCompany}
			handleIndustry={this.handleIndustry}
			signUpEmployer={this.signUpEmployer}
			handleEmail={this.handleEmail}
			handlePassword={this.handlePassword} />

			<ApplicantSignUp
			signUpUser={this.signUpUser}
			handleEmail={this.handleEmail}
			handlePassword={this.handlePassword} />


		</div>
		)
	}

}


const mapStateToProps = function (state) {
	return {
		userType: state.userType
		}
	}


const mapDispatchToProps = function (dispatch) {
	return {

		googleLogin: (user) => {
			hashHistory.push('/google')
			axios.get('/google')
			.then((result) => {
				console.log(result);
				//return dispatch(loginUser(result.data))
			})
		},
		signUpUser: (user) => {
			axios.post('/api/login/signup',{
				email:user.email,
				password:user.password
			})
			.then((result) => {

				return dispatch(loginUser(result.data))
			})
		},
		signUpEmployer: (user) => {
			axios.post('/api/login/signup/employer',{
				HRemail:user.HRemail,
				password:user.password,
				companyName: user.companyName,
				industry: user.industry
			})
			.then((result) => {
				return dispatch(loginUser(result.data))
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
