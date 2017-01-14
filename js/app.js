var angularClassroomApp =angular.module('angularClassroomApp', [


'ngRoute'


])
.config(function ($routeProvider)
 {
	$routeProvider
	.when('/home', 
	{
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'home'
	})
	.when('/contact', {
		templateUrl: 'view/contact.html',
		controller: 'ContactUsCtrl',
		controllerAs: 'contact'
	})
	.when('/products', {
		templateUrl: 'view/products.html',
		controller: 'ProductsCtrl',
		controllerAs: 'contact'
	})
	.when('/products/:productId', {
templateUrl: 'view/productdetailstab.html',
controller: 'ProductDetailsCtrl'
}).
	otherwise({
    redirectTo: '/home'
  })

});
