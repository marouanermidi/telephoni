var myApp =angular.module('myApp',[
    'ngRoute']).
     config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
    $routeProvider.when('/home', {templateUrl: '../public/index.html', controller: 'homeController'});  
    $routeProvider.when('/produits', {templateUrl: '../public/produits.html', controller: 'aboutController'});  
    $routeProvider.when('/contact', {templateUrl: '../public/contact.html', controller: 'contactController'});  
    
    $routeProvider.otherwise({redirectTo: '/index'});
    
    $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        }); 
    
    }]);