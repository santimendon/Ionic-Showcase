IonicShowcase_App.factory('IonicShowcaseService', ['$http',
    function($http) {

        var IonicShowcaseService = {};

        IonicShowcaseService.authenticateUser = function(payload) {
            return $http.post(USER_AUTH_URL, payload).then(function(response) {
                console.log("RESPONSE FOR USER_AUTH_URL");
                console.log(response.data);
                return response.data;
            });
        }

        return IonicShowcaseService;
    }
]);
