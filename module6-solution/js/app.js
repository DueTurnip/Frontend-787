(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope){
        $scope.count = 0;
        $scope.message = "";
        $scope.list = "";
        $scope.color = "";

        $scope.LunchMessage = function () {
            // Reset message cause it just keeps adding
            $scope.message = ""
            $scope.count = 0;

            calculateCount($scope.list);
            if ($scope.count == 0) {
                $scope.message = "Please enter data first";
                $scope.color = "error";
            } else if ($scope.count > 3) {
                $scope.message = "Too much!";
                $scope.color = "error";
            } else {
                $scope.message = "Enjoy!";
                $scope.color = "succ";
            };
        }

        function calculateCount (string) {
            var words = string.split(",");
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].trim();
                if (words[i] != ""){
                    $scope.count += 1;
                }
            };
        }
    };

})();