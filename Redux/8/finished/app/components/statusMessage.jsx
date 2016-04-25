import React from 'react';
import {Panel} from 'react-bootstrap';
import LikeButton from './like.jsx';

class StatusMessage extends React.Component {

  constructor() {
    super()
    this.state = {likesCount : 0}
  }

  onLike () {
    this.setState({likesCount : this.state.likesCount + 1})
  }

  render () {
    return (
      <Panel>
        <p>{this.props.message}</p>
        <p>{this.state.likesCount} Likes</p>
        <LikeButton onLike={this.onLike.bind(this)}/>
      </Panel>
    );
  }
}

StatusMessage.propTypes = {
  message : React.PropTypes.string.isRequired
}

export default StatusMessage;