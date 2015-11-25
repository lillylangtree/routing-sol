angular.module('routingControllers',[])
.controller('HomeController',function($scope) {
 //put your code here
   $scope.title= 'My Home Page';
 })
 .controller('AboutController',function($scope) {
 //put your code here
  $scope.title= 'My About Page';
 })
 .controller('DetailsController',function($scope,$routeParams) {
 //put your code here
  $scope.title= 'My Details Page';
  $scope.wherefrom = $routeParams.pageFrom;
 })
 .controller('ContactController',function($scope) {
 //put your code here
  $scope.title= 'My Contact Page';
 });