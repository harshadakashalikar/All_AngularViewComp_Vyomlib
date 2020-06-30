(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubar')
        .directive('comVyomVyomlibMenubar', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/menubar/com-vyom-vyomlib-menubar.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.trustSrc = function(url) {
                        return $sce.trustAsResourceUrl(url);
                    };

                    $scope.url = $scope.rxConfiguration.propertiesByName.url;
                }
            };
        });
})();