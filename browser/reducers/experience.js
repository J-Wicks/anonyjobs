import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/
// All applications for all users

const ADD_USER_EXPERIENCE = 'ADD_USER_EXPERIENCE'
      // const SET_ALL_APPLICATIONS = 'SET_ALL_APPLICATIONS';
      // // All applications for one user
      // const SET_USER_APPLICATIONS = 'SET_USER_APPLICATIONS';
      // // One single application for one user;
      // const SET_USER_APPLICATION = 'SET_USER_APPLICATION';

const initialState = {
	userExperience: [],
}


/*---- action cretors */


const addUserExperience = experience => ({
  type: ADD_USER_EXPERIENCE,
  experience
})


/*------------------------Thunk Action Creators ----------*/

export const addExperience = (experience, userId) => { return (
    dispatch => {
      axios.post('/api/users/addexperience', {experience, userId})
      .then(res => res.data)
      .then(returnedExperience => {
        dispatch(addUserExperience(returnedExperience))
      })
    }
  )
}



// awaiting model completion

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_USER_EXPERIENCE:
      newState.userExperience = [action.experience, ...newState.userExperience];
      break;
    default:
      return state;
  }
  return newState;
}
