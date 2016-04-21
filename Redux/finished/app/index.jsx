import React from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {store, LIKE_STATUS_MESSAGE} from './store';

class LikeButton extends React.Component {
  render () {
    return <button onClick={this.props.onLike}>Like {this.props.caption}</button>
  }
}

class StatusMessage extends React.Component {

  onLike () {
    store.dispatch({
      type : LIKE_STATUS_MESSAGE
    })
  }

  render () {

    let style= { margin : "3px",
                 border : "2px solid",
                 padding : "3px",
                 width: "25%"}

    return (
      <div style={style}>
        <p>{this.props.message}</p>
        <p>{this.props.likesCount} Likes</p>
        <LikeButton caption="My Status" onLike={this.onLike}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    likesCount : state.likesCount
  }
}

let StatusMessageContainer = connect(mapStateToProps)(StatusMessage)

let app = (
  <Provider store={store}>
    <StatusMessageContainer message="React Rocks!" />
  </Provider>
)

render(app, document.getElementById("app"))