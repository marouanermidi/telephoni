var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $scope.connect=function(id){
    	console.log($scope.user);
      console.log(id);
    	$http.post('/telephoni/',$scope.user).success(function(response){
    			console.log(response);
          if(response){
    			 window.location.href = '/admin.html';
          }
    	});
    };



}]);