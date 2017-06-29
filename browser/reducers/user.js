import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/

const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
	allUsers: [],
  currentUser: {},
}

/*------------------------Action Creators ----------*/

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})





/*--------------------Thunk Action Creators */

export const fetchCurrentUser = (id) => { return (

  dispatch => {
    axios.get(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => {
      dispatch(setCurrentUser(user))
    })
  }
)}

// const fetchAllProfiles = /* this is dependent on forthcoming api route*/

// const fetchSelectedProfiles = /* this is dependent on forthcoming api route*/

// const fetchCurrentProfile = /* this is dependent on forthcoming api route*/

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ALL_USERS:
      newState.allUsers = action.users;
      break;
    case SET_CURRENT_USER:
      newState.currentUser = action.user;
      break;
    default:
      return state;
  }
  return newState;
}