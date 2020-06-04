(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Dashboard1',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-dashboard1',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-dashboard1-design', // register design directive
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'

                    }

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();