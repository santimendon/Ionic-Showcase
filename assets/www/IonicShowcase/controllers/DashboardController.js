IonicShowcase_App.controller('DashboardController', function($scope,$state) {

    $scope.openBarcodeScanner=function(){
        $state.go("barcode_scanner");
    };

    $scope.openSqlitePage=function(){
        $state.go("records_list");
    };

    $scope.openMyProfile=function(){
        $state.go("user_profile");
    };

    $scope.openGeolocator=function(){
        $state.go("geolocator");
    };
    $scope.openCamera=function(){
        $state.go("camera_operation");
    };

})
