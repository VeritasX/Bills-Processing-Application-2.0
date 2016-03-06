/**
 * Created by aaronendsley on 2/20/16.
 */
'use strict';
//all logic that is currently in the controller will be moved to services/factories/providers once i learn how to create them

app.controller('MainCtrl', ['$scope', function($scope){


    $scope.bill=null;
    $scope.amount=null;
    $scope.feedback='Hello Welcome to the App, Please Add a bill and an amount and hit submit!';
    $scope.billsArray=[];
    $scope.amountArray=[];
    $scope.parseAmount;
    $scope.totalAmount=0;//adds to the final amount to submit to the page.




    $scope.submit=function() {
        function clearInput(){
            $scope.amount=null;
            $scope.bill=null;
        }
        if ($scope.amount === null  && $scope.bill === null) {
            $scope.feedback = 'Please input an amount';
        } else {
            $scope.parseAmount = parseFloat($scope.amount);
            $scope.totalAmount = $scope.totalAmount + $scope.parseAmount;
            $scope.totalAmount = $scope.totalAmount.toFixed(2);//Debating on moving this to another function
            $scope.totalAmount = parseFloat($scope.totalAmount);// Above comment

            $scope.billsArray.push($scope.bill);
            $scope.amountArray.push($scope.amount);
            if ($scope.billsArray.length > 0) {
                $scope.feedback = 'Please feel free to input more items'
            }

            clearInput()
        }

    }
}]);