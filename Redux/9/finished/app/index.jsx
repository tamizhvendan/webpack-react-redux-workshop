import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Router, Route, IndexRoute , Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

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
      </div>
    );
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      
    </Route>
  </Router>
);

render(router, document.getElementById("app"))