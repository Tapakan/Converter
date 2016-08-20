/**
 *
 * @package     Converter
 * @version     1.0
 * @license     http://mit-license.org/
 * @author      Tapakan https://github.com/Tapakan
 * @coder       Alexander Oganov <t_tapak@yahoo.com>
 */

var Converter = function() {};

(function (Converter) {
  "use strict";

  /**
   * Init with currencies params.
   * @param settings
   */
  Converter.prototype.init = function (settings) {
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
  Converter.prototype.getSymbol = function (currency) {
    if (!this._checkCurrency(currency)) {
      throw new Error("Currency " + currency + " does\'t exists.");
    }

    return this.settings[currency].symbol;
  };

  /**
   * Returns rate for currency.
   * @param currency
   * @returns {number}
   */
  Converter.prototype.getRate = function (currency) {
    if (!this._checkCurrency(currency)) {
      throw new Error("Currency " + currency + " does\'t exists.");
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
  Converter.prototype.value = function (from, to, value) {
    if (!this._checkCurrency(from) || !this._checkCurrency(to)) {
      throw new Error("Invalid currency.");
    }

    return this._convert(from, to, value);
  };

  /**
   * Check currency for existing.
   * @param {string} currency
   * @returns {boolean}
   * @private
   */
  Converter.prototype._checkCurrency = function(currency) {
    return this.settings.hasOwnProperty(currency);
  };

  /**
   * Converting value from one currency to other currency.
   * @param {string} from
   * @param {string} to
   * @param {float|int} value
   * @private
   */
  Converter.prototype._convert = function(from, to, value) {
    var newValue = value;
    if (from != to) {
      newValue = value / this.settings[from].rate;
      newValue = newValue * this.settings[to].rate;
    }

    return newValue;
  }

})(Converter);

window.Converter = new Converter();
