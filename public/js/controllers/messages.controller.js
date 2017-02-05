(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name messageProcessor.controller:MessagesCtrl
     * @description
     * # MessagesCtrl
     */
    class MessagesCtrl {
        constructor($scope, messagesService) {
            this.$scope = $scope;
            this.messagesService = messagesService;
            this.init();
        }

        init() {
            this.$scope.unProcessedMessages = this.messagesService.getUnprocessed();
            this.$scope.processedMessages = this.messagesService.getProcessed();
            this.$scope.$on('refreshMessages', ()=>{this.refreshMessages();});
        }
        refreshMessages(){
            this.$scope.unProcessedMessages = this.messagesService.getUnprocessed();
            this.$scope.processedMessages = this.messagesService.getProcessed();
        }
    }

    angular.module('messageProcessor')
        .controller('MessagesCtrl', ['$scope', 'messages.service', MessagesCtrl]);
})();
