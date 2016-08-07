var assert     = require('assert');
var Converter  = require('../src/converter.js');

var currencies = {
    "UAH": {
        "rate"  : 30,
        "symbol": "UAH"
    },
    "EUR": {
        "rate"  : 1,
        "symbol": "€"
    },
    "USD": {
        "rate"  : 1.5,
        "symbol": "$"
    }
};

GLOBAL.Converter.init(currencies);

describe("Converter", function () {

    describe("Get symbol", function () {
        it("Symbol of UAH is UAH", function () {
            assert.equal(GLOBAL.Converter.getSymbol("UAH"), "UAH");
        });
        it("Symbol of EUR is €", function () {
            assert.equal(GLOBAL.Converter.getSymbol("EUR"), "€");
        });
        it("Symbol of USD is $", function () {
            assert.equal(GLOBAL.Converter.getSymbol("USD"), "$");
        });
    });

    describe("Convert", function () {
        it("from UAH to EUR. 2 EUR = 60 UAH", function () {
            assert.equal(GLOBAL.Converter.value("EUR", "UAH", 2), 60);
        });

        it("from USD to EUR. 2 EUR = 3 USD", function () {
            assert.equal(GLOBAL.Converter.value("EUR", "USD", 2), 3);
        });

        it("from EUR to EUR. 2 EUR = 2 EUR", function () {
            assert.equal(GLOBAL.Converter.value("EUR", "EUR", 2), 2);
        });
    });
});