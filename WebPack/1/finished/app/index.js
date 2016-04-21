var Api = require("./api.js")
var View = require("./view.js")

var App = {}

App.render = function() {
  var items = Api.getItems();
  var view = View.toItemsView(items);

  document.getElementById("app").innerHTML = view;
}

App.render();