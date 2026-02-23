(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope){
        // Do stuff
    };

})();