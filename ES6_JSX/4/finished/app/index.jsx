import Api from './api.js';
import View from './view.jsx';
import _ from './../styles/app.css';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    let items = Api.getItems();
    return (
      <div>
        {View.toItemsView(items)}
        {View.netAmountView(items)}
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"))