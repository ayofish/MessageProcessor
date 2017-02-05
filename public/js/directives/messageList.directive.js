(function() {
    'use strict';

    angular.module('messageProcessor')
        .directive('messageList', function() {
            return {
                templateUrl: 'templates/messageList.html',
                controller: 'messageList.controller',
                controllerAs: 'vm',
                scope: {
                    messages: '=',
                    heading: '@',
                    triggerChange: "&"
                },
                restrict: 'E',
                replace: true,
                link: function(scope, element, attrs, controller) {
                    scope.$watch('messages', (messages) => {
                        controller.messages = messages;
                        controller.paginate();
                    });
                    controller.init(scope, element, attrs);
                }
            };
        });

})();
