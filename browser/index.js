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
import {UserDashboardContainer} from './containers/UserDashboardContainer'
import {CreateProfileContainer} from './containers/CreateProfile';
import CreateProfile from './containers/CreateProfile';
import {fetchAllSkills} from './reducers/skill'
import {fetchRelevantUser} from './reducers/user'
import { logIn } from './reducers/user'
import {getPostings} from './reducers/posting'
import Application from './components/Application'
import NewPosting from './components/NewPosting'
import LoginContainer from './containers/LoginContainer'
import AllPostings from './components/AllPosting';
import singlePosting from './components/singlePosting';
import {UserProfileContainer} from './containers/UserProfileContainer';
import {SelfProfileContainer} from './containers/SelfProfileContainer';
import {SelfDashboardContainer} from './containers/SelfDashboardContainer';

const onUserEnter = (nextRouterState) => {
	const userId = nextRouterState.params.id;
	store.dispatch(fetchRelevantUser(userId))
}

const onViewSomeoneElseEnter = (nextRouterState) => {
	const userId = nextRouterState.params.id;
	store.dispatch(fetchRelevantUser(userId))
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
}

const onCreateProfileEnter = () => {
	store.dispatch(fetchAllSkills());
}

ReactDOM.render(
	<Provider store={store}>
	<Router history = {hashHistory}>
		<Route path='/' component={AppContainer} onEnter={onAppEnter}>
			<IndexRedirect to="/home" />
			<Route path='/home' component={HomeContainer} />
			<Route path ='/newposting' component={NewPosting} />
			<Route path='/employerdashboard' component={EmployerDashboardContainer} />
			<Route path='/signup' component={SignUpContainer} />
			<Route path='/login' component={LoginContainer} />
			<Route path ='/application' component={Application} />
			<Route path="/createProfile" component={CreateProfile} onEnter={onCreateProfileEnter} />
			<Route path="/editProfile" />
			<Route path="/viewProfile" component={SelfProfileContainer} />
			<Route path="/viewProfile/:id" component={UserProfileContainer} onEnter={onViewSomeoneElseEnter}/>
			<Route path='/userdashboard/' component={SelfDashboardContainer} onEnter={onUserEnter} />
			<Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onViewSomeoneElseEnter} />
			<Route path ='/postings' component={AllPostings} onEnter={onPostingsEnter}>
				<Route path ='/:id' component={singlePosting} />
			</Route>

		</Route>
	</Router>
	</Provider>,
  document.getElementById('app')) // make sure thisa is the same as the id of the div in your index.html
