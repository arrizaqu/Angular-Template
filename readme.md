#Project 5
##plugin and resources
- install : bower install angular-resource
- add js to html.
	- angular-resource-min.js
	- Add Depedency ngResource.
- configure

##Resouce Data
- create Resource Factory
- Inject Factory to Service.
- Crete Self and Insert to element Object view.
	code : 
		app.service('ContactService', function(ContactFactory){
			var self =  {
				'selectedPerson ' : null, 
				'persons' : [],
				'loadData' : function(){
					ContactFactory.get(function(data){
						angular.forEach(data.content, function(person){
							self.persons.push(person)
						});
					});
				} 
			}
			
			self.loadData();
			return self;
		});

##infiniteScroll
	- download library : bower install ngInfiniteScroll
	- load library css and js
		1. load build/ng-infinite-scroll.min.js
	- add Depedency InfinitScroll.
		code : 'infinite-scroll'

##Searching By Server Side
	- ng-bind by$watch.

##Loading with Angular-spinner
	- install : bower install angular-spinner
	- load spinner library to html 
		1. <script src="bower_components/spin.js/spin.js"></script>
		2. <script src="bower_components/angular-spinner/angular-spinner.js"></script>
	- Add Depedency 
		=> 'angularSpinner'
		=> read Docomentatioin
	- add spinner css
		.spinner {
		  position: relative;
		  width: 50px;
		  height: 50px;
		  margin: 0 auto;
		  padding: 40px 0; }
		  .spinner p {
			margin-top: 20px; }
