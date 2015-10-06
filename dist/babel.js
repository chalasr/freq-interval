'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MainCtrl = (function () {
  function MainCtrl(options) {
    _classCallCheck(this, MainCtrl);

    var vm = this;
    this.currentDay = options.currentDay;
    this.workDays = options.workDays;
    this.depends = [];
    this.depCounters = [];
    this.count = this.workDays[this.currentDay].count;
    this.duration = this.workDays[this.currentDay].duration;
    this.finalCount = this.workDays[this.currentDay].final;
    this.increment = this.finalCount / this.duration;
    this.depends[1] = {
      count: Math.round(vm.count * 40.5),
      final: Math.round(vm.finalCount * 40.5)
    };
    this.depends[2] = {
      count: Math.round(vm.count * 3.5),
      final: Math.round(vm.finalCount * 3.5)
    };
    this.depends[3] = {
      count: Math.round(vm.count * 118.5),
      final: Math.round(vm.finalCount * 118.5)
    };
    this.mainCounter = new flipCounter('mainCounter', {
      value: this.count,
      inc: this.increment,
      pace: 250
    });
    this.depends.forEach(function (dep, key) {
      dep.increment = dep.final / vm.duration;
      vm.depCounters[key] = new flipCounter('counter' + key, {
        value: dep.count,
        inc: dep.increment,
        pace: 250
      });
    });
    this.myInterval = setInterval(function () {
      if (vm.mainCounter.getValue() + vm.increment < vm.finalCount) {
        vm.count = vm.mainCounter.getValue();
      } else {
        vm.stopCounters();
      }
    }, 250);
  }

  _createClass(MainCtrl, [{
    key: 'stopCounters',
    value: function stopCounters() {
      vm.mainCounter.stop();
      vm.mainCounter.setValue(this.finalCount);
      angular.forEach(vm.depCounters, function (counter) {
        counter.stop();
        counter.setValue(counter.final);
      });
      clearInterval(vm.myInterval);
      vm.count = vm.finalCount;
    }
  }]);

  return MainCtrl;
})();

;

new MainCtrl({
  workDays: window.workDays,
  currentDay: 13
});