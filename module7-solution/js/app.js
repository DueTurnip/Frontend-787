(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var list = this;

        list.toBuy = ShoppingListCheckOffService.getToBuy();

        list.buyItem = function(item) {
            ShoppingListCheckOffService.buyItem(item);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list = this;

        list.bought = ShoppingListCheckOffService.getBought();
    }

    
    function ShoppingListCheckOffService() {
        var service = this;

        var bought = [];
        var toBuy = [
            { name: "Bumble Bees", quantity: 30 },
            { name: "Honey Bees", quantity: 10 },
            { name: "Miner Bees", quantity: 15 },
            { name: "Plumber Bees", quantity: 3 },
            { name: "Leafcutter Bees", quantity: 22 },
            { name: "Carpenter Bees", quantity: 8 },
            { name: "Mason Bees", quantity: 9 },
            { name: "Sweat Bees", quantity: 34 }
        ];

        service.buyItem = function(item) {
            var index = toBuy.findIndex(i => i.name === item.name);
            toBuy.splice(index, 1);
            bought.push(item);
        };

        service.getBought = function() {
            return bought;
        }

        service.getToBuy = function() {
            return toBuy;
        }
    
    }
  
}) ()