'use strict';
exports.__esModule = true;
var None_1 = require('./None');
var Some_1 = require('./Some');
var OptionFactory = /** @class */ (function () {
  function OptionFactory() {}
  OptionFactory.of = function (x) {
    return new Some_1.Some(x);
  };
  OptionFactory.ofNullable = function (x) {
    return x === null ? new None_1.None() : new Some_1.Some(x);
  };
  return OptionFactory;
})();
exports['default'] = OptionFactory;
