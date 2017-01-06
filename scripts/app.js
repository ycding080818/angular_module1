(function () {
	'use strict';
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		$scope.names = "";
		$scope.showMessage = "";
		$scope.fontColor= "";

		$scope.lunchCheck = function () {
			var nameList = $scope.names.split(',');
			var count = 0;
			for(var name in nameList) {
				if( nameList[name] == ""  ) {
					count++;
				}
			}
			if($scope.names == "" || count == nameList.length) {
				$scope.showMessage = "Please enter data first"; 
				$scope.fontColor = "red";
				return;
			}
			
			$scope.showMessage = (nameList.length - count) > 3 ? "Too much!" : "Enjoy!";
			$scope.fontColor = "green";
		};
	}
})();