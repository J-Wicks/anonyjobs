

import { combineReducers } from 'redux';
import profileReducer from './profile';
import postingReducer from './posting';
import applicationReducer from './application';
import userReducer from './user';


export default combineReducers({ postingReducer, profileReducer, applicationReducer, userReducer });


import {RECEIVE_POSTINGS, SET_SELECTED_POSTING,  LOGIN_USER, MOD_USER_TYPE} from "../action-creators";



