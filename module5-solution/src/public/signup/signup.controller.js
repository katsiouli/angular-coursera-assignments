(function() {

  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService', 'MenuService'];
  function SignupController(SignupService, MenuService) {
    var signUpCtrl = this;

    signUpCtrl.message = "";

    var dish = {};

    signUpCtrl.submit = function() {
      signUpCtrl.message = "";
      // if(signUpCtrl.user.dish) {
         MenuService.getMenuItem(signUpCtrl.user.dish).then(function(response) {
             //save the user
             SignupService.saveUser(signUpCtrl.user, response);
             signUpCtrl.message = "Your information has been saved!";
           
         }).catch(function(error) {
           signUpCtrl.message = "No such menu number exists";
         });
      // }

    };

  };
})();
