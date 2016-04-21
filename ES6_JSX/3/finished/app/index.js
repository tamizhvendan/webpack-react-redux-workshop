import Api from './api.js';
import View from './view.js';
import _ from './../styles/app.css';
var App = {}

App.render = function() {
  var items = Api.getItems();
  var view = View.toItemsView(items) +
              View.netAmountView(items);

  document.getElementById("app").innerHTML = view;
}

App.render();