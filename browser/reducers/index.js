

import { combineReducers } from 'redux';
import profileReducer from './profile';
import postingReducer from './posting';
import applicationReducer from './application';
import userReducer from './user';
import skillsReducer from './skill';
import experienceReducer from './experience';
import educationReducer from './education';

export default combineReducers({ postingReducer, profileReducer, applicationReducer, userReducer, skillsReducer, experienceReducer, educationReducer });


// import {RECEIVE_POSTINGS, SET_SELECTED_POSTING,  LOGIN_USER, MOD_USER_TYPE} from "../action-creators";
