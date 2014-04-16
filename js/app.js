"use strict";

var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
        {
        controller: "SimpleController",
        templateUrl: "partials/view1.html"
         })
         .when('/view2',
        {
        controller: "SimpleController",
        templateUrl: "partials/view2.html"
         })
        .otherwise ({
        redirectTo: '/'
    });
});

demoApp.factory("simpleFactory", function() {
    var customers = [
        {name:'John Smith', city: 'Phoenix'},
        {name:'John Doe', city: 'New York'},
        {name:'Jane Doe', city: 'San Francisco'}
    ];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    };
    return factory;
});

demoApp.controller("SimpleController", function($scope, simpleFactory) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = simpleFactory.getCustomers();
    }

    $scope.addCustomer = function() {
        $scope.customers.push(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
    };
});