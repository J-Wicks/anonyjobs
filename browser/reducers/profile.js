import axios from 'axios';
///

/* ----------------------- CONSTANTS -----------*/

const SET_ALL_PROFILES = 'SET_ALL_PROFILES';
const SET_SELECTED_PROFILES = 'SET_SELECTED_PROFILES';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

const initialState = {
	allProfiles: [],
  selectedProfiles: [],
  currentProfile: {},
}

// const fetchAllProfiles = /* this is dependent on forthcoming api route*/

// const fetchSelectedProfiles = /* this is dependent on forthcoming api route*/

// const fetchCurrentProfile = /* this is dependent on forthcoming api route*/

/*------------------ REDUCER */

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_ALL_PROFILES:
      newState.allProfiles = action.profiles;
      break;
    case SET_SELECTED_PROFILES:
      newState.selectedProfiles = action.profiles;
      break;
    case SET_CURRENT_PROFILE:
      newState.currentProfile = action.profile;
      break;
    default:
      return state;
  }
  return newState;
}
