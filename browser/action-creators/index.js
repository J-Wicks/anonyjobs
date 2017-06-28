import axios from "axios";

/* CONSTANTS - ACTION TYPES */
export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const LOGIN_USER = "LOGIN_USER"

/* ACTION CREATORS */
export const receivePostings = postings =>({
  type: RECEIVE_POSTINGS,
  postings
})

export const loginUser = user => ({
  type: LOGIN_USER,
  user
})