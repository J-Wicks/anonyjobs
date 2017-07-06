import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import NewPosting from '../components/NewPosting';
import {connect} from 'react-redux';
import {modPostings} from '../reducers/posting';
import { logoutUser, receiveProducts} from '../action-creators'

class NewPostingContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			positionTitle: '',
			positionDescription: '',
			educationField: '',
			educationLevel: '',
			experienceField: '',
			experienceLevel: ''
		}
		this.handleJobTitle = this.handleJobTitle.bind(this);
		this.handleJobDescription = this.handleJobDescription.bind(this);
		this.handleEducationField = this.handleEducationField.bind(this);
		this.handleEducationLevel = this.handleEducationLevel.bind(this);
		this.handleExperienceField = this.handleExperienceField.bind(this);
		this.handleExperienceLevel = this.handleExperienceLevel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleApps = this.handleApps.bind(this);
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.addPosting({
				positionTitle: this.state.positionTitle,
				positionDescription: this.state.positionDescription,
				educationLevel: this.state.educationLevel,
				educationField: this.state.educationField,
				experienceLevel: this.state.experienceLevel,
				experienceField: this.state.experienceField,
				showApps: false
			})
	}

	handleJobTitle (event) {
		this.setState({
			positionTitle: event.target.value
		})
	}

	handleJobDescription (event) {
		this.setState({
			positionDescription: event.target.value
		})
	}

	handleEducationField (event){
		this.setState({
			educationField: event.target.value
		})
	}

	handleEducationLevel (event) {
		this.setState({
			educationLevel: event.target.value
		})
	}

	handleExperienceField (event){

		this.setState({
			experienceField: event.target.value
		})
	}

	handleExperienceLevel (event) {

		this.setState({
			experienceLevel: event.target.value
		})
	}
	handleApps () {
		this.setState({
			showApps: !this.state.showApps
		})
	}
	render() {
		return(
		<div>
			<NewPosting
			handleJobTitle={this.handleJobTitle}
			handleJobDescription={this.handleJobDescription}
			handleEducationField={this.handleEducationField}
			handleEducationLevel={this.handleEducationLevel}
			handleExperienceField={this.handleExperienceField}
			handleExperienceLevel={this.handleExperienceLevel}
			submitHandler={this.handleSubmit}
			postings={this.props.postings}
			applications={this.props.applications}
			handleApps={this.handleApps}
			showApps={this.state.showApps}
			/>			
      	</div>
			)
	}
}

const mapStateToProps = function (state) {
	return {
		postings: state.postingReducer.postings,
		applications: state.applicationReducer.allApplications
		}
	}

const mapDispatchToProps = function (dispatch) {
	return {
		addPosting: (user) => {
			axios.post('/api/postings',{
				positionTitle: user.positionTitle,
				positionDescription: user.positionDescription,
				educationLevel: user.educationLevel,
				educationField: user.educationField,
				experienceLevel: user.experienceLevel,
				experienceField: user.experienceField
			})
			.then((result) => {
				console.log(result.data)
				return dispatch(modPostings(result.data))

			}).catch(console.log)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostingContainer)