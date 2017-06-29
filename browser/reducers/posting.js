import {RECEIVE_POSTINGS, receivePostings} from "../action-creators";
import axios from 'axios'

export const getPostings = dispatch => {
	axios.get('/api/postings')
	.then(res => res.data)
	.then(postings => {
		dispatch(receivePostings(postings))
	})
}

const initialState = {
	postings: []
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_POSTINGS:
      newState.postings = action.postings;
      break;

    default:
      return state;

  }
  return newState;
}
