import React from 'react';
import StatusMessage from './statusMessage.jsx';

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

export default Wall;