var assert = require('assert');


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

Converter.init(currencies);

describe("Converter", function () {

    describe("Get symbol", function () {
        it("Symbol of UAH is UAH", function () {
            assert.equal(Converter.getSymbol("UAH"), "UAH");
        });
        it("Symbol of EUR is €", function () {
            assert.equal(Converter.getSymbol("EUR"), "€");
        });
        it("Symbol of USD is $", function () {
            assert.equal(Converter.getSymbol("USD"), "$");
        });
    });

    describe("Convert", function () {
        it("from UAH to EUR. 2 EUR = 60 UAH", function () {
            assert.equal(Converter.value("EUR", "UAH", 2), 60);
        });

        it("from USD to EUR. 2 EUR = 3 USD", function () {
            assert.equal(Converter.value("EUR", "USD", 2), 3);
        });

        it("from EUR to EUR. 2 EUR = 2 EUR", function () {
            assert.equal(Converter.value("EUR", "EUR", 2), 2);
        });
    });
});