(function() {

  'use strict';

  angular.module('LunchCheck', []).

  controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = ''; //user's inpuy that holds the luch
    $scope.message = ''; //output message

    $scope.checkIfTooMuch = function() {
      //check if input is empty
      if($scope.lunch.length === 0) {
        $scope.message = 'Please enter data first!';
        $scope.style = 'text-danger';
        $scope.borderStyle = 'redborder';
      }else {
        //use split method to split the input lunch in the various items
        var dishes = $scope.lunch.split(',');
        //check the number of items to return the apppropriate message
        $scope.message = dishes.length > 3 ? 'Too much!' : 'Enjoy!';
        $scope.style = 'text-success';
        $scope.borderStyle = 'greenborder';
      }
    };

  };

})();
