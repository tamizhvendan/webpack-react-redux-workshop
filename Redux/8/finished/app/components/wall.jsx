import React from 'react';
import StatusMessage from './statusMessage.jsx';
import {connect} from 'react-redux';
import {likeStatusMessage} from './../actions';

class Wall extends React.Component {
  render () {

    let statusMessages = this.props.statusMessages

    let view = statusMessages.map(status =>
                                      (<StatusMessage key={status.id}
                                        status={status}
                                        onLike={this.props.onLike}/>))

    return <div>{view}</div>;
  }
}

const mapStateToProps = (state) => {
  return {statusMessages : state.statusMessages}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLike : (id) => {
      dispatch(likeStatusMessage(id))
    }
  }
}

const WallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);

export default WallContainer;