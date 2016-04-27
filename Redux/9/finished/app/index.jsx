import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Router, Route, IndexRoute , Link, browserHistory} from 'react-router';
import {render} from 'react-dom';
import Home from './contacts/home.jsx';

class App extends React.Component {

  navBar() {
    return (
      <Navbar static>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My Contacts</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }

  render () {
    return (
      <div>
        {this.navBar()}
        {this.props.children}
      </div>
    );
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

render(router, document.getElementById("app"))