'use strict';
exports.__esModule = true;
exports.Some = void 0;
var None_1 = require('./None');
var Some = /** @class */ (function () {
  function Some(x) {
    var _this = this;
    this.map = function (f) {
      return new Some(f(_this.value));
    };
    this.flatMap = function (f) {
      return f(_this.value);
    };
    this.filter = function (f) {
      return f(_this.value) ? _this : new None_1.None();
    };
    this.forEach = function (f) {
      return f(_this.value);
    };
    this.orElse = function (_) {
      return _this;
    };
    this.getOrElse = function (_) {
      return _this.value;
    };
    this.isDefined = function () {
      return true;
    };
    this.isEmpty = function () {
      return false;
    };
    this.get = function () {
      return _this.value;
    };
    this.value = x;
  }
  return Some;
})();
exports.Some = Some;
