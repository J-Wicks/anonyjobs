import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router'
import store from './store';
// import {getProductOrders, getProducts, receiveCart, getCartByUser, loginUser, receiveProducts, receiveUsers, getUsersOrders, receiveOrders, getUserById, getProductById, getOrderById, receiveReviews } from './action-creators'
// import scss from '../index.scss';
import axios from 'axios';

import AppContainer from './containers/AppContainer';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import EmployerDashboardContainer from './containers/EmployerDashboardContainer';
import UserDashboardContainer from './containers/UserDashboardContainer';
import UserDashboard from '.components/users/UserDashboard/'

const onUserEnter = () => {
	/* WE STILL NEED A PROFILE MODEL AND API ROUTE*/
	// store.dispatch(fetchCurrentProfile());
	store.dispatch(fetchApplications());
}


ReactDOM.render(
	<Provider store={store}>
	  	<Router history = {hashHistory}>

	  		<Route path='/' component={AppContainer} >
		  		<IndexRedirect to="/home" />
		  		<Route path='/home' component={HomeContainer} />
		  		<Route path='/employerdashboard' component={EmployerDashboardContainer} />
		  		<Route path='/login' component={LoginContainer} />
					<Route path='/userdashboard' component={UserDashboardContainer} onEnter={} />
							<Route path='/userdashboard' component={UserDashboard} />
					</Route>
	  		</Route>
		</Router>
	</Provider>,
  document.getElementById('app') // make sure thisa is the same as the id of the div in your index.html
);
