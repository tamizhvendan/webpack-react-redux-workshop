import React from 'react';
import {Router, Route, IndexRoute , Link, browserHistory} from 'react-router';
import {render} from 'react-dom';
import Home from './contacts/home.jsx';

class App extends React.Component {

  render () {
    return (
      <div>
        <p>Redux CRUD</p>
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