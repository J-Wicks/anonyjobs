import axios from "axios";

/* CONSTANTS - ACTION TYPES */
export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SET_SELECTED_POSTING = "SET_SELECTED_POSTING";


export const MOD_USER_TYPE = "MOD_USER_TYPE"


/* ACTION CREATORS */
export const receivePostings = postings =>({
  type: RECEIVE_POSTINGS,
  postings
})

export const loginUser = user => ({
  type: LOGIN_USER,
  user
})

export const modUser = userType => ({
  type: MOD_USER_TYPE,
  userType
})
