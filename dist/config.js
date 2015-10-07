"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = (function () {
  function Config() {
    _classCallCheck(this, Config);

    this.workDays = [];
    this.workDays[13] = {
      count: 173830,
      final: 173844,
      duration: 129600
    };
    this.workDays[14] = {
      count: 173844,
      final: 352572,
      duration: 129600
    };
    this.workDays[15] = {
      count: 352572,
      final: 547800,
      duration: 129600
    };
    this.workDays[16] = {
      count: 547800,
      final: 707916,
      duration: 129600
    };
    this.workDays[17] = {
      count: 707916,
      final: 707916,
      duration: 129600
    };
  }

  _createClass(Config, [{
    key: "getParameters",
    value: function getParameters() {
      return this.workDays;
    }
  }]);

  return Config;
})();

;