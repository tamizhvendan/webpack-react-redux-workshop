import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import ThumbsUpIcon from 'material-ui/lib/svg-icons/action/thumb-up';

class LikeButton extends React.Component {
  render () {
    return (
      <IconButton tooltip="like" onClick={this.props.onLike}>
        <ThumbsUpIcon />
      </IconButton>
    )
  }
}

export default LikeButton;