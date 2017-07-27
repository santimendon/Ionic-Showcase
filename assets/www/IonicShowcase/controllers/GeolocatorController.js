IonicShowcase_App.controller('GeolocatorController', function($scope,$cordovaBackgroundGeolocation) {

    $scope.geolocation = {
        latitude: "NA",
        longitude: "NA"
    };

    $scope.locate=function(){
      $cordovaBackgroundGeolocation.configure()
          .then(
            null, // Background never resolves
            function (err) { // error callback
              console.error(err);
            },
            function (location) { // notify callback
              console.log(location);
            });


          $scope.stopBackgroundGeolocation = function () {
            $cordovaBackgroundGeolocation.stop();
          };
    };

})
