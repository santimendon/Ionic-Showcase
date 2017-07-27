IonicShowcase_App.controller('LoginController', function($scope,$state,$cordovaNetwork,$cordovaToast,$ionicLoading,IonicShowcaseService,$cordovaSQLite) {

    $scope.payload = {
        hello: "world"
    };

    $scope.loginDetails={
        email:"",
        mobile:"",
        rememberMe:""
    };

    $scope.login=function(){
        if($scope.loginDetails.email=="" || $scope.loginDetails.mobile==""){
          $cordovaToast.showShortCenter(MSG_ALL_FIELDS_MANDATORY);
        }else{
          if ($cordovaNetwork.isOnline()) {
            $scope.showLoader();
            IonicShowcaseService.authenticateUser($scope.payload).then(function(response) {
                            $scope.dismissLoader();
                            $scope.parseLoginResponse(response);
                        }, function(error) {
                            $scope.dismissLoader();
                        });
          }else{
            $cordovaToast.showShortCenter(MSG_INTERNET_NA);
          }
        }
    };

    $scope.parseLoginResponse=function(response){
      window.localStorage.setItem(KEY_USER_ID,response.userAuthDetails.userId);
      window.localStorage.setItem(KEY_USER_FNAME,response.userAuthDetails.userFname);
      window.localStorage.setItem(KEY_USER_LNAME,response.userAuthDetails.userLname);
      window.localStorage.setItem(KEY_USER_CONTACT,response.userAuthDetails.userContact);
      window.localStorage.setItem(KEY_USER_LOCATION,response.userAuthDetails.userLocation);
      window.localStorage.setItem(KEY_USER_ORG_LEVEL,response.userAuthDetails.userOrgLevel);
      window.localStorage.setItem(KEY_USER_DOMAIN,response.userAuthDetails.userDomain);
      window.localStorage.setItem(KEY_USER_COST_CENTER,response.userAuthDetails.userCostCenter);
      window.localStorage.setItem(KEY_USER_ADDRESS,response.userAuthDetails.userAddress);
      window.localStorage.setItem(KEY_USER_LOGIN_STATUS,$scope.loginDetails.rememberMe);
      $state.go("dashboard");
    }

    $scope.showLoader=function(){
      $ionicLoading.show({
        template: '<ion-spinner icon="crescent" class="spinner-positive"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: true,
      });
    };

    $scope.dismissLoader=function(){
      $ionicLoading.hide();
    };

})
