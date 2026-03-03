(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('customCurrency', function() {
            return function(amount) {
                return '$$$' + amount.toFixed(2);
            }
        });


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
            { name: "Bumble Bees", quantity: 30, pricePerItem: 2 },
            { name: "Honey Bees", quantity: 10, pricePerItem: 3 },
            { name: "Miner Bees", quantity: 15, pricePerItem: 4 },
            { name: "Plumber Bees", quantity: 3, pricePerItem: 5 },
            { name: "Leafcutter Bees", quantity: 22, pricePerItem: 5 },
            { name: "Carpenter Bees", quantity: 8, pricePerItem: 4 },
            { name: "Mason Bees", quantity: 9, pricePerItem: 3 },
            { name: "Sweat Bees", quantity: 34, pricePerItem: 2 }
        ];

        service.buyItem = function(item) {
            var index = toBuy.findIndex(i => i.name === item.name);
            toBuy.splice(index, 1);
            bought.push(item);
        }

        service.getBought = function() {
            return bought;
        }

        service.getToBuy = function() {
            return toBuy;
        }
    
    }
  
}) ()