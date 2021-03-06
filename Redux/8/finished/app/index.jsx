import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import AppNavBar from './components/appNavBar.jsx';
import Notification from './components/notifications.jsx';
import Wall from './components/wall.jsx';
import {Router, browserHistory, Route, IndexRoute, Link} from 'react-router';
import store from './store';
import {likeStatusMessage} from './actions';
import {Provider} from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div>
        <AppNavBar />

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3}><Wall /></Col>
        </Row>
      </Grid>
    );
  }
}

class Message extends React.Component {
  render () {
    return <p>Your Messages will appear here</p>
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="messages" component={Message} />
      <Route path="notifications" component={Notification} />
    </Route>
  </Router>
)

let app = (
  <Provider store={store}>{router}</Provider>
)

render(app, document.getElementById("app"))