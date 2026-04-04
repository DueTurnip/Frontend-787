(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            bindings: {
                itemsList: '<'
            },
            templateUrl: 'templates/items.html',
            controller: function(){}
        })
        
}());