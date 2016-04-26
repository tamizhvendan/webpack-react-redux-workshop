import {likeStatusMessage, STATUS_MESSAGE_LIKED} from './actions.js'


export function statusMessages(state = [], action) {

  if (action.type ===  STATUS_MESSAGE_LIKED){
    let updatedStatusMessages = state.map(statusMsg => {
      if (statusMsg.id === action.statusMessageId) {
        return Object.assign({}, statusMsg, {
          likesCount : statusMsg.likesCount + 1
        })
      }
      return statusMsg
    })
    return updatedStatusMessages;
  }

  return state;
}

export function notifications(state = [], action) {
  if (action.type === STATUS_MESSAGE_LIKED) {
    let notification = {
      message : "Somebody liked your status",
      statusMessageId : action.statusMessageId,
      seen : false
    }
    return [notification].concat(state)
  }
  return state
}