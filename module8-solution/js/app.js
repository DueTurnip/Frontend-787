(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItems);
    
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;
        list.searchTerm = "";

        list.search = function() {
            MenuSearchService.getMatchedMenuItems(list.searchTerm).then(function (foundItems) {
                list.items = foundItems;
            })
        }

        list.removeItem = function(index) {
            list.items.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchItem) {
            return $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            }).then(function (result) {
                var foundItems = [];
                var categories = Object.values(result.data);

                for (var i = 0; i < categories.length; i++) {
                    console.log(categories[i]);
                    var menuItems = categories[i].menu_items;
                    for (var j = 0; j < menuItems.length; j++) {
                        if (menuItems[j].description.toLowerCase().indexOf(searchItem.toLowerCase()) != -1) {
                            foundItems.push(menuItems[j]);
                        }
                    }
                };
                console.log(foundItems);
                return foundItems;
            })
        };
    }

    function foundItems() {
        return {
            templateUrl: 'itemslist.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: function() {},
            bindToController: true,
            controllerAs: 'list'
        }
    }
}) ()