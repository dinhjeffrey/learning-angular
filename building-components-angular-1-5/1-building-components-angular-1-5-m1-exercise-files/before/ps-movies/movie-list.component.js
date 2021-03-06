(function() {
    "use strict";

    // reference to psMovies module
    var module = angular.module("psMovies");

    function fetchMovies($http) {
        return $http.get("./movies.json") // GET returns a promise that delivers a response object
            .then(function(response) {
                return response.data;
            })
    }

    // our controller separated from the component
    // inject $http
    function controller($http) {

        // vm = view model, to capture 'this' into a local variable. this is the same as your controllerAs alias
        var vm = this;
        vm.movies = [];

        // $onInit Called on each controller after all the controllers on an element have been constructed and had their bindings initialized (and before the pre & post linking functions for the directives on this element).
        // This is a good place to put initialization code for your controller.
        // lifecycle hook where we can push model initialization into a method that is distinct and separate from construction of controller
        // initialize response data we get back from http get method and set it equal to local variable in controller function
        vm.$onInit = function () {
            fetchMovies($http).then(function(movies) {
                vm.movies = movies;
            })
        }

        vm.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        vm.downRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };


    }

    /*
     camelCase component's name
     allows us to create custom html elements ~> <movie-list></movie-list>
     A component defines a custom HTML element, and it marries together a template with a controller
    */
    module.component("movieList", {
        templateUrl: "./ps-movies/movie-list.component.html",
        controllerAs: "vm", // use controllerAs syntax, so we're not manipulating a scope object directly
        controller: ["$http", controller] // minifying code can break annotations, so we pass in an array of annotations

    })


}());