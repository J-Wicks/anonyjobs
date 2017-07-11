import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import store from './store';
import '../index.scss'
import axios from 'axios';
import { AppContainer, CreateProfileContainer, HomeContainer, LoginContainer, NewPostingContainer, SelfDashboardContainer, SelfProfileContainer, SignUpContainer, SinglePostingContainer, UserDashboardContainer, UserProfileContainer } from './containers';
import { Application, NewPosting, Postings, SinglePosting } from './components';
import {receiveApplications} from './reducers/application';
import {fetchAllSkills} from './reducers/skill'
import {fetchRelevantUser} from './reducers/user'
import { logIn } from './reducers/user'
import {getPostings, getPosting, receivePostings} from './reducers/posting'


const onUserEnter = (nextRouterState) => {
	const userId = nextRouterState.params.id;
	store.dispatch(fetchRelevantUser(userId))
}

const onViewSomeoneElseEnter = (nextRouterState) => {
	const userId = nextRouterState.params.id;
	store.dispatch(fetchRelevantUser(userId))
}

const onPostingsEnter = () => {
	axios.get('/api/postings')
	.then(res => res.data)
	.then(postings => {
			store.dispatch(receivePostings(postings))
	})
}

const onPostingEnter = (nextRouterState) => {
	store.dispatch(getPosting(nextRouterState.params.id))
}

const onAppEnter = function() {
	axios.get('/api/auth/me')
	.then( returnedUser =>{
		const user = returnedUser.data
		store.dispatch(logIn(user))
	})
}

const onDashEnter = function() {
	Promise.all([
		axios.get('/api/postings'),
		axios.get('/api/applications')
		])
	.then(responses => responses.map( r => r.data))
	.then(([postings, applications]) =>{
		store.dispatch(receivePostings(postings))
		store.dispatch(receiveApplications(applications))
	})
}

const onCreateProfileEnter = () => {
	store.dispatch(fetchAllSkills());
}

ReactDOM.render(
	<Provider store={store}>
	<Router history = {browserHistory}>
		<Route path='/' component={AppContainer} onEnter={onAppEnter}>
			<IndexRedirect to='/home' />
			<Route path='/employerdashboard' component={NewPostingContainer} onEnter={onDashEnter} />
			<Route path='/home' component={HomeContainer} />
			<Route path ='/newposting' component={NewPosting} />
			<Route path='/signup' component={SignUpContainer} />
			<Route path='/login' component={LoginContainer} />
			<Route path ='/application' component={Application} />
			<Route path="/createProfile" component={CreateProfileContainer} onEnter={onCreateProfileEnter} />
			<Route path="/viewProfile" component={SelfProfileContainer} />
			<Route path="/viewProfile/:id" component={UserProfileContainer} onEnter={onViewSomeoneElseEnter}/>
			<Route path ='/postings' component={Postings} onEnter={onPostingsEnter} />
			<Route path ='/postings/:id' component={SinglePostingContainer} onEnter={onPostingEnter}/>
		</Route>
	</Router>
	</Provider>,
  document.getElementById('app')) // make sure thisa is the same as the id of the div in your index.html

	// <Route path="/editProfile" />
	// <Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onViewSomeoneElseEnter} />
	// <Route path='/userdashboard' component={SelfDashboardContainer} onEnter={onUserEnter} />
