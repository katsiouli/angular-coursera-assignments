(function() {

  'use strict';

  
angular.module('ShoppingListCheckOff', []).
  controller('ToBuyController', ToBuyController).
  controller('AlreadyBoughtController', AlreadyBoughtController).
  service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();

    toBuy.bought = function(itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.boughtList = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    //initial list with all the items
    var toBuyList = [ { name: "Wines",  quantity: 2 },
    { name: "Yoghurts",  quantity: 3 },
    { name: "Orange juices", quantity: 2 },
    { name: "Cholocolates", quantity: 4 },
    { name: "Cookies", quantity: 10 },
    { name: "Milk",  quantity: 1 },
    { name: "Bananas", quantity: 6 },
    { name: "Apples", quantity: 15 }];

    //the already bought list is initialy empty
    var boughtList = [];

    service.bought = function(itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

    service.getToBuyItems = function() {
      return toBuyList;
    };

    service.getBoughtItems = function() {
      return boughtList;
    };
  };

})();
