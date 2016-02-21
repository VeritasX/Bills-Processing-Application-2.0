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
    $scope.parseAmount;
    $scope.totalAmount=0;




    $scope.submit=function(){
        $scope.parseAmount=parseFloat($scope.amount);
        $scope.totalAmount= $scope.totalAmount + $scope.parseAmount;
        $scope.totalAmount= $scope.totalAmount.toFixed(2);//Debating on moving this to another function
        $scope.totalAmount=parseFloat($scope.totalAmount);// Above comment
        $scope.billsArray.push($scope.bill);
        $scope.amountArray.push($scope.amount);
        if($scope.billsArray.length > 0){
            $scope.feedback='Please feel free to input more items'
        }
        function clearInput() {
            $scope.bill = null;
            $scope.amount = null;
        }

        clearInput()

    }





}])