IonicShowcase_App.controller('SqliteController', function($scope,$ionicLoading,$cordovaToast) {

    $scope.formDetails={
        dasId:"",
        name:"",
        mobile:"",
        requestType:"",
        requestDescription:"",
        date:""
    };

    $scope.saveRequest=function(){
        $scope.showLoader();
        console.log($scope.formDetails);
        $scope.openDb();
        mDb.transaction(function(tx) {
            tx.executeSql('INSERT INTO UserRequests VALUES (?,?,?,?,?,?)', [$scope.formDetails.dasId,$scope.formDetails.name,
            $scope.formDetails.mobile,$scope.formDetails.requestType,$scope.formDetails.requestDescription,$scope.formDetails.date]);
        }, function(error) {
            console.log('ERROR IN ADDING RECORD-' + error.message);
            $scope.dismissLoader();
            $scope.closeDb();
            $cordovaToast.showShortCenter(MSG_RECORD_SAVE_ERROR);
            $scope.clearAllFields();
        }, function() {
            console.log('RECORD ADDED');
            $scope.dismissLoader();
            $scope.closeDb();
            $cordovaToast.showShortCenter(MSG_RECORD_ADDED);
            $scope.clearAllFields();
        });
    };

    $scope.openDb=function(){
          mDb = window.sqlitePlugin.openDatabase({name: DB_NAME, location: 'default'});
    };

    $scope.closeDb=function(){
          mDb.close(function () {
                  console.log("DB CLOSED");
              }, function (error) {
                  console.log("ERROR IN CLOSING DB: " + error.message);
          });
    };

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

    $scope.clearAllFields=function(){
        $scope.formDetails.dasId="";
        $scope.formDetails.name="";
        $scope.formDetails.mobile="";
        $scope.formDetails.requestType="";
        $scope.formDetails.requestDescription="";
        $scope.formDetails.date="";
    };
})
