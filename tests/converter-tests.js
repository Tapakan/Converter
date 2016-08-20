

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
    });
  });

}).call(this);
