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
	
##Angular-auto-validation (add lib)
	- https://github.com/jonsamwell/angular-auto-validate
	- include js file to project
	- Add angular.module as jcs-autoValidate.
	- pattern for username see http://html5pattern.com/Names
	- custome pattern with ng-pattern = "/^[a-z\d\.]{5,}$/"
	- ng-minlenght, min, max, ng-minlength
	- custome message with : 
		function(defaultErrorMessageResolver) {
		  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			  errorMessages['badUsername'] = 'Username can only contain numbers and letters';
			  errorMessages['tooOld']= 'you must be max {0} years old to use this site'
			});
		}
		example : ng-max-err-type = "tooOld" or ng-pattern-err-type = "badUsername"
	- Ladda button 
		- http://lab.hakim.se/ladda/
		- https://github.com/hakimel/Ladda
	- Include Ladda library on project
		//css
		<link href="./libs/ladda/dist/ladda-themeless.min.css" rel="stylesheet" >
		
		//javascript
		<script src="./libs/spin.js/spin.js" ></script >
		<script src="./libs/ladda/dist/ladda.min.js" ></script >
		<script src="./libs/angular-ladda/dist/angular-ladda.min.js" ></script >
	- Add Ladda Module with 'angular-ladda' 	
		- set attribut ladda = "true" and data-type="expand-right"
		- set $scope.submitting = false and true, change ladda = "true", submitting
		- example: 
			<button class="btn btn-primary" 
				ladda="submitting"
				data-style="expand-right"
				type="submit">
				<span ng-show="submitting">Registering</span>
				<span ng-show="!submitting">Register</span>
			</button>
			

##Notes : 
##referency: 
1. https://hello-angularjs.appspot.com/angularjs-http-service-ajax-post-json-data-code-example => untuk Java
2. http://tutsnare.com/post-form-data-using-angularjs/ => untuk php 
		
	
	
