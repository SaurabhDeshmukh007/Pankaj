angular.module('angularClassroomApp')
.controller('MainCtrl', function ($rootScope) {
$rootScope.tab = 1;
});
angular.module('angularClassroomApp')
.controller('HomeCtrl', function ($scope, $rootScope, categoryService) {
$rootScope.tab = 1;
$scope.categories = categoryService.categories;
});
angular.module('angularClassroomApp')
.controller('ProductsCtrl', function ($scope,$rootScope, productService) {
$rootScope.tab = 2;
$scope.products = productService.products;
});



angular.module('angularClassroomApp')
.controller('ProductDetailsCtrl',['$scope', '$routeParams', 'productService', function ($scope, $routeParams, productService){
	var productId = $routeParams.productId;
	angular.forEach(productService.products, function(product, index){
		if(product.id == productId){
			$scope.selectedProduct = product;
		}
	});
}]);



angular.module('angularClassroomApp')
.controller('ContactUsCtrl', function ($rootScope, $scope) {
$rootScope.tab = 3;
$scope.user = {
name:'',
email: '',
comment: ''
};
$scope.submitForm = function(){
alert('Form submitted successfully.');
}}
);