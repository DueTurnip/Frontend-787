(function() {
'use strict';

angular.module('public')
    .controller('SignupController', SignupController);

SignupController.$inject = ['UserService', '$http'];
function SignupController(UserService, $http) {
    var ctrl = this;

    ctrl.user = {};
    ctrl.menuError = false;
    ctrl.saved = false;

    ctrl.checkMenuItem = function() {
        if (!ctrl.user.menuItem) {
           ctrl.menuError = false;
            return;
        }

        var category = ctrl.user.menuItem.charAt(0).toUpperCase();
        var index = parseInt(ctrl.user.menuItem.slice(1)) - 1;
    
        var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' 
              + category + '/menu_items/' + index + '.json';
        $http.get(url).then(function(response) {
            if (response.data === null) {
                ctrl.menuError = true;
                ctrl.menuItem = null;
            } else {
               ctrl.menuError = false;
                ctrl.menuItem = response.data;
            }
        });
    };

    ctrl.submit = function() {
        // Run the menu check first, then save if valid
        if (!ctrl.user.menuItem) {
        ctrl.menuError = true;
        return;
        }

        var category = ctrl.user.menuItem.charAt(0).toUpperCase();
        var index = ctrl.user.menuItem.slice(1);
        var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'
              + category + '/menu_items/' + index + '.json';

        $http.get(url).then(function(response) {
            if (response.data === null) {
                ctrl.menuError = true;
                ctrl.saved = false;
            } else {
                ctrl.menuError = false;
                UserService.saveUserInfo(
                    ctrl.user.firstName,
                    ctrl.user.lastName,
                    ctrl.user.email,
                    ctrl.user.phone,
                    response.data
                );
                ctrl.saved = true;
            }
        });
    };
}
})();