
import {RECEIVE_POSTINGS, SET_SELECTED_POSTING} from "../action-creators";

import {RECEIVE_POSTINGS, LOGIN_USER, MOD_USER_TYPE} from "../action-creators";


const initialState = {
	postings: [],
  loggedInUser: {},
  UserType: ''
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case MOD_USER_TYPE:
      newState.userType = action.userType;
      break;

    case RECEIVE_POSTINGS:
      newState.postings = action.postings;
      break;

    case LOGIN_USER:
      newState.loggedInUser = action.loggedInUser;
      break;

		case SET_SELECTED_POSTING:
			newState.selectedPosting = action.posting
    default:
      return state;

  }
  return newState;
}
