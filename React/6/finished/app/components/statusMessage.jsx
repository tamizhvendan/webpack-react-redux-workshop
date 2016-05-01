import React from 'react';
import LikeButton from './like.jsx';
import Card from 'material-ui/lib/card/card';

class StatusMessage extends React.Component {

  constructor() {
    super()
    this.state = {likesCount : 0}
  }

  onLike () {
    this.setState({likesCount : this.state.likesCount + 1})
  }

  render () {
    let style = {margin : 20, padding: 20}
    return (
      <Card style={style}>
        <p>{this.props.message}</p>
        <p>{this.state.likesCount} Likes</p>
        <LikeButton onLike={this.onLike.bind(this)}/>
      </Card>
    );
  }
}

StatusMessage.propTypes = {
  message : React.PropTypes.string.isRequired
}

export default StatusMessage;