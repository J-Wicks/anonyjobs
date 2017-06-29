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
import LoginContainer from './containers/LoginContainer'
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
		</Router>
	</Provider>,
  document.getElementById('app') // make sure thisa is the same as the id of the div in your index.html
);
