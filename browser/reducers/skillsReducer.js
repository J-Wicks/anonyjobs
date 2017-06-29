import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/
// All applications for all users
const SET_ALL_SKILLS = 'SET_ALL_SKILLS';
// All applications for one user
// const SET_USER_APPLICATIONS = 'SET_USER_APPLICATIONS';
// One single application for one user;
const SET_USER_APPLICATION = 'SET_USER_APPLICATION';

const initialState = {
	allSkills: []
}



/*---- action cretors */

// awaiting model completion

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ALL_APPLICATIONS:
      newState.allApplications = action.applications;
      break;
    case SET_USER_APPLICATIONS:
      newState.userApplications = action.applications;
      break;
    case SET_USER_APPLICATION:
      newState.userApplication = action.application;
      break;
    default:
      return state;
  }
  return newState;
}
