import axios from 'axios';
///

/* ----------------------- CONSTANTS -----------*/
// All applications for all users
const SET_ALL_APPLICATIONS = 'SET_ALL_APPLICATIONS';
// All applications for one user
const SET_USER_APPLICATIONS = 'SET_USER_APPLICATIONS';
// One single application for one user;
const SET_CURRENT_APPLICATION = 'SET_CURRENT_APPLICATION';

const APPLY_FOR_JOB = 'APPLY_FOR_JOB'

const initialState = {
	allApplications: [],
	singleUserApplications: [],
  allUserApplications: []
}

/*---- action cretors */

// awaiting model completion
export const applyForJob = newApplication => ({
  type: APPLY_FOR_JOB,
  newApplication
})

export const receiveApplications = applications =>({
  type: SET_ALL_APPLICATIONS,
  applications
})

//Thunk Action Creators
export const applyAndSetPosting = (coverLetter, postingId, userId) => dispatch => {
  axios.post('/api/applications/', {coverLetter, postingId, userId})
  .then(res => res.data)
  .then(selectedPosting => {
    dispatch(applyForJob(selectedPosting))
  })
  .catch(error => console.error(error))
}


export const apply = (application) => {
  return dispatch => {
    console.log('in apply thunk')
    axios.post('/api/applications/', application)
    .then(res => res.data)
    .then (returnedPosting => {

      dispatch(applyForJob(returnedPosting))
    })
  }
}


export const checkApplication = (application) => {
  // This is an API route to do the nasty with ML
}


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
    case SET_CURRENT_APPLICATION:
      newState.currentApplication = action.currentApplication;
      break;
		case APPLY_FOR_JOB:
			newState.allApplications = newState.allApplications.concat([action.newApplication])
			break
    default:
      return state;
  }
  return newState;
}
