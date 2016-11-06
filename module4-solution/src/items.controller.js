(function() {

  'use strict';

  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['categoryInfo'];
  function ItemsController(categoryInfo) {
    var category = this;
    console.log('categoryInfo', categoryInfo);
    category.items = categoryInfo.menu_items;
    category.name = categoryInfo.category.name;
    category.shortName = categoryInfo.category.short_name;
  };

})();
