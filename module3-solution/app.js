(function() {
  'use strict';

  angular.module('NarrowItDownApp', []).
  controller('NarrowItDownController', NarrowItDownController).
  service('MenuSearchService', MenuSearchService).
  directive('foundItems', FoundItemsDirective).
  constant('ServerUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  function FoundItemsDirective() {
    var ddo= {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      transclude: true,
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    };
    return ddo;
  };

  function FoundDirectiveController() {
    var menu = this;

    // menu.noItemsFound = function() {
    //   return menu.foundItems.length ===0;
    // };
  };

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
        return foundItems.menu_items.filter(function (i) {
          return searchTerm.length && i.description.indexOf(searchTerm) !== -1;
        });
        // return foundItems;
      });
    };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.searchTerm = '';

    menu.narrowDownMenu = function() {
      menu.foundItems = [];
      var foundItems =  MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      foundItems.then(function(result) {
          menu.foundItems = result;
          console.log(menu.foundItems);
          if(menu.foundItems.length === 0) {
            menu.displayMsg = true;
          }else {
            menu.displayMsg = false;
          }
      });
    };

    menu.removeItem = function(index) {
      menu.foundItems.splice(index, 1);
    };

  };

})();
