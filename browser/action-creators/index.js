//it appears this is no longer being used for action creators, 
//but some constants are still being stored and used from here. 
//Can we change this to a constants folder? 

import axios from "axios";

/* CONSTANTS - ACTION TYPES */
export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SET_SELECTED_POSTING = "SET_SELECTED_POSTING";
export const RECEIVE_POSTING = 'RECEIVE_POSTING';

export const MOD_USER_TYPE = "MOD_USER_TYPE"


/* ACTION CREATORS */

export const loginUser = user => ({
  type: LOGIN_USER,
  user
})

export const modUser = userType => ({
  type: MOD_USER_TYPE,
  userType
})
