angular.module("knapsackApp").controller("mainCtrl", function($scope, mainService) {

    $scope.data;

    $scope.getWeather = () => {
      mainService.getData().then( (response) => {
        console.log(response, "NICK controller");
        $scope.data = response;
        // let data = $scope.data
        $scope.temp = (response.main.temp * (9/5) - 459.67).toFixed(1) + "℉";
      })
    }

    $scope.getWeather

    $scope.clearData = () => {
      $scope.data = " ";
      $scope.temp = " ";
      console.log("All clear Nick");
    }


});
