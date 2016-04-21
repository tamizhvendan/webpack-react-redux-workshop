import {createStore} from 'redux';

let initialState = {
  likesCount : 0
}

export const LIKE_STATUS_MESSAGE = "LIKE_STATUS_MESSAGE"

let likesCountReducer = function (state = initialState, action) {
  if (action.type === LIKE_STATUS_MESSAGE) {
    return {
      likesCount : state.likesCount + 1
    }
  }
  return state;
}

export const store = createStore(likesCountReducer);