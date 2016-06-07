#Project 2 (List Angular Datatable)

##Looping List Datatable From JSObject (template)
- create module and controller
- loop list persons with ng-repeat 

##handling click
	- create selected row with create function selectedIndex and selectedPerson.
		example :
		//table tr
			<tr ng-repeat="person in persons"
				ng-style="{'background-color': $index == selectIndex ? 'lightgray' : ''}"
				ng-click="selectPerson($index)"
			>
		//js
			$scope.selectIndex = null;
			$scope.selectPerson = function(index){
				$scope.selectIndex = index;
				console.log(index);
			};

##Selecting Row Detail
	- create system grid table and detail
		<div class="panel panel-default" >
			<div class="panel-heading" >Details</div >
				<div class="panel-body" >
				</div>
			</div>
		</div>
	- passing selectedPerson to controller.
