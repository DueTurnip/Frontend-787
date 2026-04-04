(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            bindings: {
                categoriesList: '<'
            },
            templateUrl: 'templates/categories.html',
            controller: function() {}
        })
        
}());