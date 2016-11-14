(function() {

  'use strict';

  angular.module('public')
  .service('SignupService', SignupService);

  function SignupService() {
    var service = this;

    var user = {};

    var menu = null;

    service.saveUser = function(newuser, dish) {
      user = newuser;
      menu = dish;
      console.log('user', user);
    };

    service.getUser = function() {
      return user;
    };

    service.getMenu = function() {
      return menu;
    };

  };
})();
