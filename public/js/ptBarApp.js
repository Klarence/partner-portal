(function () {

    'use strict';

    var ptBarApp = angular
        .module('ptBarApp', [
            //'ngAnimate',
            //'ngResource',
            //'ngRoute',
            //'ngSanitize',
            //'ngTouch'
            //'ui.bootstrap',
            //'ui.bootstrap.tpls',
            //'ui.bootstrap.transition',
            //'ui.grid',
            ////'showEmptyMsg',
            //'ui.grid.autoResize',
            //'ui.grid.cellNav',
            //'ui.grid.edit',
            //'ui.grid.expandable',
            //'ui.grid.exporter',
            //'ui.grid.moveColumns',
            ////'ui.grid.paging',
            //'ui.grid.pinning',
            //'ui.grid.resizeColumns',
            //'ui.grid.selection',
            //'ui.router'
        ]);
    //.module('ptBarApp', [navbarApp, workspaceApp]);


    angular
        .module('ptBarApp')
        .controller(
        'PartnerBarController', [
            '$scope',
            '$rootScope',
            '$stateParams',
            '$modal',
            '$log',
            '$window',
            'posTransactionFactory',
            '$http',
            function($scope, $filter, $rootScope, $stateParams,
                     $modal, $log, $window, posTransactionFactory, $http) {

                $scope.widthValue = '1024px';
                $scope.toggleWidth = false;
                function toggleWidth() {
                    if (toggleWidth === true) {
                        $scope.widthValue = 'auto'
                    } else if (toggleWidth === false) {
                        $scope.widthValue = '1024px'
                    }
                }
                $scope.NavListSpaces = false;
            }
        ]);
}());