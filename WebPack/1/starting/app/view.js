var View = View || {}

View.toItemsView = function (items) {

  var itemViewTemplate = ("{{id}}, {{name}} - {{price}}");

  var itemViews = items.map(function(item){
    return Mustache.render(itemViewTemplate, item);
  });

  return itemViews.join("</br>");

}