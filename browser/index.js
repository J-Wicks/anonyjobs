import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router'
import store from './store';
import '../index.scss'

import axios from 'axios';
import AppContainer from './containers/AppContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import EmployerDashboardContainer from './containers/EmployerDashboardContainer';
import SinglePostingContainer from './containers/SinglePostingContainer'
import {UserDashboardContainer} from './containers/UserDashboardContainer'
import {CreateProfileContainer} from './containers/CreateProfile';
import CreateProfile from './containers/CreateProfile';
import {fetchAllSkills} from './reducers/skill'
import {fetchRelevantUser} from './reducers/user'
import { logIn } from './reducers/user'
import {getPostings, getPosting} from './reducers/posting'
import Application from './components/Application'
import NewPosting from './components/NewPosting'
// import UserDashboard from './components/users/UserDashboard/'
import LoginContainer from './containers/LoginContainer'
import AllPostings from './components/AllPosting'
import {UserProfileContainer} from './containers/ProfileContainer'

const onUserEnter = (nextRouterState) => {
	/* WE STILL NEED A PROFILE MODEL AND API ROUTE*/
	const userId = nextRouterState.params.id;
	store.dispatch(fetchRelevantUser(userId))
	// store.dispatch(fetchCurrentProfile());
	// store.dispatch(fetchApplications());
}

const onPostingsEnter = (nextRouterState) => {
	store.dispatch(getPostings())
}

const onPostingEnter = (nextRouterState) => {
	console.log('going to posting', nextRouterState.params.id)
	store.dispatch(getPosting(nextRouterState.params.id))
}

const onAppEnter = function() {
	axios.get('/api/auth/me')
	.then( returnedUser =>{
		const user = returnedUser.data
		store.dispatch(logIn(user))
	})
}

const onCreateProfileEnter = () => {
	store.dispatch(fetchAllSkills());
}

ReactDOM.render(
	<Provider store={store}>
	<Router history = {hashHistory}>
		<Route path='/' component={AppContainer} onEnter={onAppEnter}>
			<Route path='/home' component={HomeContainer} />
			<Route path ='/newposting' component={NewPosting} />
			<Route path='/employerdashboard' component={EmployerDashboardContainer} />
			<Route path='/signup' component={SignUpContainer} />
			<Route path='/login' component={LoginContainer} />
			<Route path ='/application' component={Application} />
			<Route path="/createProfile" component={CreateProfile} onEnter={onCreateProfileEnter} />
			<Route path="/editProfile" />
			<Route path="/viewProfile" component={UserProfileContainer} />
			<Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onUserEnter} />
			<Route path ='/postings/:id' component={SinglePostingContainer} onEnter={onPostingEnter}/>
			<Route path ='/postings' component={AllPostings} onEnter={onPostingsEnter}>
				<Route path ='/:id' component={singlePosting} />
			</Route>


		</Route>
	</Router>
	</Provider>,
  document.getElementById('app')) // make sure thisa is the same as the id of the div in your index.html
