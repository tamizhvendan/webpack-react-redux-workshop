var Api = Api || {}

Api.getItems = function () {
  console.log("ha");
  return [
    {id : 1, name : "Salad", type: "Food", price : 3.5},
    {id : 2, name : "Coke", type: "Drink", price : 1.5},
  ];
}