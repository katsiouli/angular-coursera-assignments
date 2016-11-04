(function() {

  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories-list.template.html',
      controller:'CategoriesController as menu',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });

  };
})();
