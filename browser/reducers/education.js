import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/
// All applications for all users

const ADD_USER_EDUCATION = 'ADD_USER_EDUCATION'
      // const SET_ALL_APPLICATIONS = 'SET_ALL_APPLICATIONS';
      // // All applications for one user
      // const SET_USER_APPLICATIONS = 'SET_USER_APPLICATIONS';
      // // One single application for one user;
      // const SET_USER_APPLICATION = 'SET_USER_APPLICATION';

const initialState = {
	userEducation: [],
}



/*---- action cretors */


const addUserEducation = education => ({
  type: ADD_USER_EDUCATION,
  education
})


/*------------------------Thunk Action Creators ----------*/

export const addEducation = (education, userId) => {
	 return (
    dispatch => {
      axios.post('/api/users/addeducation', {education, userId})
      .then(res => res.data)
      .then(returnedEducation => {
        dispatch(addUserEducation(returnedEducation))
      })
    }
  )
}



export const fetchEducation = () => {
	 return (
    dispatch => {
      axios.get(`/api/users/:id/Education/`)
      .then(res => res.data)
      .then(returnedEducation => {
        dispatch(addUserEducation(returnedEducation))
      })
    }
  )
}


// awaiting model completion

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_USER_EDUCATION:
      newState.userEducation = [action.education, ...newState.userEducation];
      break;
    default:
      return state;
  }
  return newState;
}
