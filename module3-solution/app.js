(function() {
  'use strict';

  angular.module('NarrowItDownApp', []).
  controller('NarrowItDownController', NarrowItDownController).
  service('MenuSearchService', MenuSearchService).
  constant('ServerUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  MenuSearchService.$inject = ['$http', 'ServerUrl']
  function MenuSearchService($http, ServerUrl) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: ServerUrl
      }).then(function(result) {
        //process items and only keep the item that match the provided input
        var foundItems = result.data;
        console.log('found items', foundItems);
        return foundItems;
      });
    };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.narrowDownMenu = function(searchTerm) {
      var foundItems =  MenuSearchService.getMatchedMenuItems(searchTerm);
      foundItems.then(function(result) {
          console.log('ctrl found items', result);
      });
    };
  };



})();
