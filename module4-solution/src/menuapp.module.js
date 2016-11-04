(function() {

  'use strict';

  angular.module('MenuApp', ['ui.router', 'data']).run(['$rootScope', function($rootScope){
      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.log('error', error);
      });
    }]);

})();
