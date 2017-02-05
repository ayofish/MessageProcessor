(function() {
    'use strict';
    class MessageController {
        constructor(filter, messagesService, babyNamesService, giftsService) {
            this.$filter = filter;
            this.$scope = null;
            this.attrs = null;
            this.element = null;
            this.datePickerOpened = false;
            this.babyNamesService = babyNamesService;
            this.messagesService = messagesService;
            this.giftsService = giftsService;
        }

        init(scope, element, attrs) {
            this.$scope = scope;
            this.attrs = attrs;
            this.element = element;
        }

        get gifts() {
            return this.giftsService.items;
        }

        get babyNames() {
            return this.babyNamesService.names;
        }

        get processed() {
            return this.message.status === 'processed';
        }

        set message(message) {
            this._message = message;
            this.babyName = null;
            this.babyNameError = false;
            this.babyBirthDayError = false;
            this.babyBirthDay = null;
        }

        get isBirthOfBaby() {
            if (this.message.type == 'birthofchild') {
                return true;
            } else {
                return false;
            }
        }

        get isBirthdayWish() {
            if (this.message.type == 'birthdaywish') {
                return true;
            } else {
                return false;
            }
        }

        get message() {
            if (this._message === null || typeof this._message == 'undefined') {
                return {
                    name: "",
                    type: "",
                    status: ""
                };
            } else {
                return this._message;
            }
        }

        get messageName() {
            return this.message.name;
        }

        get messageSubject() {
            var text = '';
            switch (this.message.type) {
                case 'birthofchild':
                    text = 'Congrats on the birth of your child';
                    break;

                case 'birthdaywish':
                    text = 'Birthday Wish';
                    break;
                default:
                    text = '';
                    break;
            }
            return text;
        }

        get messageText() {
            return this.message.text;
        }

        show() {
            this.$scope.show = true;
            this.element.modal({ show: true, backdrop: 'static', keyboard: false });
        }

        hide() {
            this.$scope.show = false;
            this.element.modal('hide');
        }

        process() {
            var process = true;
            this.babyNameError = false;
            this.babyBirthDayError = false;
            if (this.babyBirthDay === null) {
                process = false;
                this.babyBirthDayError = true;
            }

            if (this.babyName === null || $.trim(this.babyName) === '') {
                process = false;
                this.babyNameError = true;
            }
            if (process === true) {
                var babyBirthDay = this.$filter('date')(this.babyBirthDay, 'longDate');
                this.messagesService.setMessageText(this.message.id, 'Whooa well done and congratulations on the birth of ' + this.babyName + ' on ' + babyBirthDay + '.');
                this.hide();
                this.messagesService.setMessageProcessed(this.message.id);
                this.$scope.$emit('refreshMessages', {});
            }
        }

        selectGift(gift) {
            this.messagesService.setMessageText(this.message.id, 'Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: ' + gift.title + '. Enjoy.');
            this.hide();
            this.messagesService.setMessageProcessed(this.message.id);
            this.$scope.$emit('refreshMessages', {});
        }

        openDatePicker() {
            this.datePickerOpened = true;
        }

    }

    angular.module('messageProcessor')
        .controller('message.controller', ['$filter', 'messages.service', 'babynames.service', 'gifts.service', MessageController]);

}());
