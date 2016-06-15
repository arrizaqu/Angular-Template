var app = angular.module('myapp',[
	'jcs-autoValidate',
	'angular-ladda'
]);

app.config(function($httpProvider){
	$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
});

app.run(function(defaultErrorMessageResolver) {
		  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			  errorMessages['badUsername'] = 'Username can only contain numbers and letters';
			  errorMessages['badPassword']= 'bad password!!'
			});
		});

app.controller('mycontroller', function($scope, $http){
	
	//onSubmit
	$scope.person = {};
	$scope.submitting = false;
	
	$scope.onSubmit = function($valid){
		$scope.submitting = true;
		if($valid){
			console.log($scope.person);
			$scope.submitting= false;
		} else {
			console.log('false');
			$scope.submitting = false;
		}
		
		
	};
	
});