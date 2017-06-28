import {RECEIVE_POSTINGS} from "../action-creators";

const initialState = {
	postings: []
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_POSTINGS:
      newState.productOrders = action.productOrders;
      break;

    default:
      return state;

  }
  return newState;
}