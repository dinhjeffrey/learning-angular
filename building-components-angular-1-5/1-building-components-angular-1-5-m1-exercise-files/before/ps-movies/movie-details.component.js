(function() {
    "use strict";

    var module = angular.module("psMovies");

    // movieDetails has id in endpoint
    module.component("movieDetails", {
        templateUrl: "./ps-movies/movie-details.component.html"
    });

}());