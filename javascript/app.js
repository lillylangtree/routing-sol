// create the module and name it mainApp
// also include ngRoute for all our routing needs
angular.module('routingApp', ['ngRoute','routingControllers']);
// configure our routes
angular.module('routingApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'AboutController'
		})
				// route for the details page
		.when('/details/:pageFrom', {
			templateUrl : 'templates/details.html',
			controller  : 'DetailsController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})
		.otherwise({redirectTo: '/'}); ;
});

	
	