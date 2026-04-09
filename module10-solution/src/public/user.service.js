(function() {
'use strict';

angular.module('public')
    .service('UserService', UserService);

function UserService() {
    var service = this;

    service.userInfo = null;

    service.saveUserInfo = function(firstName, lastName, email, phone, menuItem) {
        service.userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            menuItem: menuItem
        };
    };

    service.getUserInfo = function() {
        return service.userInfo;
    };

    service.isSignedup = function() {
        return service.userInfo != null;
    };
}
})();