// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var mDb=null;
var IonicShowcase_App = angular.module('IonicShowcase', ['ionic', 'ngCordova'/*, 'ngMap'*/])

IonicShowcase_App.run(function($ionicPlatform,$cordovaSQLite,$ionicPopup ) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        mDb = window.sqlitePlugin.openDatabase({name: DB_NAME, location: 'default'});
        mDb.executeSql(QUERY_CREATE_TABLE, [], function(rs) {
              console.log('TABLE CREATED-' + rs.rows.item(0).mycount);
          }, function(error) {
            console.log('ERROR IN CREATING TABLE-' + error.message);
         });
         mDb.close(function () {
                 console.log("DB CLOSED");
             }, function (error) {
                 console.log("ERROR IN CLOSING DB-" + error.message);
             });

        if (window.Connection) {
            if (navigator.connection.type == Connection.NONE) {
                $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if (!result) {
                            ionic.Platform.exitApp();
                        }
                    });
            }
        }

    });
})
