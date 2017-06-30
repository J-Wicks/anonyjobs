import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router'
import store from './store';


import axios from 'axios';
import AppContainer from './containers/AppContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import EmployerDashboardContainer from './containers/EmployerDashboardContainer';
import {UserDashboardContainer} from './containers/UserDashboardContainer';
import {fetchCurrentUser} from './reducers/user';
import Application from './components/Application';
// import UserDashboard from './components/users/UserDashboard/'
import LoginContainer from './containers/LoginContainer';
import {CreateProfileContainer} from './components/users/CreateProfile';
import {fetchAllSkills} from './reducers/skill'

const onUserEnter = (nextRouterState) => {
	/* WE STILL NEED A PROFILE MODEL AND API ROUTE*/
	const userId = nextRouterState.params.id;
	console.log('userid from onUserEnter hook is', userId)
	store.dispatch(fetchCurrentUser(userId))
	// store.dispatch(fetchCurrentProfile());
	// store.dispatch(fetchApplications());
}

const onCreateProfileEnter = () => {
	store.dispatch(fetchAllSkills());

}

ReactDOM.render(
	<Provider store={store}>
	  	<Router history = {hashHistory}>

	  		<Route path='/' component={AppContainer} >
		  		<IndexRoute component ={HomeContainer} />
		  		<Route path='/home' component={HomeContainer} />
					<Route path='/create' component={CreateProfileContainer} onEnter={onCreateProfileEnter} />
		  		<Route path='/employerdashboard' component={EmployerDashboardContainer} />
		  		<Route path='/signup' component={SignUpContainer} />
		  		<Route path='/login' component={LoginContainer} />
					<Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onUserEnter}/>

	  		</Route>
		</Router>
	</Provider>,
  document.getElementById('app') // make sure thisa is the same as the id of the div in your index.html
);
