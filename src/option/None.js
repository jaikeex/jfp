'use strict';
exports.__esModule = true;
exports.None = void 0;
var None = /** @class */ (function () {
  function None() {
    var _this = this;
    this.map = function (_) {
      return new None();
    };
    this.flatMap = function (_) {
      return new None();
    };
    this.filter = function (_) {
      return _this;
    };
    this.forEach = function (_) {};
    this.orElse = function (x) {
      return x;
    };
    this.getOrElse = function (x) {
      return x;
    };
    this.isDefined = function () {
      return false;
    };
    this.isEmpty = function () {
      return true;
    };
    this.get = function () {
      throw new Error('No such element');
    };
  }
  return None;
})();
exports.None = None;
