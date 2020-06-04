(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1').directive('comVyomVyomlibDashboard1',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.Colour = _config.Colour;

                }
            };
        });
})();