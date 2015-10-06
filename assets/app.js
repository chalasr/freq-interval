(function() {
  var MainCtrl;
  MainCtrl = function() {
    var currentDay;
    var currentDay, vm;
    vm = MainCtrl.prototype = this;
    currentDay = (new Date).getDate();
    currentDay = 13;
    this.workDays = [];
    this.depends = [];
    this.depCounters = [];
    this.workDays = window.workDays;
    this.count = this.workDays[currentDay].count;
    this.duration = this.workDays[currentDay].duration;
    this.finalCount = this.workDays[currentDay].final;
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
    this.myInterval = setInterval((function() {
      if (vm.mainCounter.getValue() + vm.increment < vm.finalCount) {
        vm.count = vm.mainCounter.getValue();
      } else {
        vm.stopCounters();
      }
    }), 250);
    this.mainCounter = new flipCounter('mainCounter', {
      value: this.count,
      inc: this.increment,
      pace: 250
    });
    vm.depends.forEach(function(dep, key) {
      dep.increment = dep.final / vm.duration;
      vm.depCounters[key] = new flipCounter('counter' + key, {
          value: dep.count,
          inc: dep.increment,
          pace: 250
      });
    });
    this.stopCounters = function() {
      vm.mainCounter.stop();
      vm.mainCounter.setValue(this.finalCount);
      angular.forEach(vm.depCounters, function(counter) {
        counter.stop();
        counter.setValue(counter.final);
      });
      clearInterval(vm.myInterval);
      vm.count = vm.finalCount;
    };
  };
  new MainCtrl;
})();
