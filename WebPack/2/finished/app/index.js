import Api from './api.js';
import View from './view.js';
import _ from './../styles/app.css';
var App = {}

App.render = function() {
  debugger;
  var items = Api.getItems();
  var view = View.toItemsView(items);

  document.getElementById("app").innerHTML = view;
}

App.render();