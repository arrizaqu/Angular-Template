#Angular - Course
##Intro Developer Tools
- inspect Element (Chrome)
- console.log() or snipet
 
##IDE Web Developer
- https://www.jetbrains.com/webstorm/download/
- Notepad++

##Source Course 
- check on github as example source template

##Project_1 (template 1)
	- Setting Module and Controller with "ng-app" and "control"  
	- ng-model @All field form and show data form with form Expression.
	- submit function with "ng-click"
	- submitting with $http (server : 'https://localhost/server')
		Example : 
			$http.post('http://localhost:1234/angular/', $scope.formData).success(function(data){
				console.log('server loaded');
			}).error(function(data){
				console.log('contact server failed!');
			});		

##Form Validation 1 (template 2)
	- update submit form.
	- change submit with html 5 validation

##Form validation 2 (template 2)
	- set form name 
	- set novalidate
	- show the form data with expression
	- passing theForm.$valid to $scope controller
	- set ng-class has-error and has-success from $theForm.email.$valid
	- set theForm.$pristine
	- set vaidatioin $theForm.email.$error
	- set class help-block and ng-show="theForm.email.$error.required" and theForm.email $error.email
	- set theForm.submitted.
	
	
	
