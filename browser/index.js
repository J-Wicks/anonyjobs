import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import store from './store';


import axios from 'axios';
import AppContainer from './containers/AppContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import EmployerDashboardContainer from './containers/EmployerDashboardContainer';

import {CreateProfileContainer} from './components/users/CreateProfile';
import {fetchAllSkills} from './reducers/skill'
import {fetchCurrentUser} from './reducers/user'
import { logIn } from './reducers/user'
import {getPostings} from './reducers/posting'
import Application from './components/Application'
// import UserDashboard from './components/users/UserDashboard/'
import LoginContainer from './containers/LoginContainer'
import AllPostings from './components/AllPosting'
import singlePosting from './components/singlePosting'

const onUserEnter = (nextRouterState) => {
	/* WE STILL NEED A PROFILE MODEL AND API ROUTE*/
	const userId = nextRouterState.params.id;
	console.log('userid from onUserEnter hook is', userId)
	store.dispatch(fetchCurrentUser(userId))
	// store.dispatch(fetchCurrentProfile());
	// store.dispatch(fetchApplications());
}
const onPostingsEnter = () => {
	store.dispatch(getPostings())
}

const onAppEnter = function() {
	axios.get('/api/auth/me')
	.then( returnedUser =>{
		const user = returnedUser.data
		store.dispatch(logIn(user))
	})

  
const onCreateProfileEnter = () => {
	store.dispatch(fetchAllSkills());
}

ReactDOM.render(
	<Provider store={store}>

	<Router history = {browserHistory}>
		<Route path='/' component={AppContainer} >
			<IndexRedirect to="/home" />
			<Route path='/home' component={HomeContainer} />
			<Route path='/employerdashboard' component={EmployerDashboardContainer} />
			<Route path='/signup' component={SignUpContainer} />
			<Route path='/login' component={LoginContainer} />
			<Route path ='/application' component={Application} />
			<Route path ='/postings' component={AllPostings} onEnter={onPostingsEnter}>
				<Route path ='/:id' component={singlePosting} />
			</Route>
			<Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onUserEnter} />
			<Route path="/createProfile" />
			<Route path="/editProfile" />
			<Route path="/viewProfile" />
		</Route>
		</Router>
	</Provider>,
  document.getElementById('app') // make sure thisa is the same as the id of the div in your index.html
);
