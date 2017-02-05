(function() {
    'use strict';
    angular.module('messageProcessor', ['ui.bootstrap', 'ngResource', 'ngSanitize', 'ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/messages'
                }).when('/messages', {
                    templateUrl: 'templates/messages.html',
                    controller: 'MessagesCtrl',
                    controllerAs: 'vm'
                }).otherwise({
                    redirectTo: '/messages'
                });

            $locationProvider.html5Mode(true);
        });
}());
