angular.module("knapsackApp").service("mainService", function($http) {

    const baseUrl = "/api/weather";



    this.getData = () => {
      return $http({
        method: "GET",
        url: baseUrl
      }).then( (response) => {
        console.log(response.data, "NICK service");
        return response.data
      })
    }


});
