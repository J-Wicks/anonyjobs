import axios from "axios";

/* CONSTANTS - ACTION TYPES */
export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";

export const LOGIN_USER = "LOGIN_USER"
export const SET_SELECTED_POSTING = "SET_SELECTED_POSTING"


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


export const setSelectedPosting = posting => ({
  type: SET_SELECTED_POSTING,
  posting
})

export const applyAndSetPosting = (coverLetter, postingId) => dispatch => {
  axios.post('/api/applications/', {coverLetter, postingId})
  .then(res => res.data)
  .then(selectedPosting => {
    dispatch(setSelectedPosting(selectedPosting))
  })
  .catch(error => console.error(error))
}

export const modUser = userType => ({
  type: MOD_USER_TYPE,
  userType
})

