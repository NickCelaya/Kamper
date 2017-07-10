angular.module("knapsackApp").service("mainService", function($http) {
    this.giveWeather = function() {
        return $http({
            method: "GET",
            url: "https://api.darksky.net/forecast/2adcc20c86a7811a83a90e343f8b917a/40.758701,%20-111.876183",
        });

    }; 

});




// https://api.darksky.net/forecast/2adcc20c86a7811a83a90e343f8b917a/40.758701,%20-111.876183
// http://swapi.co/api/people/
