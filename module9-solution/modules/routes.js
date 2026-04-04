(function () {
    'use strict';

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function RoutesConfig($stateProvider, $urlRouterProvider) {
            // Routing Stuff
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                })

            .state('categories', {
                url: '/categories',
                template: '<categories categories-list="$resolve.resolvedCategories.data"></categories>',
                resolve: {
                    resolvedCategories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/:categoryShortName',
                template: '<items items-list="$resolve.resolvedItems.data"></items>',
                resolve: {
                    resolvedItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
        }

        angular.module('MenuApp')
            .config(RoutesConfig);
}());