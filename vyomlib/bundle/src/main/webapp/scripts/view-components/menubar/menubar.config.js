(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubar')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'menubar',
                    group: 'vyomlib',
                    icon: 'layout_preview',
                    type: 'com-vyom-vyomlib-menubar',
                    designType: 'com-vyom-vyomlib-menubar-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'url',
                            label: 'Url',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true
                        }
                    ]
                }
            ]);
        });
})();