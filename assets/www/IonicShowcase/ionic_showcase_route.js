IonicShowcase_App.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'index.html',
                    controller: ''
                }
            }
        })
        .state('login', {
            cache: false,
            url: '/login',

            views: {
                '': {
                    templateUrl: 'IonicShowcase/templates/login.html',
                    controller: 'LoginController'
                }
            }
        })
        .state('dashboard', {
                   cache: false,
                   url: '/dashboard',

             views: {
                  '': {
                     templateUrl: 'IonicShowcase/templates/dashboard.html',
                     controller: 'DashboardController'
                  }
             }
        })
        .state('camera_operation', {
            cache: false,
            url: '/camera_operation',

            views: {
                '': {
                    templateUrl: 'IonicShowcase/templates/camera_operation.html',
                    controller: 'CameraController'
                }
            }
        })
        .state('barcode_scanner', {
                            cache: false,
                            url: '/barcode_scanner',

             views: {
                 '': {
                     templateUrl: 'IonicShowcase/templates/barcode_scanner.html',
                     controller: 'BarcodeScannerController'
                 }
             }
        })
        .state('user_profile', {
                    cache: false,
                    url: '/user_profile',

            views: {
                        '': {
                    templateUrl: 'IonicShowcase/templates/user_profile.html',
                    controller: 'UserProfileController'
                }
            }
        })
        .state('records_list', {
                    cache: false,
                    url: '/records_list',

            views: {
                        '': {
                    templateUrl: 'IonicShowcase/templates/records_list.html',
                    controller: 'RecordsListController'
                }
            }
        })
        .state('sqlite_operation', {
                    cache: false,
                    url: '/sqlite_operation',

            views: {
                          '': {
                     templateUrl: 'IonicShowcase/templates/sqlite_operation.html',
                     controller: 'SqliteController'
                }
            }
        })
        .state('geolocator', {
                            cache: false,
                            url: '/geolocator',

                    views: {
                                  '': {
                             templateUrl: 'IonicShowcase/templates/geolocator.html',
                             controller: 'GeolocatorController'
                        }
                    }
                })

    if(window.localStorage.getItem(KEY_USER_LOGIN_STATUS)== "true"){
        $urlRouterProvider.otherwise('/dashboard');
    }else{
        $urlRouterProvider.otherwise("/login");
    }
})
