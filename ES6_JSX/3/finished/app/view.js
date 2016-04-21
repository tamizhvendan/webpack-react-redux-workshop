import Mustache from 'mustache'
import {formatPrice, calculateTax} from './util'

var View = {}

View.toItemsView = function (items) {

  var itemViewTemplate = ("{{id}}, {{name}} - {{price}}");

  var itemViews = items.map(function(item){
    return Mustache.render(itemViewTemplate, item);
  });

  return itemViews.join("</br>");

}

View.netAmountView = function (items) {
  var totalAmount =
    items.map(item => item.price).reduce((prev, curr) => prev + curr);

  var netAmount = totalAmount + calculateTax(totalAmount)
  return `<br /> Total : ${formatPrice(netAmount, "Rs.")}`;
}

module.exports = View