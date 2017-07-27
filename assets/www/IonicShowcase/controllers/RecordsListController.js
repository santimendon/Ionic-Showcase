IonicShowcase_App.controller('RecordsListController', function($scope,$state,$ionicLoading,$cordovaToast,$cordovaSms) {

    $scope.savedRecords = [];

      $scope.abc = "Abc";

    $scope.addRecord=function(){
        $state.go("sqlite_operation");
    };

    $scope.getAllRecords=function(){
        var query = "SELECT * FROM UserRequests";

        $scope.showLoader();
        $scope.openDb();

        mDb.executeSql(query, [], function (resultSet) {
          if(resultSet.rows.length > 0) {
            for (var i = 0; i < resultSet.rows.length; i++) {
              var user = {
                  dasId:resultSet.rows.item(i).user_id,
                  name:resultSet.rows.item(i).user_name,
                  contact:resultSet.rows.item(i).user_contact,
                  requestType:resultSet.rows.item(i).request_type,
                  requestDescription:resultSet.rows.item(i).request_description,
                  date:resultSet.rows.item(i).request_date
              };
              $scope.savedRecords.push(user);
            }
            $scope.dismissLoader();
          } else {
              $scope.dismissLoader();
              console.log("NO RECORDS FOUND");
          }
        }, function(error) {
          $scope.dismissLoader();
          console.log('ERROR IN EXECUTING QUERY-' + error.message);
        });
    };

    $scope.sendSms=function(x){
      $scope.showLoader();
      var smsMsg="Dear "+x.name+"("+x.dasId+")"+", your "+x.requestType+" request for "+x.requestDescription+" dated on "+x.date + " has been completed. Thank you.";
      $cordovaSms.send(x.contact, smsMsg)
            .then(function() {
              $scope.dismissLoader();
              alert('SMS has been sent to '+x.name);
            }, function(error) {
              $scope.dismissLoader();
              alert('Error in sending SMS to ' +x.name);
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

})
