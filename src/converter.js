/**
 *
 * @package     Converter
 * @version     1.0
 * @license     http://mit-license.org/
 * @author      Tapakan https://github.com/Tapakan
 * @coder       Alexander Oganov <t_tapak@yahoo.com>
 */

if (typeof window !== 'undefined') {
    var Converter = window.Converter || {};
} else {
    GLOBAL.Converter = {};

    var Converter = GLOBAL.Converter;
}

(function (Converter) {
    "use strict";

    /**
     * Init with currencies params.
     * @param settings
     */
    Converter.init = function (settings) {
        if (typeof settings != 'object') {
            throw new Error('Settings must be an instance of object.');
        }

        this.settings = settings;
    };

    /**
     * Returns symbol for currency.
     * @param currency
     * @returns {string|string|string|*}
     */
    Converter.getSymbol = function (currency) {
        if (!_checkCurrency(currency)) {
            throw new Error("Currency" + currency + " does\'t exists.");
        }

        return this.settings[currency].symbol;
    };

    /**
     * Returns rate for currency.
     * @param currency
     * @returns {number}
     */
    Converter.getRate = function (currency) {
        if (!_checkCurrency(currency)) {
            throw new Error("Currency" + currency + " does\'t exists.");
        }

        return this.settings[currency].rate;
    };

    /**
     * Convert value from currency to currency.
     * Before converting check currency.
     * @param {string} from
     * @param {string} to
     * @param {float|int} value
     */
    Converter.value = function (from, to, value) {
        if (!_checkCurrency(from) || !_checkCurrency(to)) {
            throw new Error("Invalid currency.");
        }

        return _convert(from, to, value);
    };

    /**
     * Check currency for existing.
     * @param {string} currency
     * @returns {boolean}
     * @private
     */
    function _checkCurrency(currency) {
        return Converter.settings.hasOwnProperty(currency);
    }

    /**
     * Converting value from one currency to other currency.
     * @param {string} from
     * @param {string} to
     * @param {float|int} value
     * @private
     */
    function _convert(from, to, value) {
        var newValue = value;
        if (from != to) {
            newValue = value / Converter.settings[from].rate;
            newValue = newValue * Converter.settings[to].rate;
        }

        return newValue;
    }
})(Converter);