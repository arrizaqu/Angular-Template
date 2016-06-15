var app = angular.module('myapp', []);

app.controller('ParentController', function ($scope, $rootScope) {


});

app.controller('ChildController', function ($scope, $rootScope) {
	
		$scope.reset = function () {
			//$rootScope.name = "reset by child";
		};
});
