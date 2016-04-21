import React from 'react'
import {formatPrice, calculateTax} from './util'

var View = {}

var toItemView = function (item) {
  return (
    <div>
      <p>
        {item.id}, <strong>{item.name}</strong> - <em>{item.price}</em>
      </p>
    </div>
  );
}

View.toItemsView = function (items) {
  var items = items.map(toItemView);
  return (
    <div>
      {items}
    </div>
  );
}

View.netAmountView = function (items) {
  var totalAmount =
    items.map(item => item.price).reduce((prev, curr) => prev + curr);

  var netAmount = totalAmount + calculateTax(totalAmount)
  return (
    <div>
      <p>----------</p>
      <strong>Total : </strong> {formatPrice(netAmount, "Rs.")}
      <p>----------</p>
    </div>
  )
}

module.exports = View