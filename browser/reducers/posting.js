import {RECEIVE_POSTING, RECEIVE_POSTINGS} from "../action-creators";
import axios from 'axios'

// constants

const MOD_POSTINGS = 'MOD_POSTINGS'

//actions
export const receivePostings = postings =>({
  type: RECEIVE_POSTINGS,
  postings
})

export const receivePosting = posting => ({
  type: RECEIVE_POSTING,
  posting
})

export const modPostings = posting => ({
  type: MOD_POSTINGS,
  posting
})
//Thunk action creators
export const getPostings = dispatch => {
  return(
    axios.get('/api/postings')
    .then(res => res.data)
    .then(postings => {
    dispatch(receivePostings(postings))
    })
  )

}


//add test case to make sure this is getting a posting
export const getPosting = postingId =>{
  return dispatch => {
    axios.get(`/api/postings/${postingId}`)
    .then( response =>{
      dispatch(receivePosting(response.data))
    })
  }
}

//Set Initial State
const initialState = {
	postings: [],
  selectedPosting: {}
}


//Reducer
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_POSTINGS:
      newState.postings = action.postings;
      break;

    case RECEIVE_POSTING:
      newState.selectedPosting = action.posting;
      break;

    case MOD_POSTINGS:
      newState.postings = newState.postings.concat([action.posting]);
      break;

    default:
      return state;

  }
  return newState;
}
