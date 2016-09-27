(function() {
    "use strict";

    // tell angular I have a dependency on the route module
    var module = angular.module("psMovies", ["ngRoute"]);

    module.config(function($routeProvider) {
        $routeProvider
            // use a template to load a component (movie-list)
            .when("/list", { template: "<movie-list></movie-list>" })
            .when("/about", { template: "<app-about></app-about>" })
            .otherwise({ redirectTo: "/list" });
    });

    // appAbout component
    module.component("appAbout", {
        // in-line template
        template: "This is the about page"
    });

}());