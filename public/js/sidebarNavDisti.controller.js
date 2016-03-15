(function() {

	'use strict';

	angular.module('ptApp').controller('SidebarNavDistiCtrl',
			SidebarNavDistiCtrl);

	function SidebarNavDistiCtrl($scope, $rootScope) {
		$scope.oneAtATime = false;
		$rootScope.groups = $rootScope.userDetails.taskList;
		$rootScope.menuTaskList = {};
		for(var i=0; i<$rootScope.groups.length;i++){
			$rootScope.menuTaskList[$rootScope.groups[i].menuUi] = $rootScope.groups[i].name;
			for(var j=0; $rootScope.groups[i].childList.length>j;j++){
				$rootScope. menuTaskList[$rootScope.groups[i].childList[j].menuUi] = $rootScope.groups[i].childList[j].name;
			}
		}
		//$rootScope.menuTaskList["distiHome"] = "Distribution Home";
		$rootScope.selectedGroupName = 'Home';
		$scope.status = {
			isFirstOpen : false,
			isFirstDisabled : false
		};
		$scope.setGroupToHome = function(){
			$rootScope.selectedGroupName = 'Home'; 
		}
	}
})();
