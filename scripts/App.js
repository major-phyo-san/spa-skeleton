var App = angular.module("App",['ngMaterial','ngMessages','ngRoute','md.data.table']);

App.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/page-one",{
        templateUrl: "page-one.html",
        controller: "pageOneController"
    })
    .when("/page-two",{
        templateUrl: "page-two.html",
        controller: "pageTwoController"
    })
    .when("/page-three",{
        templateUrl: "page-three.html",
        controller: "pageThreeController"
    })
    .when("/page-four",{
        templateUrl: "page-four.html",
        controller: "pageFourController"
    })
    .otherwise({
        redirectTo: '/'
    })
}]);

App.controller("mainController", function($scope, $mdSidenav){
    $scope.toggleLeftMenu = function()
    {
        $mdSidenav('left').toggle();
    };

});

App.controller("pageOneController", function($scope,$http){
    
});

App.controller("pageTwoController", function($scope,$http){
    
});

App.controller("pageThreeController", function($scope,$http){

});

App.controller("pageFourController", function($scope,$http){

});