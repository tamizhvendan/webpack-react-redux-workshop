import React from 'react';
import {render} from 'react-dom';

class LikeButton extends React.Component {
  render () {
    return <button>Like Me</button>
  }
}

render(<LikeButton />, document.getElementById("app"))