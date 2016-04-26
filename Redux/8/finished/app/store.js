import {createStore} from 'redux';
import {statusMessages} from './reducers';

let initialState = {
  "statusMessages": [{
    id : 1,
    message : "I love react",
    likesCount : 0
  }, {
    id : 2,
    message : "Redux is cool",
    likesCount: 0
  }]
}


const store = createStore(statusMessages, initialState)

export default store