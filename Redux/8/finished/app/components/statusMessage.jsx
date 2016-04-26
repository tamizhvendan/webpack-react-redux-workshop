import React from 'react';
import {Panel} from 'react-bootstrap';
import LikeButton from './like.jsx';

class StatusMessage extends React.Component {

  onLike () {
    this.props.onLike(this.props.status.id);
  }

  render () {
    let status = this.props.status
    return (
      <Panel>
        <p>{status.message}</p>
        <p>{status.likesCount} Likes</p>
        <LikeButton onLike={this.onLike.bind(this)}/>
      </Panel>
    );
  }
}

export default StatusMessage;