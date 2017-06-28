import {RECEIVE_POSTINGS, SET_SELECTED_POSTING} from "../action-creators";

const initialState = {
	postings: []
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_POSTINGS:
      newState.postings = action.postings;
      break;

		case SET_SELECTED_POSTING:
			newState.selectedPosting = action.posting
    default:
      return state;

  }
  return newState;
}
