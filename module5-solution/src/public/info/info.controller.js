(function() {

  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['SignupService'];
  function InfoController(SignupService) {
    var infoCtrl = this;

    infoCtrl.displayMessage = false;

    infoCtrl.user = SignupService.getUser();
    console.log('user',infoCtrl.user.firstName);
    if(infoCtrl.user.firstName == undefined) {
      infoCtrl.displayMessage = true;
    }else {
      infoCtrl.menu = SignupService.getMenu();
    }


  };
})();
