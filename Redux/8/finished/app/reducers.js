import {likeStatusMessage, STATUS_MESSAGE_LIKED} from './actions.js'

export function statusMessages(state, action) {

  if (action.type ===  STATUS_MESSAGE_LIKED){
    let updatedStatusMessages = state.statusMessages.map(statusMsg => {
      if (statusMsg.id === action.statusMessageId) {
        return Object.assign({}, statusMsg, {
          likesCount : statusMsg.likesCount + 1
        })
      }
      return statusMsg
    })
    return {statusMessages : updatedStatusMessages};
  }

  return state;
}