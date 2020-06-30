(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubar')
        .directive('comVyomVyomlibMenubarDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/menubar/com-vyom-vyomlib-menubar-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();