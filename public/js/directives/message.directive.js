(function() {
    'use strict';

    angular.module('messageProcessor')
        .directive('message', function() {
            return {
                templateUrl: 'templates/message.html',
                controller: 'message.controller',
                controllerAs: 'vm',
                scope: {
                    message: '=',
                    // title: '=',
                    show: '='
                },
                restrict: 'E',
                replace: true,
                link: function(scope, element, attrs, controller) {
                    scope.$watch('message', (message) => {
                        controller.message = message;
                    });
                    scope.$watch('show', (show) => {
                        if (show === true) {
                            controller.show();
                        } else {
                            controller.hide();
                        }
                    });
                    controller.init(scope, element, attrs);
                }
            };
        });

})();
