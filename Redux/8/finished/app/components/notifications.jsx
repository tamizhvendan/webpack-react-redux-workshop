import React from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

class Notification extends React.Component {
  render () {
    let notification = this.props.notification;
    return (
      <Panel>
        <p>{notification.message}</p>
        <p>Status Id : {notification.statusMessageId}</p>
      </Panel>
    )
  }
}

class NotificationContainer extends React.Component {
  render() {
    let notifications = this.props.notifications;
    let view = notifications.map( (n,i) => <Notification key={i}
                                                notification={n} />);
    return <div>{view}</div>
  }
}

let mapStateToProps = (state) => {
  return {notifications : state.notifications}
}

export default connect(mapStateToProps)(NotificationContainer);