import React from 'react';
import {render} from 'react-dom';

class LikeButton extends React.Component {
  render () {
    return <button onClick={this.props.onLike}>Like {this.props.caption}</button>
  }
}

class StatusMessage extends React.Component {

  constructor() {
    super()
    this.state = {likesCount : 0}
  }

  onLike () {
    this.setState({likesCount : this.state.likesCount + 1})
  }

  render () {

    let style= { margin : "3px",
                 border : "2px solid",
                 padding : "3px",
                 width: "25%"}

    return (
      <div style={style}>
        <p>{this.props.message}</p>
        <p>{this.state.likesCount} Likes</p>
        <LikeButton caption="My Status" onLike={this.onLike.bind(this)}/>
      </div>
    );
  }
}

StatusMessage.propTypes = {
  message : React.PropTypes.string.isRequired
}

class Wall extends React.Component {
  render () {
    let messages = [
      "React Rocks!",
      "It's easy to create UI in React",
      "Waiting Eagerly for Redux!"
    ]

    let statusMessages = messages.map(msg => <StatusMessage message={msg} />)

    return <div>{statusMessages}</div>;
  }
}

let app = <Wall />

render(app, document.getElementById("app"))