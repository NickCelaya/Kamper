angular.module("knapsackApp").controller("mainCtrl", function($scope, mainService) {
    $scope.getWeather = function() {
        mainService.giveWeather().then(function(response) {
            $scope.weather = response.data.currently
            console.log($scope.weather);
        })
    }
      $scope.getWeather();


    $scope.clearData = function() {
        $scope.weather = " ";
    }


});
