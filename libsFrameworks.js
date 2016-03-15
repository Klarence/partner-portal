//http://www.jvandemo.com/how-to-properly-integrate-non-angularjs-libraries-in-your-angularjs-application/

function LodashFactory($window) {
    if(!$window._){
        // If lodash is not available you can now provide a
        // mock service, try to load it from somewhere else,
        // redirect the user to a dedicated error page, ...
    }
    return $window._;
}

// Define dependencies
LodashFactory.$inject = ['$window'];

// Register factory
ngModule.factory('_', LodashFactory);

// Inject _ using dependency injection
function SomeController($scope, _){
    $scope.sum = _.add(6,4);
}

// Define dependencies
SomeController.$inject = ['$scope', '_'];

// Register controller
ngModule.controller('SomeController', SomeController)