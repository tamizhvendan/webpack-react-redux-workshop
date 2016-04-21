var Api = {}

Api.getItems = function () {
  return [
    {id : 1, name : "Pizza", type: "Food", price : 3.5},
    {id : 2, name : "Coke", type: "Drink", price : 1.5},
  ];
}

module.exports = Api