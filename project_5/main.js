var app = angular.module('app', [
	'ngResource', 
	'infinite-scroll',
	'angularSpinner',
	'jcs-autoValidate',
	'angular-ladda'
]);

app.config(function($httpProvider, $resourceProvider, laddaProvider){
	laddaProvider.setOption({
		style: 'expand-right'
	});
	
});

app.controller('PersonsListController', function($scope, ContactService){
	$scope.contact = ContactService;
	$scope.persons = $scope.contact.persons;
	$scope.loadMore = function(){
		$scope.contact.loadMore();
	}
	$scope.$watch('search', function(search, oldValue){
		if(angular.isDefined(search)){
			$scope.contact.doSearch(search);
		}
	});
});

app.controller('PersonDetailController', function($scope, ContactService){
	$scope.contact = ContactService;
	//saving
	$scope.save = function(){
		$scope.contact.updateContact($scope.contact.selectedPerson);
	}
	//removing
	$scope.remove = function(){
		$scope.contact.removeContact($scope.contact.selectedPerson);
	}
});

app.factory('ContactFactory', function($resource){
	return $resource('http://localhost:8080/persons/:id');
});

app.service('ContactService', function(ContactFactory){
	
	var self = {
		'persons' : [],
		'self' : null,
		'isSaving': false,
		'isDeleting': false,
		'page' : 1,
		'isDeleting': false,
		'isLoading' : false,
		'loadMore': function(){
			self.page += 1;
			self.loadData();
		},
		'doSearch' : function(search){
			self.persons = [];
			self.search = search;
			self.page = 1,
			self.loadData();
		},
		'doSearch' : function(search){
			self.persons = [];
			self.search = search;
			self.page = 1,
			self.loadData();
		},
		'loadData' : function(){
			self.isLoading = true;
			var params = {
				page : self.page, 
				search : self.search
			}
			
			ContactFactory.get(params, function(data){
				angular.forEach(data.content, function(person){
					self.persons.push(person);
				});
			});
			self.isLoading = false;
		},
		'updateContact' : function(person){
			console.log('update for save person called!!');
			console.log(person);
			self.isSaving = true;
			/* person.update().$promise.then(function(){
				self.isSaving= false;
			}); */
		},
		'removeContact' : function(person){
			console.log('update person called!!');
			self.isDeleting = true;
			person.$remove().then(function(){
				self.isDeleting= false;
				var index = self.persons.indexOf(person);
				self.persons.splice(index, 1);
				self.selectedPerson= null;
			});
		}
	}
	
	self.loadData();
	return self;
});

