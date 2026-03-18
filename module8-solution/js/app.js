(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);
    
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;

    }

    function MenuSearchService() {
        var service = this;
        var found;

        service.getMatchedMenuItems = function (searchItem) {

        }
    }
}) ()