import {createStore, combineReducers} from 'redux';
import {statusMessages, notifications} from './reducers';

let initialState = {
  statusMessages: [{
    id : 1,
    message : "I love react",
    likesCount : 0
  }, {
    id : 2,
    message : "Redux is cool",
    likesCount: 0
  }],
  notifications : []
}

let reducers = combineReducers({
  statusMessages,
  notifications
})

const store = createStore(reducers, initialState)

export default store