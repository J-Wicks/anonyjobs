import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import store from './store';
// import {getProductOrders, getProducts, receiveCart, getCartByUser, loginUser, receiveProducts, receiveUsers, getUsersOrders, receiveOrders, getUserById, getProductById, getOrderById, receiveReviews } from './action-creators'
// import scss from '../index.scss';
import axios from 'axios';
import AppContainer from './containers/AppContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import EmployerDashboardContainer from './containers/EmployerDashboardContainer';
import {UserDashboardContainer} from './containers/UserDashboardContainer';
import {fetchCurrentUser} from './reducers/user'
// import UserDashboard from './components/users/UserDashboard/'

const onUserEnter = (nextRouterState) => {
	/* WE STILL NEED A PROFILE MODEL AND API ROUTE*/
	const userId = nextRouterState.params.profileId
	store.dispatch(fetchCurrentUser(userId))
	// store.dispatch(fetchCurrentProfile());
	// store.dispatch(fetchApplications());
}





import Application from './components/Application'

ReactDOM.render(
	<Provider store={store}>
		<Router history = {browserHistory}>
			<Route path='/' component={AppContainer} >
				<IndexRedirect to="/home" />
				<Route path ='/application' component={Application} />
				<Route path='/home' component={HomeContainer} />
				<Route path='/employerdashboard' component={EmployerDashboardContainer} />
				<Route path='/login' component={LoginContainer} />
			</Route>

import LoginContainer from './containers/LoginContainer'

ReactDOM.render(
	<Provider store={store}>
	  	<Router history = {hashHistory}>

	  		<Route path='/' component={AppContainer} >
		  		<IndexRedirect to="/home" />
		  		<Route path='/home' component={HomeContainer} />
		  		<Route path='/employerdashboard' component={EmployerDashboardContainer} />
		  		<Route path='/signup' component={SignUpContainer} />
		  		<Route path='/login' component={LoginContainer} />
					<Route path='/userdashboard/:id' component={UserDashboardContainer} onEnter={onUserEnter}/>
					<Route path="/createProfile" />
					<Route path="/editProfile" />
					<Route path="/viewProfile" />
	  		</Route>

		</Router>
	</Provider>,
  document.getElementById('app') // make sure thisa is the same as the id of the div in your index.html
);
