import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

class LikeButton extends React.Component {
  render () {
    return  (<Button onClick={this.props.onLike} bsStyle="primary">
              <Glyphicon glyph="thumbs-up"/>
            </Button>);
  }
}

export default LikeButton;