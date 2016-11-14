(function() {

  'use strict';

  angular.module('public')
  .service('SignupService', SignupService);

  function SignupService() {
    var service = this;

    var user = {};

    service.saveUser = function(newuser) {
      user = newuser;
      console.log('user', user);
    };

    service.getUser = function() {
      return user;
    };

  };
})();
