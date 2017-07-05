import axios from 'axios';
///



/* ----------------------- CONSTANTS -----------*/
// All applications for all users
const SET_ALL_SKILLS = 'SET_ALL_SKILLS';


const initialState = {
	allSkills: []
}



/*---- action cretors */

const setAllSkills = skills => ({ type: SET_ALL_SKILLS, skills})



/*-----thunk action creators*/

// in process...

export const fetchAllSkills = () => {
	return (
		dispatch => {
			axios.get('/api/skills')
			.then(res => {
				return res.data
			})
			.then(skills => {
				dispatch(setAllSkills(skills))
			})
		}

	)
}

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ALL_SKILLS:
      newState.allSkills = action.skills;
      break;
    default:
      return state;
  }
  return newState;
}
