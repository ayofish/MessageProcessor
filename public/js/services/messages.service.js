(function() {
    "use sctrict";

    /**
     * @ngdoc service
     * @name messageProcessor.MessagesService
     * @description
     * # MessagesService
     */
    angular.module('messageProcessor')
        .service('messages.service', function() {
            // Service logic
            this.messages = [{
                id: 1,
                type: "birthdaywish",
                name: "Jason Bourne",
                status: "unprocessed",
                text: ""
            }, {
                id: 2,
                type: "birthdaywish",
                name: "Shawn Archer",
                status: "unprocessed",
                text: ""
            }, {
                id: 3,
                type: "birthdaywish",
                name: "Bryan Mills",
                status: "unprocessed"
            }, {
                id: 4,
                type: "birthdaywish",
                name: "John Spartan",
                status: "unprocessed"
            }, {
                id: 5,
                type: "birthdaywish",
                name: "Simon Phoenix",
                status: "unprocessed"
            }, {
                id: 6,
                type: "birthdaywish",
                name: "Shawn Archer",
                status: "unprocessed"
            }, {
                id: 7,
                type: "birthdaywish",
                name: "Caster Troy",
                status: "unprocessed"
            }, {
                id: 8,
                type: "birthofchild",
                name: "Cameron Poe",
                status: "unprocessed"
            }, {
                id: 9,
                type: "birthofchild",
                name: "Cyrus the Virus",
                status: "unprocessed"
            }, {
                id: 10,
                type: "birthofchild",
                name: "Garland Green",
                status: "unprocessed"
            }, {
                id: 11,
                type: "birthofchild",
                name: "Ethan Hunt",
                status: "unprocessed"
            }, {
                id: 12,
                type: "birthofchild",
                name: "Django Unchained",
                status: "unprocessed"
            }, {
                id: 13,
                type: "birthofchild",
                name: "Nathan Augren",
                status: "unprocessed"
            }, {
                id: 14,
                type: "birthofchild",
                name: "Bio Man",
                status: "unprocessed"
            }];

            var that = this;

            this.getUnprocessed = function() {
                return that.messages.filter((message) => {
                    return message.status === "unprocessed";
                });
            };

            this.getProcessed = function() {
                return that.messages.filter((message) => {
                    return message.status === "processed";
                });
            };

            this._getMessageRef = function(id){
                for(var i=0;i<that.messages.length;i++){
                    if(that.messages[i].id === id){
                        return that.messages[i];
                    }
                }
            };

            this.setMessageProcessed = function(id){
                that._getMessageRef(id).status = "processed";
            };

            this.setMessageText = function(id, text){
                 that._getMessageRef(id).text = text;
            };
        });
})();
