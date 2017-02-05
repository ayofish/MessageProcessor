(function() {
    'use strict';
    class MessageListController {
        constructor(messageService) {
            this.messageService = messageService;
            this.itemsPerPage = 5;
            this.currentPage = 1;
            this.$scope = null;
            this.attrs = null;
            this.element = null;
            this.showModal = false;
            // this.messageToView = {};
        }

        init(scope, element, attrs) {
            this.$scope = scope;
            this.attrs = attrs;
            this.element = element;
            this.messages = scope.messages;
        }

        paginate() {
            var begin = ((this.currentPage - 1) * this.itemsPerPage);
            var end = begin + this.itemsPerPage;
            this.paginatedMessages = this.messages.slice(begin, end);
        }

        viewMessage(message) {
            // this.messageService.setMessageProcessed(message.id);
            // this.$scope.triggerChange();
            this.showModal = true;
            this.messageToView = message;
        }

        get totalMessages() {
            return this.messages.length;
        }

        get isVisible() {
            return (this.messages.length > 0);
        }

        get pageCount() {
            return this.messages.length > 0 ? (Math.ceil(this.messages.length / this.itemsPerPage)) : 0;
        }
    }

    angular.module('messageProcessor')
        .controller('messageList.controller', ["messages.service", MessageListController]);

}());
