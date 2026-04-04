(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', ['$http', function($http) {
            var baseUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/";

            this.getAllCategories = function() {
                return $http.get(baseUrl + 'categories.json');
            }

            this.getItemsForCategory = function(categoryShortName) {
                return $http.get(baseUrl + 'menu_items/' + categoryShortName + '.json');
            }
        }]); 

}());