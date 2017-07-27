IonicShowcase_App.controller('BarcodeScannerController', function($scope,$state,$cordovaBarcodeScanner) {

    $scope.barcode = {
        barcodeData: "NA",
        barcodeFormat: "NA",
        barcodeCancelled: "NA"
    };

    $scope.scanBarcode=function(){
        $cordovaBarcodeScanner.scan().then(function(imageData) {

                    console.log("BARCODE DATA: " + imageData.text);
                    console.log("BARCODE FORMAT: " + imageData.format);
                    console.log("CANCELLED: " + imageData.cancelled);

                    $scope.barcode.barcodeData=imageData.text;
                    $scope.barcode.barcodeFormat=imageData.format;
                    $scope.barcode.barcodeCancelled=imageData.cancelled;
                }, function(error) {
                    console.log("An error happened -> " + error);
                });
    };

})
