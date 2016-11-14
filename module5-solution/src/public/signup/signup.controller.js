(function() {

  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService', 'MenuService'];
  function SignupController(SignupService, MenuService) {
    var signUpCtrl = this;

    signUpCtrl.message = "";

    signUpCtrl.submit = function() {
      if(signUpCtrl.user.dish) {
         MenuService.getMenuItems(signUpCtrl.user.dish).then(function(response) {
           console.log('response', response);
           if(response.menu_items.length) {
             //save the user
             SignupService.saveUser(signUpCtrl.user, response.category);
             signUpCtrl.message = "Your information has been saved!";
           }else {
             signUpCtrl.message = "No such menu number exists";
           }

         });
      }

    };

  };
})();
