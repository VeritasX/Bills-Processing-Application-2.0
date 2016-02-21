/**
 * Created by aaronendsley on 2/20/16.
 */
'use strict'


app.controller('MainCtrl', ['$scope', function($scope){


    $scope.bill;
    $scope.amount;
    $scope.feedback='Hello Welcome to the App, Please Add a bill and an amount and hit ';
    $scope.billsArray=[];
    $scope.amountArray=[];



    $scope.submit=function(){
        $scope.billsArray.push($scope.bill);
        $scope.amountArray.push($scope.amount);
        if($scope.billsArray.length > 0){
            $scope.feedback='Please feel free to input more items'
        }
        $scope.bill=null;
        $scope.amount=null;
    }





}])