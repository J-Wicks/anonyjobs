import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/

const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_RELEVANT_USER = 'SET_RELEVANT_USER';
const MOD_USER_TYPE = 'MOD_USER_TYPE';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const SET_USER_SUMMARY = 'SET_USER_SUMMARY'

const initialState = {
  postings: [],
  UserType: '',
	allUsers: [],
  currentUser: {},
  relevantUser: {}
}

/*------------------------Action Creators ----------*/

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

const setRelevantUser = user => ({
  type: SET_RELEVANT_USER,
  user
})

const logoutUser = user => ({
  type: LOGOUT_USER,
  user
})

const loginUser = user => ({
  type: LOGIN_USER,
  user
})

const setUserSummary = sumMary => ({
  type: SET_USER_SUMMARY,
  summary
})





/*--------------------Thunk Action Creators */

export const fetchRelevantUser = (id) => { return (

  dispatch => {
    axios.get(`/api/users/${id}`)
    .then(res => {
      return res.data
    })
    .then(user => {
      dispatch(setRelevantUser(user))
    })
  }
)}

export const logOut = () =>{
  return(
      dispatch =>{
        axios.get('/api/login/logout')
        .then( response => {
        dispatch(logoutUser({}))
        })
      }
    )
}

export const logIn = (user) =>{
  return(
      dispatch =>{
        dispatch(loginUser(user))
      }
  )
}

export const addEducation = (education, userId) => {
	 return (
    dispatch => {
      axios.post('/api/users/addeducation', {education, userId})
      .then(res => res.data)
      .then(returnedUser => {
        dispatch(setCurrentUser(returnedUser))
      })
    }
  )
}


export const addExperience = (experience, userId) => { return (
    dispatch => {
      axios.post('/api/users/addexperience', {experience, userId})
      .then(res => res.data)
      .then(returnedUser => {
        dispatch(setCurrentUser(returnedUser))
      })
    }
  )
}

export const addSummary = (summary, userId) => {
  return (
    dispatch => {
      axios.post('/api/users/setSummary', {summary, userId})
      .then(returnedSummary => {
        dispatch(setUserSummary(returnedSummary))
      })
    }
  )
}

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

   case MOD_USER_TYPE:
     newState.userType = action.userType;
     break;

    case LOGIN_USER:
      newState.currentUser = action.user;
      break;

    case LOGOUT_USER:
      newState.currentUser = {};
      break;
    case SET_RELEVANT_USER:
      newState.relevantUser = {};
      break;
    case SET_USER_SUMMARY:
      newState.currentUser.summary = action.summary;
      break;
   default:
     return state;
 }
 return newState;
}
