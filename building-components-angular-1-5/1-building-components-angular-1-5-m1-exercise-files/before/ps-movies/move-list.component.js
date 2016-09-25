(function() {
    "use strict";

    // reference to psMovies module
    var module = angular.module("psMovies");

    /*
     camelCase component's name
     allows us to create custom html elements ~> <movie-list></movie-list>
     A component defines a custom HTML element, and it marries together a template with a controller
    */
    module.component("movieList", {
        templateUrl: "./ps-movies/movie-list.component.html",
        controllerAs: "vm",
        controller: function() {

            // vm = view model, to capture 'this' into a local variable. this is the same as your controllerAs alias
            var vm = this;

            vm.message = "Hello from a component controller!";

            vm.changeMessage = function() {
                vm.message = "New message";
            }
        }

    })


}());