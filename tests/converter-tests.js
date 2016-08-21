(function () {
    "use strict";

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

        describe("Init", function () {
            it("Empty settings", function () {
                expect(function () {
                    Converter.init({});
                }).toThrow();
            });
        });

        describe("Get symbol", function () {
            it("Symbol of UAH is UAH", function () {
                expect("UAH").toBe(Converter.getSymbol("UAH"));
            });
            it("Symbol of EUR is €", function () {
                expect("€").toBe(Converter.getSymbol("EUR"));
            });
            it("Symbol of USD is $", function () {
                expect("$").toBe(Converter.getSymbol("USD"));
            });

            it("Not found currency. Expected Error", function () {
                expect(function () {
                    Converter.getSymbol("BYR");
                }).toThrow();
            });
        });

        describe("Convert", function () {
            it("from UAH to EUR. 2 EUR = 60 UAH", function () {
                expect(60).toEqual(Converter.value("EUR", "UAH", 2));
            });

            it("from USD to EUR. 2 EUR = 3 USD", function () {
                expect(3).toEqual(Converter.value("EUR", "USD", 2));
            });

            it("from EUR to EUR. 2 EUR = 2 EUR", function () {
                expect(2).toEqual(Converter.value("EUR", "EUR", 2));
            });

            it("Not found currency. Expected Error", function () {
                expect(function () {
                    Converter.value("BYR", "EUR", 40);
                }).toThrow();
            });
        });

        describe("getRate", function () {
            it("rate of UAH is 30", function () {
                expect(30).toEqual(Converter.getRate("UAH"));
            });

            it("Not found currency. Expected Error", function () {
                expect(function () {
                    Converter.getRate("BYR");
                }).toThrow();
            });
        });

    });

}).call(this);
