IonicShowcase_App.controller('UserProfileController', function($scope) {

    $scope.userAuthDetails = {
            uid: window.localStorage.getItem(KEY_USER_ID),
            uFname: window.localStorage.getItem(KEY_USER_FNAME),
            uLname: window.localStorage.getItem(KEY_USER_LNAME),
            uContact: window.localStorage.getItem(KEY_USER_CONTACT),
            uLocation: window.localStorage.getItem(KEY_USER_LOCATION),
            uOrgLevel: window.localStorage.getItem(KEY_USER_ORG_LEVEL),
            uDomain: window.localStorage.getItem(KEY_USER_DOMAIN),
            uCostCenter: window.localStorage.getItem(KEY_USER_COST_CENTER),
            uAddress: window.localStorage.getItem(KEY_USER_ADDRESS)
    };

})
