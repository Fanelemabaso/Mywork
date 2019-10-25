var myApp = angular.module("myApp",[]);

myApp.controller('mycontroller',function($scope,$http){
    $scope.users = [
        {username: "Fanele",Email:"fanele@rapidtrade.biz"},
        {username: "Arnaldo",Email:"arnaldo@rapidtrade.biz"},
        {username: "Nick",Email:"nick@rapidtrade.biz"}
    ];
    $scope.newUser = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New user added succesfully...";
    };
    $scope.selectUser = function(user){
        $scope.clickedUser = user;
        $scope.message = "user edited succesfully...";
    }
    $scope.updateUser = function (){

    }
    $scope.DeleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "user has been succesfully deleted...";
    }
    $scope.clearMessage = function(){
        $scope.message = "";
    }
});