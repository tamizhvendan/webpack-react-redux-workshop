export const STATUS_MESSAGE_LIKED  = "STATUS_MESSAGE_LIKED";

export function likeStatusMessage(statusMessageId) {
  return {
    type : STATUS_MESSAGE_LIKED,
    statusMessageId
  }
}