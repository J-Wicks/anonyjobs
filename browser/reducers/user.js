import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/

const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const MOD_USER_TYPE = 'MOD_USER_TYPE';
const LOGIN_USER = 'LOGIN_USER';

const LOGOUT_USER = 'Logout_user';

const initialState = {
  postings: [],
  UserType: '',
	allUsers: [],
  currentUser: {}
}

/*------------------------Action Creators ----------*/

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
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



/*--------------------Thunk Action Creators */

export const fetchCurrentUser = (id) => { return (

  dispatch => {
    axios.get(`/api/users/${id}`)
    .then(res => {
      return res.data
    })
    .then(user => {
      dispatch(setCurrentUser(user))
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

   default:
     return state;
 }
 return newState;
}
